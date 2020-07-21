<template>
  <div class="app-container" :class="{'has-nav-bar' : hasNavBar , 'has-tab-bar' : hasTabBar }">
    <div v-if="networkSuccess && !error">
      <van-pull-refresh v-model="refreshing" :disabled="disabled" @refresh="onRefresh">
        <slot />
      </van-pull-refresh>
    </div>
    <Refresh />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import variables from '@/styles/variables.scss'
export default {
  name: 'Container',
  props: {
    refreshEnabled: {
      type: Boolean,
      required: false
    },
    hasNavBar: {
      type: Boolean,
      required: false
    },
    hasTabBar: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      refreshing: false,
      refreshDisabled: false,
      scrollTop: 0
    }
  },
  computed: {
    ...mapState(['networkSuccess', 'isLoading', 'error']),
    disabled() {
      return !this.refreshEnabled || this.refreshDisabled
    },
    variables() {
      return variables
    }
  },
  methods: {
    onRefresh() {
      this.$emit('refresh')
    },
    isRefreshing() {
      return this.refreshing
    },
    finishRefresh() {
      this.refreshing = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/variables.scss";
  .app-container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar{
      width:0px;
    }
    &.has-nav-bar {
      height: calc(100vh - #{$navBarHeight});
    }
    &.has-tab-bar {
      height: calc(100vh - #{$tabBarHeight});
    }
    &.has-nav-bar.has-tab-bar {
      height: calc(100vh - #{$navBarHeight} - #{$tabBarHeight});
    }
  }
</style>
