import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate' // persistance of the state in localstorage (Persist Vuex state with localStorage.)

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()], // activate vuex-persistedstate plugin
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      state.isUserLoggedIn = !!(token)
    },
    setUser (state, user) {
      state.user = user
    }
  },
  // a partir des vue component appeler les acrions pour faire des chanagement
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token) // appele la méthode setToken du mutation et passer en parametre le token
    },
    setUser ({commit}, user) {
      commit('setUser', user) // appele la méthode setToken du mutation et passer en parametre le token
    },
    userLoggedIn ({commit}, payload) {
      commit('setUser', payload.user)
      commit('setToken', payload.token)
    },
    disconnectUser ({commit}) {
      commit('setUser', null)
      commit('setToken', null)
    }
  }
})
