module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '简书项目',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '简书的测试项目' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css', '~/assets/css/normalize.css', '~/assets/css/font-awesome.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios']
  }
}
