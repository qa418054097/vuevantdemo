
import Vue from 'vue'
import Vuex from 'vuex'
import testStore from './modules/testStore'
Vue.use(Vuex)

const state = {
  isLoading: false, // 加载状态
  networkSuccess: true, // 网络状态
  error: null, // 接口报错信息
  token: '' // 缓存用户登录后后端接口返回的Token
}

const getters = {
  isLoading: state => state.isLoading,
  networkSuccess: state => state.networkSuccess,
  error: state => state.error,
  token: state => state.token
}

const mutations = {
  loginSuccess(state, token) {
    state.token = token
  },
  changeNetworkSuccess(state, val) {
    state.networkSuccess = val
  },
  showLoading(state) {
    state.isLoading = true
  },
  hideLoading(state) {
    state.isLoading = false
  },
  errorMessage(state, message) {
    debugger
    state.error = message
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
