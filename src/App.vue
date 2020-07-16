<template>
  <div id="app">
    <van-nav-bar v-if="$route.meta.showNavBar" :left-arrow="!$route.meta.noShowBackBtn" :left-text="!$route.meta.noShowBackBtn ? '返回' : ''" :title="$route.meta.navBarTitle" fixed @click-left="onBack" />
    <transition :name="transitionName">
      <keep-alive>
        <router-view
          v-if="isRouterAlive && $route.meta.keepAlive"
        />
      </keep-alive>
    </transition>
    <transition :name="transitionName">
      <router-view
        v-if="isRouterAlive && !$route.meta.keepAlive"
      />
    </transition>
    <van-tabbar v-if="$route.meta.showTabBar" route :active-color="variables.appThemeColor" inactive-color="#000">
      <van-tabbar-item replace to="/home" icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="search">
        搜索
      </van-tabbar-item>
      <van-tabbar-item replace to="/friends" icon="friends-o">
        朋友
      </van-tabbar-item>
      <van-tabbar-item replace to="/setting" icon="setting-o">
        设置
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped>
</style>
<script>
import variables from '@/styles/variables.scss'
export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      transitionName: '',
      noTransitionRoutesMap: {},
      isRouterAlive: true
    }
  },
  computed: {
    variables() {
      return variables
    }
  },
  watch: {
    $route(to, from) {
      if (this.noTransitionRoutesMap[to.path] && this.noTransitionRoutesMap[from.path]) {
        this.transitionName = ''
        return
      }
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
    }
  },
  mounted() {
    this.$router.options.routes.filter((route) => {
      if (route.meta && route.meta.noTransition) {
        this.noTransitionRoutesMap[route.path] = true
      }
    })
  },
  methods: {
    reload() { // 重新加载当前页面
      this.isRouterAlive = false
      this.$nextTick(function() {
        this.isRouterAlive = true
      })
    },
    onBack() { // 调用当前路由组件内的返回方法
      debugger
      const routeView = this.$route.matched[0].instances.default
      if (routeView) {
        routeView.onBack()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
