const messages = {
  en: {
    navbar: {
      home: 'Home',
      products: 'Products',
      documentation: 'Documentation',
      contact: 'Contact&Purchase',
      language: 'Language'
    },
    content: {
      title: 'Sample Requests & Supports'
    }

  },
  tw: {
    navbar: {
      home: '首頁',
      products: '產品型錄',
      documentation: '產品文件',
      contact: '聯絡與購買',
      language: '語言'
    }
  },
  cn: {
    navbar: {
      home: '首页',
      products: '产品型录',
      documentation: '产品文件',
      contact: '联络与购买',
      language: '语言'
    },
    content: {
      title: '樣本申請與銷售支援'
    }
  },
};

function doCookieSetup(name, lang) {
  document.cookie = name + "=" + escape(lang);
}
function getCookie(name) {
  var arg = escape(name) + "=";
  var nameLen = arg.length;
  var cookieLen = document.cookie.length;
  var i = 0;
  while (i < cookieLen) {
    var j = i + nameLen;
    if (document.cookie.substring(i, j) == arg) return getCookieValueByIndex(j);
    i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0) break;
  }
  return null;
}

function getCookieValueByIndex(startIndex) {
  var endIndex = document.cookie.indexOf(";", startIndex);
  if (endIndex == -1) endIndex = document.cookie.length;
  return unescape(document.cookie.substring(startIndex, endIndex));
}
function listCookie() {
  document.writeln("<table>");
  document.writeln("<tr><th>Name<th>Value");
  cookieArray = document.cookie.split(";");
  for (var i = 0; i < cookieArray.length; i++) {
    thisCookie = cookieArray[i].split("=");
    cName = unescape(thisCookie[0]);
    cValue = unescape(thisCookie[1]);
    document.writeln("<tr><td>" + cName + "</td><td>" + cValue + "</td>");
  }
  document.writeln("</table>");
}
function init_lang() {
  var i18n = new VueI18n({
    locale: 'en',
    messages,
  })
  var tmp_lang = getCookie("lang");
  if (tmp_lang == "en" || tmp_lang == "cn" || tmp_lang == "tw")
    i18n.locale = tmp_lang
  new Vue({ i18n }).$mount('#navbar_lang');
  new Vue({ i18n }).$mount('#div2');

}