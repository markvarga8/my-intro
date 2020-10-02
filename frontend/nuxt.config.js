export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false },
    { src: '~plugins/vue-cookie.js', ssr: false, injectAs: 'cookie' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    [
      'bootstrap-vue/nuxt', {
        icons: true
      }],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'mdbvue/nuxt',
    'nuxt-i18n'
  ],
  // Or with global options
  i18n: {
    locales: ['en', 'hu'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: ['en', 'hu'],
      messages: {
        en: {
          welcome: 'continue',
          name: 'Mark Varga',
          about: 'About Me',
          message: 'Write a message!',
          serv: 'Services',
          skillsTitle1: 'For individuals',
          skillsTitle2: 'For entrepreneurs',
          frontend: 'Frontend development',
          backend: 'Backend development',
          more: 'More info',
          free: 'Full Stack Web developer',
          send: 'Send',
          close: 'close',
          skills: 'Skills',
          search: 'Search boldly!',
          facebook: 'Search Facebook',
          linkedin: 'Search Linkedin',
          writeMessage: 'Or write a message here:'
        },
        hu: {
          welcome: 'Tovább',
          name: 'Varga Márk',
          about: 'Rólam',
          message: 'Írj üzenetet!',
          serv: 'Szolgáltatások',
          skillsTitle1: 'Vállalkozóknak',
          skillsTitle2: 'Magánszemélyeknek',
          frontend: 'Frontend fejlesztés',
          backend: 'Backend fejlesztés',
          more: 'Tovább',
          free: 'Full Stack Webfejlesztő',
          send: 'Küldés',
          close: 'Bezárás',
          skills: 'Szaktudás',
          search: 'Keress bátran!',
          facebook: 'Keress Facebookon',
          linkedin: 'Keress Linkedinen',
          writeMessage: 'Vagy írj itt üzenetet:'
        }
      }
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
