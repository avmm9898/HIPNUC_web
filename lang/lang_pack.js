function changeLang(){
  this.lang = localStorage.getItem('locale') || 'en';
  
  if ( this.lang === 'cn' ) {
     this.lang = 'en';
     this.$i18n.locale = this.lang;
     
  } else {
     this.lang = 'cn';
     this.$i18n.locale = this.lang;
  }
  console.log(this.lang);
  localStorage.setItem('locale', this.lang);
};

const messages = {
    en: {
      word: {
        home: 'Home',
        products:'Products',
        documentation:'Documentation',
        contact:'Contact&Purchase'
      }
    },
    tw: {
      word: {
        hello: '哈囉',
        minwt:'梅問題'
      }
    },
    cn: {
      word: {
        home: '首頁',
        products:'產品型錄',
        documentation:'產品文件',
        contact:'聯絡與購買'
      }
    },
  };
  
  const i18n = new VueI18n({
    locale: 'en', 
    messages,
  })
  new Vue({ i18n }).$mount('#navbar')