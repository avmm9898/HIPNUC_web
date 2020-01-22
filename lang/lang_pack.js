const messages = {
  en: {
    navbar: {
      home: 'Home',
      products: 'Products',
      documentation: 'Documentation',
      contact: 'Contact&Purchase',
      language: 'Language'
    },
    contact: {
      intro: 'Contact&Purchase',
      title1: 'Sample Requests & Supports',
      content1: 'If you need samples, bulk purchase, or other supports, please contact our office.',
      beijing: 'Beijing Head Office',
      b_address: 'Address : B01-1-1001, Fuli Yunhe No.10, Zhaodengyu St, Tongzhou, Beijing, China',
      b_phone:'Phone (Mr.Liu) : +86 18612030435',
      taobao: 'Buy on Taobao >',
      taipei: 'Taipei',
      tw_phone: 'Phone (Mr.Hsu) : +886 0908179107',
      ruten:'Buy on Ruten >',
      title2: 'Business Partner',
      content2: 'We welcome you all no matter you are researcher, student, maker or company. These are parts of our customers.'
    },
    footer:{
      about_title:'About HiPNUC',
      about_content:'HiPNUC is dedicated to develope cost-effective IMU/AHRS with high quality, providing mature and advanced integrated navigation modules.',     
      github:'Visit our github',
      library_title:'Our Library',
      lib1:'Digital filering with matlab',
      lib2:'Mathematic basis of rotation',
      lib3:'Basic concepts of 3D inertial sensors and attitude',
      lib4:'Notes of MIT linear algebra',
      lib5:'Basic concepts of IMU/VRU/AHRS/6-axis/9-axis',
      opentime_title:'Business Hours',
      opentime1:'Monday to Friday : 09:00-19:00',
      opentime2:'Saturday : 09:00-17:00',
      sales1:'Sales (Beijing)',
      sales2:'Sales (Taipei)'
    }

  },
  tw: {
    navbar: {
      home: '首頁',
      products: '產品型錄',
      documentation: '文件中心',
      contact: '聯絡與購買',
      language: '語言',

    },
    contact: {
      intro: '聯絡與購買',
      title1: '樣本申請與銷售支援',
      content1: '如果您需要申請樣品，批量購買或其他支援與服務，請聯絡我們的辦公室。',
      beijing: '北京總公司',
      b_address: '地址 : 北京市通州區趙登禹大街富力運河十號B01-1-1001',
      b_phone:'連絡電話 (劉先生) : +86 18612030435',
      taobao: '前往淘寶購買 >',
      taipei: '台灣代理',
      tw_phone: '聯絡電話 (許先生) : +886 0908179107',
      ruten:'前往露天購買 >',   
      title2: '合作夥伴',
      content2: '無論您是研究人員，學生，創客或是公司，我們都竭誠歡迎您。以下是使用我們產品的部分客戶。'

    },
    footer:{
      about_title:'關於超核電子',
      about_content:'HiPNIC 超核電子致力於開發具有高成本效益的高質量IMU / AHRS。多年的低成本MEMS傳感器算法開發經驗，提供成熟和先進的集成導航模組，為客戶提供最具性價比的姿態檢測方案。',     
      github:'前往我們的Github',
      library_title:'圖書館',
      lib1:'Matlab 數字濾波入門',
      lib2:'旋轉的數學表示-四元數與歐拉角以及相互轉化',
      lib3:'三軸慣性傳感器和姿態解算的基本概念',
      lib4:'MIT線性代數筆記',
      lib5:'IMU/VRU/AHRS/6軸9軸等基本概念',
      opentime_title:'服務時間',
      opentime1:'周一至周五 : 09:00-19:00',
      opentime2:'周六至周日 : 09:00-17:00',
      sales1:'銷售點 (北京)',
      sales2:'銷售點 (台北)'
    }
    
  },
  cn: {
    navbar: {
      home: '首页',
      products: '产品型录',
      documentation: '文件中心',
      contact: '联络与购买',
      language: '语言'
    },
    contact: {
      
     
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
  new Vue({ i18n }).$mount('#language');
  new Vue({ i18n }).$mount('#div2');
  new Vue({ i18n }).$mount('#div3');
}