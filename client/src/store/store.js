import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setUser (state, user) {
      state.user = user
    },
    setIsUserLoggedIn (state, isLogged) {
      state.isUserLoggedIn = isLogged
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
    userLoggedIn ({commit}, user, token) {
      commit('setUser', user)
      commit('setToken', token)
      commit('setIsUserLoggedIn', true)
    },
    disconnectUser ({commit}, user, token) {
      commit('setUser', null)
      commit('setToken', null)
      commit('setIsUserLoggedIn', false)
    }
  }
})
