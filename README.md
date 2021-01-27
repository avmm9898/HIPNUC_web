# HiPNUC_Website

預覽:https://avmm9898.github.io/HiPNUC_Website/

多語言網頁框架，以 vuei18n 實現

lang/lang_pack.js 是包含所有語言文本的檔案

在 html 當中設定變數，頁面載入時會把變數內容換成當前的語言文本。

網頁載入時將自動根據瀏覽器語言設定語言，除非手動設定語言(將會記錄於 cookie)

mkdocs 每種語言為一個環境，如

mkdocs_cn\docs 底下是所有產品的資料夾

hi221、hi226 等等

md 檔擺在如 mkdocs_cn\docs\hi221\hi221um_cn.md

--------------------------------------------------------------------------

參考資源 : vuei18n, jquery, bootstrap

--------------------------------------------------------------------------
SEO:

robots.txt 是限制搜尋引擎檢索特定資料夾的功能

sidemap.xml 依照結構填入所有網頁地址，讓搜尋引擎建立網域地圖
