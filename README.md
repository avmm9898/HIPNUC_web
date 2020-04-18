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