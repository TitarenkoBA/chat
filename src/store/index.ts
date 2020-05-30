import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Submit: null,
    Login: '',
    AvatarLink: '',
    User: {
      login: '',
      avatarLink: ''
    },
    Contacts: [{ name: '', id: 1 }, { name: 'Ivan Ivanov', id: 2 }],
    CurrentMessage: '',
    Messages: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
