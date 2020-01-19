

const messages = {
  en: {
    word: {
      home: 'Home',
      products: 'Products',
      documentation: 'Documentation',
      contact: 'Contact&Purchase'
    }
  },
  tw: {
    word: {
      hello: '哈囉',
      minwt: '梅問題'
    }
  },
  cn: {
    word: {
      home: '首頁',
      products: '產品型錄',
      documentation: '產品文件',
      contact: '聯絡與購買'
    }
  },
};

var i18n = new VueI18n({
  locale: 'en',
  messages,
  lang=''
})
new Vue({ i18n }).$mount('#navbar')

function changeLang() {
  i18n.lang = localStorage.getItem('locale') || 'en';
  this.lang=i18n.lang
  console.log(this.lang);
  localStorage.setItem('locale', this.lang);
};