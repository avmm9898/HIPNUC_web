##### AT+SETPTL

设置输出协议:

设置一帧中所包含的数据包：格式为`AT+SETPTL=<ITEM_ID>,<ITEM_ID>...`

**例**

* 配置模块输出: 91数据包(IMUSOL),指令为:`AT+SETPTL=91`
* 配置模块输出:加速度(A0)，角速度(B0), 整形格式欧拉角(D0)和四元数(D1)的指令为：`AT+SETPTL=A0,B0,D0,D1`

