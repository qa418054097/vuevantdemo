import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
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
    // children: [
    //   {
    //     path: 'detail',
    //     name: 'Detail',
    //     component: () => import('../views/Detail.vue')
    //   }
    // ]
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
    component: () => import('../views/Search')
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
    component: () => import('../views/Friends')
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
    component: () => import('../views/Setting')
  },
  {
    path: '/detail',
    name: 'Detail',
    meta: {
      navBarTitle: '详情',
      showNavBar: true
    },
    component: () => import('../views/Detail')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
