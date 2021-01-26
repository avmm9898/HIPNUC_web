## 数据包

#### 数据包总览

| 数据标签 | 数据包长度(包含标签1字节) | 名称                    | 备注                  |
| -------- | ------------------------- | ----------------------- | --------------------- |
| 0x91     | 76                        | IMUSOL(IMU数据集合)     | HI221输出数据包       |
| 0x62     | 变长                      | GWSOL(无线节点数据集合) | HI221Dongle输出数据包 |


#### 0X91( IMUSOL)

共76字节。集成了IMU的传感器原始输出和姿态解算数据。

| 字节偏移 | 类型     | 大小 | 单位                 | 说明                                                         |
| -------- | -------- | ---- | -------------------- | ------------------------------------------------------------ |
| 0        | uint8_t  | 1    | -                    | 数据包标签:0x91                                              |
| 1        | uint8_t  | 1    | -                    | ID                                                           |
| 2        | -        | 6    | -                    | 保留                                                         |
| 8        | uint32_t | 4    | ms                   | 时间戳信息，从系统开机开始累加，每毫秒增加1                  |
| 12       | float    | 12   | 1G(1G = 1重力加速度) | X,Y,Z轴的加速度                                              |
| 24       | float    | 12   | deg/s                | X,Y,Z轴的角速度                                              |
| 36       | float    | 12   | uT                   | X,Y,Z轴的磁场强度                                            |
| 48       | float    | 12   | deg                  | 节点欧拉角集合, 顺序为：横滚角(Roll)，俯仰角(Pitch)，航向角(Yaw) |
| 60       | float    | 16   | -                    | 节点四元数集合,顺序为WXYZ                                    |

#### 0x62(GWSOL)

新版本无线接收机支持此数据包。数据包前8个字节为接收机信息。后面分为N个数据块。每个数据块描述一个节点的姿态数据(最大支持16个节点)。每个数据块大小为76字节，数据结构同0x91。

此协议包数据量较大，建议将HI221Dongle波特率调整至460800或921600以获得最高的帧率输出。格式如下：

| 字节偏移                 | 大小 | 类型    | 单位 | 说明                      |
| ------------------------ | ---- | ------- | ---- | ------------------------- |
| 0                        | 1    | uint8_t | -    | 数据包标签:0x62           |
| 1                        | 1    | uint8_t | -    | GWID, 接收机网络ID        |
| 2                        | 1    | uint8_t | -    | N, 此帧包含节点数据块个数 |
| 3                        | 5    | -       | -    | 保留                      |
| *----节点数据块开始----* | -    | -       | -    | *数据结构同0x91*          |
| 8+76*N(N=0-15)           | 1    | uint8_t | -    | 数据包标签:0x91           |
| 9+76*N(N=0-15)           | 1    | uint8_t | -    | 节点N的ID                 |
| 10+76*N                  | 10   | -       | -    | 保留                      |
| 20+76*N                  | 12   | float   | -    | 节点N三轴加速度           |
| 32+76*N                  | 12   | float   | -    | 节点N三轴角速度           |
| 44+76*N                  | 12   | float   | -    | 节点N轴磁场强度           |
| 56+76*N                  | 12   | float   | -    | 节点N欧拉角               |
| 68+76*N                  | 16   | float   | -    | 节点N四元数               |
| *----节点数据块结束----* | -    | -       | -    | -----------               |

### 出厂默认数据包

出厂默认一帧中携带数据包数据定义如下：

| 产品        | 默认输出数据包 |
| ----------- | -------------- |
| HI221       | 0x91           |
| HI221Dongle | 0x62           |

### 数据帧结构示例

#### 数据帧配置为 `0x91` 数据包

使用串口助手采样一帧数据,共82字节, 前6字节为帧头, 长度和CRC校验值。剩余76字节为数据域。假设数据接收到C语言数组`buf`中。如下所示:

5A A5 4C 00 6C 51 **91** 00 A0 3B 01 A8 02 97 BD BB 04 00 9C A0 65 3E A2 26 45 3F 5C E7 30 3F E2 D4 5A C2 E5 9D A0 C1 EB 23 EE C2 78 77 99 41 AB AA D1 C1 AB 2A 0A C2 8D E1 42 42 8F 1D A8 C1 1E 0C 36 C2 E6 E5 5A 3F C1 94 9E 3E B8 C0 9E BE BE DF 8D BE

* 第一步：判断帧头，得到数据域长度和帧CRC：

帧头:`5A` `A5`

帧数据域长度:`4C` `00`: (0x00<<8) + 0x4C = 76

帧CRC校验值:`6C` `51`:(0x51<<8) + 0x6C = 0x516C

* 第二步： 校验CRC

```
    uint16_t payload_len;
    uint16_t crc;
    
    crc = 0;
    payload_len = buf[2] + (buf[3] << 8);
    
    /* calulate 5A A5 and LEN filed crc */
    crc16_update(&crc, buf, 4);
    
    /* calulate payload crc */
    crc16_update(&crc, buf + 6, payload_len);
```

得到CRC值为0x516C. 帧CRC校验通过。

* 第三步：接收数据

从`0x91`开始为数据包的数据域。在C语言中可以定义结构体来方便的读取数据：

定义0x91数据包结构体如下：

```
__packed typedef struct
{
    uint8_t     tag;                /* data packet tag */
    uint8_t     id;
    uint8_t     rev[6];             /* reserved */
    uint32_t    ts;                 /* timestamp */
    float       acc[3];
    float       gyr[3];
    float       mag[3];
    float       eul[3];             /* eular angles: Roll,Pitch,Yaw */
    float       quat[4];            /* quaternion */
}id0x91_t;
```

`__packed` 为编译器关键字(Keil下)，表示结构体按字节紧对齐，结构体每一个元素一一对应0x91数据包的结构定义。接收数据时将接收到的数组直接memcpy到结构体即可：(注意定义结构体时必须4字节对齐), 其中`buf `指向帧头, `buf[6]`指向帧中数据域 。

```
    /* 接收数据并使用0x91数据包结构定义来解释数据 */
    __align(4) id0x91_t dat;    /* struct must be 4 byte aligned */
    memcpy(&dat, &buf[6], sizeof(id0x91_t));
```

最后得到dat数据结果：

```
id              : 0
timestamp       : 310205
acc             :    0.224    0.770    0.691
gyr             :  -54.708  -20.077 -119.070
mag             :   19.183  -26.208  -34.542
eul(R/P/Y)      :   48.720  -21.014  -45.512
quat            :    0.855    0.310   -0.310   -0.277
```



#### 数据帧配置为 0x62 数据包

使用串口助手采样一帧数据,共166字节, 前6字节为帧头, 长度和CRC校验值。剩余160字节为数据域。假设数据接收到C语言数组`buf`中。如下所示:

5A A5 A0 00 B5 DC **62** **00** **02** 00 00 00 00 00 **91** 01 00 00 00 00 00 00 00 00 00 00 EC 51 B8 BD 12 83 40 3E 64 3B 8F 3F 33 33 E7 C2 CD CC 3C C1 33 33 0B C1 9A 99 99 41 9A 99 A9 40 CD CC 94 C1 80 D3 28 41 E8 CD 9B 40 B1 45 2C C0 78 97 7E 3F 83 20 BE 3D 14 5C 24 3D 32 69 DF BC **91** 04 00 00 00 00 00 00 00 00 00 00 CD CC CC 3E 6F 12 83 3C 56 0E 6D 3F 9A 99 C7 C2 33 33 63 41 9A 99 35 42 00 00 94 41 33 33 63 41 00 00 D0 C1 F6 E6 A1 40 C0 93 A6 C1 FB 73 F5 C0 00 1D 7B 3F C8 E7 FF 3C DA 6C 3B BE 5E 99 6C BD 

* 第一步：判断帧头，得到数据域长度和帧CRC：

帧头:`5A` `A5`

帧数据域长度:`A0` `00`: (0x00<<8) + 0xA0 = 160

帧CRC校验值:`B5` `DC`:(0xDC<<8) + 0xB5 = 0xDCB5

* 第二步： 校验CRC, 过程同0x91数据包

计算得到CRC值为0xDCB5. 帧CRC校验通过。

* 第三步：获得0x62帧网段，节点数等信息

      uint8_t gwsol_tag = buf[6];
      uint8_t gwid = buf[7]; /* GWID网段 */
      uint8_t node_cnt = buf[8]; /* 接收到的节点数 */
  GWSOL标签: `0x62` = 0x62

  接收机网段: `0x00` = 0

  本帧节点数: `0x02` = 2

* 第四步：接收每个节点数据

0x62数据包实际上是多个0x91数据包拼在一起，头部再加接收机消息组成。在C语言中可以定义0x91结构体来方便的读取数据：

定义0x91数据包结构体如下：(以Keil为例)

```
__packed typedef struct
{
    uint8_t     tag;                /* data packet tag */
    uint8_t     id;
    uint8_t     rev[6];             /* reserved */
    uint32_t    ts;                 /* timestamp */
    float       acc[3];
    float       gyr[3];
    float       mag[3];
    float       eul[3];             /* eular angles:R/P/Y */
    float       quat[4];            /* quaternion */
}id0x91_t;

```

`__packed` 为编译器关键字(Keil下)，表示结构体按字节紧对齐，结构体每一个元素一一对应0x91数据包的结构定义。接收数据时将接收到的数组直接memcpy到结构体即可：(注意定义结构体时必须4字节对齐), 其中`buf `指向数据头。

```
    /* 接收数据并使用0x91数据包结构定义来解释数据 */
    __align(4) id0x91_t id0x91;    /* struct must be 4 byte aligned */
    
    int i;
    for(i=0; i<node_cnt; i++)
    {
        memcpy(&id0x91, &buf[8+6] + i*sizeof(id0x91_t), sizeof(id0x91_t)); /* 8+6: 6为帧头信息长度，8为0x62数据包中的接收机包头长度 */
        
        /*处理该包数据
        ...
        printf("node_id:%d\r\n", id0x91->id);
         */
    }
```

最后得到数据结果:  这帧数据包含2个节点，ID分别为1和4，具体信息如下：

```
id              : 1
timestamp       : 0
acc             :   -0.090    0.188    1.119
gyr             : -115.600  -11.800   -8.700
mag             :   19.200    5.300  -18.600
eul(R/P/Y)      :   10.552    4.869   -2.692
quat            :    0.994    0.093    0.040   -0.027

id              : 4
timestamp       : 0
acc             :    0.400    0.016    0.926
gyr             :  -99.800   14.200   45.400
mag             :   18.500   14.200  -26.000
eul(R/P/Y)      :    5.059  -20.822   -7.670
quat            :    0.981    0.031   -0.183   -0.058
```




