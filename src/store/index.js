import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{
        token: localStorage.getItem('token'),
    },
    employees: [],
    loading: false
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
