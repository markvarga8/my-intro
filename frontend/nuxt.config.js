export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  ssr: false,
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
    'bootstrap-css-only/css/bootstrap.min.css',
    'mdbvue/lib/css/mdb.min.css'
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
          home: 'Home',
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
          writeMessage: 'Or write a message here:',
          contact: 'Contacts',
          help: 'Which I can help you with',
          intro: "I'm Mark Varga, web developer. I design and build websites.",
          exp: 'Relevant experience',
          agile: 'Agile development',
          website: 'Website from scratch',
          mobile: 'Mobile friendly web design',
          contentManagment: 'Content management',
          content1: 'In the world of the internet, I consider it very important to be up-to-date and to keep our knowledge up to date. With my experience gained over the years, I can help you, whether it’s frontend or backend development.',
          content2: 'The use of this method makes it possible to involve customers more in the development and thus be completely satisfied with the final product.',
          content3: 'I can help you create either a one-page website or a more complex web application, it’s up to you.',
          content4: 'I help make your website (s) fully responsive and provide the right user experience on all display devices.',
          content5: 'I can help you improve your existing website and process its content according to your own needs.',
          entreContent: 'Anyone who is serious about success in the job market as an individual doesn’t think for a second about whether or not they need an online portfolio!',
          indiContent: "In today's world, it is considered a virtually missed issue if an entrepreneur may not be present in the diversified world of the Internet, which provides plenty of opportunities to present and advertise products and services.",
          aboutIntro: 'My qualifications are business informatics and web development. I graduated as a business informatics technician in 2019. I have two diplomas in web development. I dropped into the world of web development in 2018 and we have been inseparable from each other ever since, as I can now work as a web developer by constantly improving my knowledge.',
          entrepreneurIntro: 'Anyone who is serious about success in the job market as an individual doesn’t think for a second about whether or not they need an online portfolio! Whether you need a one-page introductory website or a more serious website put together according to your own ideas, feel free to contact me and write! I also undertake content management or conversion, so if you are not happy with the current one, feel free to contact me! Thanks to my agile development approach, the end result is guaranteed to be what you envisioned to be!',
          individualIntro: "In today's world, it is considered a virtually missed issue if an entrepreneur may not be present in the diversified world of the Internet, which provides plenty of opportunities to present and advertise products and services to customers. One of the very useful endowments of this diverse world is websites / web applications, with which we can now deliver our information about our business to many customers. I can help you with that! Be it a completely new web application to be built from scratch, or it could be an existing one where I can also help you with content management or conversion !. Thanks to my agile development approach, the end result is guaranteed to be what you envisioned to be!"
        },
        hu: {
          welcome: 'Tovább',
          home: 'Kezdőlap',
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
          writeMessage: 'Vagy írj itt üzenetet:',
          contact: 'Kontakt',
          help: 'Amiben segíthetek',
          intro: 'Varga Márk vagyok, webfejlesztő. Weboldalak tervezésével és kivitelezésével foglalkozom.',
          exp: 'Releváns tapasztalat',
          agile: 'Agilis fejlesztés',
          website: 'Weboldal nulláról',
          mobile: 'Mobilbarát webdesign',
          contentManagment: 'Tartalomkezelés',
          content1: 'Az internet világában nagyon fontosnak tartom, hogy naprakészek legyünk és a tudásunkat is folyamatosan fríssitsük. Az elmúlt években összeszedett tapasztalatommal tudlak segíteni, legyen szó frontend vagy backend fejlesztésről.',
          content2: 'Ennek a módszernek a használata lehetségessé teszi, hogy az ügyfeleket nagyobb mértékben bele lehessen vonni a fejlesztésbe és így a végtermékkel teljes mértékben elégedettek legyenek.',
          content3: 'Segíthetek neked akár egy egy oldalas weboldal, akár egy komplexebb webalkalmazás megalkotásában, ez csak rajtad múlik.',
          content4: 'Segítek, hogy a weboldalad/weboldalaid teljes mértékben reszponzívak legyenek és minden megjelenítőeszközön a megfelelő felhasználói élmény legyen szolgáltatva.',
          content5: 'Segíthetek már meglévő weboldalad továbbfejlesztésében és annak tartalmának feldolgozásában a saját igényeid szerint.',
          entreContent: 'Aki magánszemélyként a munkaerőpiacon komolyan gondolja a sikerességet az egy másodpercig sem gondolkodik azon, hogy szükség van-e online portfolióra vagy sem!',
          indiContent: 'Mai világba már gyakorlatilag kihagyott ziccernek számít, ha egy vállalkozó esetleg nincs jelen az internet szerteágazó világába, ami rengeteg lehetőséget biztosít a termékek és szolgáltatások bemutatására, reklámozására.',
          aboutIntro: 'Végzettségem gazdaságinformatikus és webfejlesztő. Gazdaságinformatikus technikusi végzettségemet még 2019-ben szereztem. Webfejlesztés terén két elismerő oklevéllel rendelkezem. Webfejlesztés világába 2018-ba cseppentem bele és azóta is elszakíthatatlanok vagyunk egymástól, hiszen tudásomat folyamatosan fejlesztve ma már webfejlesztőként munkálkodhatok.',
          entrepreneurIntro: 'Aki magánszemélyként a munkaerőpiacon komolyan gondolja a sikerességet az egy másodpercig sem gondolkodik azon, hogy szükség van-e online portfolióra vagy sem! Akár egy egy oldalas bemutatkozó weboldalra van szükséged, akár egy komolyabb, saját ötleteid szerint összerakott weboldalra, nyugodtan fordulj hozzám és írj! Tartalomkezelést vagy átalakítást is vállalok, szóval ha nem vagy elégedett a jelenlegivel akkor is nyugodtan keress meg! Agilis fejlesztési szemléletemnek köszönhetően a végeredmény garantáltan olyan lesz mint amilyennek te elképzelted!',
          individualIntro: 'Mai világba már gyakorlatilag kihagyott ziccernek számít, ha egy vállalkozó esetleg nincs jelen az internet szerteágazó világába, ami rengeteg lehetőséget biztosít a termékek és szolgáltatások bemutatására, reklámozására az ügyfelek felé. Ennek a szerteágazó világnak az egyik nagyon hasznos hozományai a weboldalak/webalkalmazások, amellyelekkel ma már rengeteg ügyfélhez juttathatjuk el információinkat vállalkozásunkról. Ebben lehetek én a segítségedre! Legyen szó egy teljesen új, a nulláról felépítendő webalkalmazásról, vagy lehet szó már meglévőről, ahol tartalomkezelésben vagy átalakításban is segíthetek neked!. Agilis fejlesztési szemléletemnek köszönhetően a végeredmény garantáltan olyan lesz mint amilyennek te elképzelted!'
        }
      }
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
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
