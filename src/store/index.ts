import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Login: '',
    AvatarLink: '',
    Contacts: ['I', 'Ivanov Ivan', 'Petrov Petr', 'Marinina Marina', 'Anastasieva Anastasiya'],
    Messages: [
      { messageType: 'sentMessage', message: 'Hello!' },
      { messageType: 'recievedMessage', message: 'Hi!' },
      { messageType: 'sentMessage', message: 'How r u?' },
      { messageType: 'recievedMessage', message: 'Good! And u?' },
      { messageType: 'sentMessage', message: 'I am fine!' },
      { messageType: 'recievedMessage', message: 'Greate!' },
      { messageType: 'sentMessage', message: 'Hello!' },
      { messageType: 'recievedMessage', message: 'Hi!' },
      { messageType: 'sentMessage', message: 'How r u?' },
      { messageType: 'recievedMessage', message: 'Good! And u?' },
      { messageType: 'sentMessage', message: 'I am fine!' },
      { messageType: 'recievedMessage', message: 'Greate!' }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
