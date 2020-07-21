import Vue from 'vue'

import {
  Button,
  Cell,
  CellGroup,
  Icon,
  Image as VanImage,
  Lazyload as VanLazyload,
  Col,
  Row,
  Popup,
  Tabbar,
  TabbarItem,
  NavBar,
  Empty,
  Loading,
  PullRefresh,
  List,
  Skeleton,
  Form,
  Field
} from 'vant'
// Vant基础组件
Vue.use(Button)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Icon)
Vue.use(VanImage)
Vue.use(VanLazyload)
Vue.use(Col)
Vue.use(Row)
Vue.use(Popup)
// Vant导航组件
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Tabbar)
// Vant空状态组件
Vue.use(Empty)
// Loading 加载组件
Vue.use(Loading)
// Vant下拉刷新
Vue.use(PullRefresh)
// Vant列表
Vue.use(List)
// Vant骨架屏
Vue.use(Skeleton)
// 表单
Vue.use(Form)
Vue.use(Field)
