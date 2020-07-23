<template>
  <div id="app">
    <van-nav-bar v-if="$route.meta.showNavBar" :left-arrow="!noShowBackBtn || showBackBtn" :left-text="!noShowBackBtn ? '返回' : ''" :title="$route.meta.navBarTitle" fixed @click-left="onBack" />
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
    <van-tabbar v-if="$route.meta.showTabBar" route :active-color="variables.appThemeColor" inactive-color="#333">
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
      transitionName: 'van-slide-left',
      isRouterAlive: true,
      showBackBtn: false
    }
  },
  computed: {
    variables() {
      return variables
    },
    noShowBackBtn() {
      return this.$route.meta.noShowBackBtn
    }
  },
  watch: {
    $route(to, from) {
      if (to.meta.pageLevel === 1 && from.meta.pageLevel === 1 ) {
        this.transitionName = ''
        return
      }
      debugger
      if (to.meta.pageLevel > from.meta.pageLevel) {
        this.transitionName = 'van-slide-left'
      } else {
        this.transitionName = 'van-slide-right'
      }
    }
  },
  mounted() {

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
      if (routeView.onBack) { // 有则调用，无则默认返回
        routeView.onBack()
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
