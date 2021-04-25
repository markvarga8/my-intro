import en from './locales/en.json'
import hu from './locales/hu.json'

export default {
  ssr: false,
  head: {
    title: 'Varga Mark',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' }
    ]
  },

  script: [
    { src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js' },
    { src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js' },
    { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js' }
  ],

  css: [
    '~/assets/scss/main.scss',
    'mdbvue/lib/css/mdb.min.css'
  ],

  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false },
    // { src: '~/plugins/scroll-progress', ssr: false },
    { src: '~plugins/vue-cookie.js', ssr: false, injectAs: 'cookie' },
    { src: '~/plugins/aos', ssr: false },
    { src: '~/plugins/vuetify' }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module'
  ],

  modules: [
    [
      'bootstrap-vue/nuxt', {
        icons: true
      }],
    '@nuxtjs/axios',
    'mdbvue/nuxt',
    'nuxt-i18n'
  ],
  i18n: {
    locales: ['en', 'hu'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: ['en', 'hu'],
      messages: {
        en,
        hu
      }
    }
  },

  axios: {},

  build: {
    babel: {
      compact: true
    },
    extend (config, ctx) {},
    transpile: [
      'mdbvue/lib/components'
    ]
  }
}
