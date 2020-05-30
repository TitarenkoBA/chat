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
    // eslint-disable-next-line
    Messages: Array<any>()
  },
  mutations: {
    SUBMIT (state, messageType) {
      interface Message {
        messageType: string;
        message: string;
      }
      const message: Message = { messageType: messageType, message: state.CurrentMessage }
      const messages: Message[] = [...state.Messages]
      messages.push(message)
      state.Messages = [...messages]
      const textareaFirst: HTMLInputElement | null = document.querySelector('#textareaFirst')
      const textareaSecond: HTMLInputElement | null = document.querySelector('#textareaSecond')
      if (textareaFirst) {
        textareaFirst.value = ''
      }
      if (textareaSecond) {
        textareaSecond.value = ''
      }
      state.Submit = null
      state.CurrentMessage = ''
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
      if (input.type === 'Login') {
        state.Login = input.value
      } else {
        state.AvatarLink = input.value
      }
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
