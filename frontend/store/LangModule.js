
export const state = () => ({
  en: true,
  hu: false
})

export const mutations = {
  setEnData: (state, payload) => {
    state.en = payload
  },
  setHuData: (state, payload) => {
    state.hu = payload
  }
}

export const actions = {
  en (context) {
    context.commit('setEnData', true)
    context.commit('setHuData', false)
  },
  hu (context) {
    context.commit('setHuData', true)
    context.commit('setEnData', false)
  }
}

export const getters = {}

/* export default {
  namespaced: true,
  state: {
    en: true,
    hu: false
  },
  mutations: {
    setEnData: (state, payload) => {
      state.en = payload
    },
    setHuData: (state, payload) => {
      state.hu = payload
    }
  },
  actions: {
    en (context) {
      context.commit('setEnData', true)
      context.commit('setHuData', false)
      console.log('en')
    },
    hu (context) {
      context.commit('setHuData', true)
      context.commit('setEnData', false)
      console.log('hu')
    }
  }
}
 */
