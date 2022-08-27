import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{
        token: localStorage.getItem('token'),
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
