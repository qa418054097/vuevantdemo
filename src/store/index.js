
import Vue from 'vue'
import Vuex from 'vuex'
import testStore from './modules/testStore'
Vue.use(Vuex)


const state = {
  isLoading: false,
  networkSuccess: true,
  requesting: false,
  error: {},
  token: '' // 缓存用户登录后后端接口返回的Token
}

const getters = {
  isLoading: state => state.isLoading,
  networkSuccess: state => state.networkSuccess,
  requesting: state => state.requesting,
  error: state => state.error
}

const mutations = {
  loginSuccess (state, token) {
    state.token = token
  },
  changeNetworkSuccess (state, val) {
    debugger
    state.networkSuccess = val
  },
  showLoading (state) {
    debugger
    state.isLoading = true
  },
  hideLoading (state) {
    debugger
    state.isLoading = false
  }
}

const actions = {}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    testStore
  }
})
