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
    component: () => import('../views/Search.vue')
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
    component: () => import('../views/Friends.vue')
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
  routes,
  scrollBehavior (to, from, savedPosition) {
    debugger
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        from.meta.savedPosition = scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})

export default router
