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
        hello: '哈啰',
        minwt:'梅问题'
      }
    },
    jp: {
      word: {
        hello: 'ハロー',
        minwt:'メイウンディー'
      }
    }
  }
  
  const i18n = new VueI18n({
    locale: 'en', 
    messages,
  })
  new Vue({ i18n }).$mount('#navbar')