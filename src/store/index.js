import { createStore } from 'vuex'
import axiosInstance from '../axios'

export default createStore({
  state: {
    user: {
      token: localStorage.getItem('token'),
    },
    employees: [],
    loading: false
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading
    },

    getEmployees(state, employees) {
      state.employees = employees
    }
  },
  actions: {
    getEmployees({ commit }) {
      commit('setLoading', true)

      axiosInstance.get('/emoloyees')
        .then(response => {
          commit('getEmployees', response.data.employees)
          commit('setLoading', false)
        })
        .catch(error => console.log(error))
    }
  },
  getters: {
    employees(state) {
      return state.employees
    },

    loading(state) {
      return state.loading
    }
  },
  modules: {
  }
})
