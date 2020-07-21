import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      navBarTitle: '登录',
      noShowBackBtn: true,
      showNavBar: true,
      showTabBar: false,
      noTransition: true,
      keepAlive: false
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      navBarTitle: '首页',
      noShowBackBtn: true,
      showNavBar: true,
      showTabBar: true,
      noTransition: true,
      keepAlive: true
    }
  },
  {
    path: '/search',
    name: 'Search',
    meta: {
      navBarTitle: '搜索',
      noShowBackBtn: true,
      showNavBar: true,
      showTabBar: true,
      noTransition: true,
      keepAlive: true
    },
    component: () => import('@/views/Search')
  },
  {
    path: '/friends',
    name: 'Friends',
    meta: {
      navBarTitle: '朋友',
      noShowBackBtn: true,
      showNavBar: true,
      showTabBar: true,
      noTransition: true,
      keepAlive: true
    },
    component: () => import('@/views/Friends')
  },
  {
    path: '/setting',
    name: 'Setting',
    meta: {
      navBarTitle: '设置',
      noShowBackBtn: true,
      showNavBar: true,
      showTabBar: true,
      noTransition: true,
      keepAlive: true
    },
    component: () => import('@/views/Setting')
  },
  {
    path: '/detail',
    name: 'Detail',
    meta: {
      navBarTitle: '详情',
      showNavBar: true
    },
    component: () => import('@/views/Detail')
  }
]

const createRouter = () => new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes
})

const router = createRouter()
export function resetRouter() {
  debugger
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router
