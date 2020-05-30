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
    CurrentMessage: null,
    Messages: []
  },
  mutations: {
    SUBMIT (state, messageType) {
      interface Message {
        messageType: string;
        message: string | null;
      }
      const message: Message = { messageType: messageType, message: state.CurrentMessage }
      state.Messages.push(message)
      document.querySelector('#textareaFirst').value = ''
      document.querySelector('#textareaSecond').value = ''
      state.Submit = null
      state.CurrentMessage = null
    },
    ENTER_CHAT (state) {
      const login: string | null = state.Login
      const avatarLink: string | null = state.AvatarLink
      state.User = { login, avatarLink }
      interface User {
        name: string;
        id: number;
      }
      const users: Array<User> = [...state.Contacts]
      users[0].name = login
      state.Contacts = [...users]
    },
    UPDATE_TEXTAREA_VALUE (state, value) {
      state.CurrentMessage = value
    },
    UPDATE_SUBMIT_FLAG (state, value) {
      state.Submit = value
    },
    UPDATE_INPUT_VALUE (state, input) {
      state[input.type] = input.value
    }
  },
  actions: {
    SUBMIT ({ commit }, messageType) {
      commit('SUBMIT', messageType)
    },
    ENTER_CHAT ({ commit }) {
      commit('ENTER_CHAT')
    },
    UPDATE_TEXTAREA_VALUE ({ commit }, value) {
      commit('UPDATE_TEXTAREA_VALUE', value)
    },
    UPDATE_SUBMIT_FLAG ({ commit }, value) {
      commit('UPDATE_SUBMIT_FLAG', value)
    },
    UPDATE_INPUT_VALUE ({ commit }, input) {
      commit('UPDATE_INPUT_VALUE', input)
    }
  },
  modules: {
  }
})
