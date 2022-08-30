import { createStore } from 'vuex'
import axiosInstance from '../axios'

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
    setLoading(state, loading){
      state.loading = loading
    },
    getEmployees(state, employees){
      state.employees = employees
    }
  },
  actions: {
  },
  modules: {
  }
})
