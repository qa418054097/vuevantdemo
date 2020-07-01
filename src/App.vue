<template>
  <div id="app">
    <div v-if="isLoading" class="loading">
    <van-loading type="spinner" color="#07c160" size="36px" />
    </div>
    <transition :name="transitionName">
      <router-view v-if="isRouterAlive"
        :class="{'has-nav-bar' : this.$route.meta.showNavBar , 'has-tab-bar' : this.$route.meta.showTabBar }"></router-view>
    </transition>
    <van-tabbar v-if="this.$route.meta.showTabBar" route active-color="#07c160" inactive-color="#000" >
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

<style lang="sass" scoped>
</style>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'App',
    provide () {
      return {
        reload: this.reload
      }
    },
    data () {
      return {
        transitionName: '',
        noTransitionRoutesMap: {},
        isRouterAlive: true
      }
    },
    mounted () {
      this.$router.options.routes.filter((route) => {
        if (route.meta && route.meta.noTransition) {
          this.noTransitionRoutesMap[route.path] = true
        }
      })
    },
    methods: {
      reload () {
        this.isRouterAlive = false
        this.$nextTick(function () {
          console.log(this.isRouterAlive)
          this.isRouterAlive = true
        })
      }
    },
    computed: {
      ...mapGetters([
        'isLoading'
      ])
    },
    watch: {
      $route (to, from) {
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
    }
  }
</script>

<style lang="sass" scoped>
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active
    will-change: transform
    transition: all 200ms
    position: absolute
  .slide-right-enter
    opacity: 0
    transform: translate3d(-100%, 0, 0)

  .slide-right-leave-active
    opacity: 0
    transform: translate3d(100%, 0, 0)
  .slide-left-enter
    opacity: 0
    transform: translate3d(100%, 0, 0)
  .slide-left-leave-active
    opacity: 0
    transform: translate3d(-100%, 0, 0)
  .loading
    display: flex
    position: fixed
    width: 100%
    height: 100%
    justify-content: center
    align-items: center
</style>
