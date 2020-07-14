<template>
  <div id="app">
    <van-nav-bar v-if="this.$route.meta.showNavBar" :left-text="!this.$route.meta.noShowBackBtn ? '返回' : ''" :left-arrow="!this.$route.meta.noShowBackBtn" :title="this.$route.meta.navBarTitle" fixed @click-left="onBack" />
    <transition :name="transitionName">
      <keep-alive>
        <router-view
          v-if="isRouterAlive && $route.meta.keepAlive"
          :class="{'has-nav-bar' : this.$route.meta.showNavBar , 'has-tab-bar' : this.$route.meta.showTabBar }"
        />
      </keep-alive>
    </transition>
    <transition :name="transitionName">
      <router-view
        v-if="isRouterAlive && !$route.meta.keepAlive"
        :class="{'has-nav-bar' : this.$route.meta.showNavBar , 'has-tab-bar' : this.$route.meta.showTabBar }"
      />
    </transition>
    <van-tabbar v-if="this.$route.meta.showTabBar" route active-color="#07c160" inactive-color="#000">
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
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function() {
        console.log(this.isRouterAlive)
        this.isRouterAlive = true
      })
    },
    onBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 200ms;
    position: absolute;
  }
  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>
