# HIPNUC  產品資料


<details markdown="1">
<summary>超核電子 HiPNUC 軟體中心介紹(繁體)</summary>

<font size=30>我是变大的字</font>

## 歡迎至超核電子軟體中心
## 提供開源範例與官方姿態記錄軟體

| 資料夾            | 說明               |
| ---------------- | ------------------ |
| doc              | 產品用戶手冊       |
| examples         | 接收程序原始碼及各語言範例 |
| hardware         | 硬體資料           |
| windows_pc_tools | 官方主程式，僅支援 Windows             |
| usb_uart_drivers | USB驅動程序，支援 Windows 與 Linux      |

[下載全部](https://github.com/hipnuc/products/archive/master.zip)

</details>

<details markdown="1" open="">
<summary>简体中文</summary>

## 本仓库包含了所有HI2XX的产品资料，包含文档，例程及配套软件和驱动程序。

| 文件夹           | 说明               |
| ---------------- | ------------------ |
| doc              | 产品用户手册       |
| examples         | 接收程序示例及源码 |
| hardware         | 硬件资料           |
| windows_pc_tools | 上位机             |
| usb_uart_drivers | 串口驱动程序       |

</details>

<details markdown="1">
<summary>English</summary>

| Folder           | Description                              |
| ---------------- | ---------------------------------------- |
| doc              | User Guide                               |
| examples         | Simple example of data receiving |
| hardware         | Hardware documentation                   |
| windows_pc_tools | Uranus software for Windows               |
| usb_uart_drivers | USB drivers for Windows and Linux        |

[Download All](https://github.com/hipnuc/products/archive/master.zip)

</details>







# HIPNUC_web

lang/lang_pack.js 是包含所有文本的js檔

在各 page 當中設定變數，頁面載入時會把變數內容換成 JS 檔的

mkdocs 每種語言為一個系統，如

mkdocs_cn\docs 底下是所有產品的資料夾

HI221

HI226 等等

md 檔擺在如 mkdocs_cn\docs\hi221\hi221um_cn.md

--------------------------------------------------------------------------

使用的是 material 主題，需要將把替換包內的內容替換到如

Anaconda3\envs\env_name\Lib\site-packages\material

才能正確導向主網頁連結

在mkdocs_cn\  底下使用 mkdocs build --clean 以生成新的網頁

--------------------------------------------------------------------------
SEO:
robots.txt 是限制搜尋引擎檢索特定資料夾的功能
sidemap.xml 依照結構填入所有網頁地址就好