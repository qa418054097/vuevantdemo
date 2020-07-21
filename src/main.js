import Vue from 'vue'
import App from './App.vue'
import router from './router' // 路由管理
import store from './store' // 状态管理
import api from './api' // 接口
import 'amfe-flexible' // 移动端适配
import 'normalize.css' // 样式初始化
import './styles/index.scss' // 全局样式
import '@/permission' // 登录权限控制
import '@/components' // vant组件引入
import $ from 'jquery' // 引入jquery库
import { Container } from './components/common' // 自定义全局组件

if (process.env.NODE_ENV === 'development') { // 模拟数据
  const { mockXHR } = require('../mock')
  mockXHR()
}
Vue.prototype.$ = $
Vue.prototype.$api = api
// app容器
Vue.use(Container)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
