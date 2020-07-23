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
      noShowBackBtn: false,
      showNavBar: true,
      showTabBar: false,
      pageLevel: 2,
      keepAlive: false,
      freeLoginAuth: true
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
      pageLevel: 1,
      keepAlive: true,
      freeLoginAuth: true
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
      pageLevel: 1,
      keepAlive: true,
      freeLoginAuth: true
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
      pageLevel: 1,
      keepAlive: true,
      freeLoginAuth: true
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
      pageLevel: 1,
      keepAlive: true,
      freeLoginAuth: true
    },
    component: () => import('@/views/Setting')
  },
  {
    path: '/detail',
    name: 'Detail',
    meta: {
      navBarTitle: '详情',
      showNavBar: true,
      pageLevel: 2,
    },
    component: () => import('@/views/Detail')
  }
]

const createRouter = () => new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.BASE_URL,
  routes: constantRoutes
})

const router = createRouter()


export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router
