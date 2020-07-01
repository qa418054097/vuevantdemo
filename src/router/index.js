import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
      showNavBar: true,
      showTabBar: true,
      noTransition: true
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
      showNavBar: true,
      showTabBar: true,
      noTransition: true
    },
    component: () => import('../views/Search.vue')
  },
  {
    path: '/friends',
    name: 'Friends',
    meta: {
      navBarTitle: '朋友',
      showNavBar: true,
      showTabBar: true,
      noTransition: true
    },
    component: () => import('../views/Friends.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    meta: {
      navBarTitle: '设置',
      showNavBar: true,
      showTabBar: true,
      noTransition: true
    },
    component: () => import('../views/Setting.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    meta: {
      navBarTitle: '详情',
      showNavBar: true
    },
    component: () => import('../views/Detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
