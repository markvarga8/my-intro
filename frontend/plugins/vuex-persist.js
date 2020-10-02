import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    storage: window.localStorage
  }).plugin(store)
}

/* import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import LangModule from '../store/LangModule'

Vue.use(Vuex)

const persistence = new VuexPersistence({
  modules: ['leng']
})

export default new Vuex.Store({
  modules: {
    leng: LangModule
  },
  plugins: [
    persistence.plugin
  ]
}) */
