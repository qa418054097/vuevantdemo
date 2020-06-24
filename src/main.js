import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
import 'amfe-flexible'
import { Button, Cell, CellGroup, Icon, Image as VanImage, Col, Row, Popup, Tabbar, TabbarItem, NavBar, Empty, Loading } from 'vant'
import { Container } from './components/common'

Vue.prototype.$api = api
// app容器
Vue.use(Container)
// Vant基础组件
Vue.use(Button)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Icon)
Vue.use(VanImage)
Vue.use(Col)
Vue.use(Row)
Vue.use(Popup)
// Vant导航组件
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Tabbar)
// 空状态组件
Vue.use(Empty)
// Loading 加载组件
Vue.use(Loading)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
