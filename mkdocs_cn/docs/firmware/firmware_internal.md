# 内部固件下载



!!! warning   "下载固件注意事项"

	1. 此页面为内部固件链接，部分固件可能处于未发布状态，外部客户下载此页固件后果自负！
点击右键 另存为 下载固件

### 固件

| 硬件       | bl                                                      | 固件                                                         | 公司             | 备注                                     | 时间     |
| ---------- | ------------------------------------------------------- | ------------------------------------------------------------ | ---------------- | ---------------------------------------- | -------- |
| HI221GW    | [下载](..\hi221a7/hi221_hs100_bl.hex)                   | <a href="../hi221gw/hi221gw_v106.hex" download>下载</a>      | 超核             | nRF52832版本接收机                       | 20200417 |
| HI221A7    | [下载](..\hi221a7/hi221_hs100_bl.hex)                   | <a href="../hi221a7/hi221.hex" download>下载</a>             | 超核             | 硬件版本A7                               | 20200417 |
| HI229      | <a href="..\ch100\ch100_bl.hex" download>下载</a>       | <a href="..\hi229_b0\hi229.hex" download>下载</a>            | 超核             |                                          | 20200528 |
| HI229      | <a href="..\ch100\ch100_bl.hex" download>下载</a>       | <a href="..\custom\平高\hi229_PG.hex" download>下载</a>      | 平高             | HI229平高 app_mode=5                     | 20200713 |
| CH110_AIKE | <a href="..\ch100\ch100_bl.hex" download>下载</a>       | <a href="..\ch100_AIKE\ch100_AIKE.hex" download>下载</a>     | 广州艾可         | 广州艾可                                 | 20200702 |
| HI229      | <a href="..\ch100\ch100_bl.hex" download>下载</a>       | <a href="..\custom\承辉\hi229_CHENGHUI.hex" download>下载</a> | 深圳承辉         | 深圳承辉                                 | 20200717 |
| CH110      | <a href="..\ch100\ch100_bl.hex" download>下载</a>       | <a href="..\ch100\ch100.hex" download>下载</a>               | 超核             | 超核                                     | 20200702 |
| HI216V1    | N/A                                                     | <a href="..\custom\高仙\hi216\hi216_merge_gaoxian_107.hex" download>下载</a> | 高仙             | hi216_merge_gaoxian_107                  |          |
| HI216V1    | N/A                                                     | <a href="..\custom\云鲸\hi216_next_dg_20190712_RSTX.hex" download>下载</a> | 云鲸东莞         | 非merge版本  hi216_next_dg_20190712_RSTX |          |
| LPC845MP   | <a href="..\lpc845mp\lpc845mp_bl.hex" download>下载</a> | <a href="..\lpc845mp\lpc845_mp.hex" download>下载</a>        | 超核，量产版固件 | 超核，量产版固件20200102                 |          |



### 云鲸HI226定制版本固件：

| 硬件     | bl                                                         | 固件                                                    | 备注                                                         | 时间     |
| -------- | ---------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------ | -------- |
| HI229_B0 | <a href="..\custom\云鲸\hi226_yj_bl.hex" download>下载</a> | <a href="..\custom\云鲸\hi229_YJ.hex" download>下载</a> | AT32F415 64K Flash, 起始地址4K 东莞云鲸专用硬件, bootloader 和app都是专用的。千万不要和正常的版本混淆!!! | 20200618 |








转台校准脚本：

```
D15
G80Y90FY90AY0.5D15
G80Y90FY90AY0.5D15
G80Y90FY90AY0.5D15
G80Z90FZ90AZ0.5D15
G80Z180FZ90AZ0.5D15
G80Y90FY90AY0.5D0Z90FZ90AZ0.5D0
G80Z0FZ10AZ0.1D0Y0FY10AZ0.1D0X0FX10AZ0.1D0
HOMEZ2Y1X0
D20
G80Z720FZ90AZ0.5D8
G80Z-720FZ90AZ0.5D8
G80Y720FY90AY0.5D8
G80Y-720FY90AY0.5D8
G80Z90FZ90AZ0.5D10
G80Y720FY90AY0.5D8
G80Y-720FY90AY0.5D8
G80Z-90FZ90AZ0.5D0
G80Z0FZ10AZ0.1D0Y0FY10AZ0.1D0X0FX10AZ0.1D0
HOMEZ2Y1X0
```



