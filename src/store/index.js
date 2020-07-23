
import Vue from 'vue'
import Vuex from 'vuex'
import { Toast } from 'vant'
// import testStore from './modules/testStore'
import getters from './getters'
import user from './modules/user'
Vue.use(Vuex)
const state = {
  isLoading: false, // 加载状态
  networkSuccess: true, // 网络状态
  error: null, // 接口报错信息
  token: '' // 缓存用户登录后后端接口返回的Token
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
    Toast.loading({
      duration: 0, // 持续展示 toast
      forbidClick: true,
      message: '加载中...'
    })
  },
  hideLoading(state) {
    state.isLoading = false
    Toast.clear()
  },
  errorMessage(state, message) {
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
    // testStore,
    user
  }
})
