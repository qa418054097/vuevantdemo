<template>
  <div>
    <div v-if="networkSuccess && !error" class="container">
      <van-pull-refresh v-model="refreshing" :disabled="disabled" @refresh="onRefresh">
        <slot />
      </van-pull-refresh>
      <div v-if="isLoading" class="loading">
        <van-loading type="spinner" color="#07c160" size="36px" />
      </div>
    </div>
    <Refresh />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Container',
  props: {
    refreshEnabled: {
      type: Boolean,
      value: false
    }
  },
  data() {
    return {
      refreshing: false,
      refreshDisabled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, true)
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
    },
    getScrollTop() {
      var scrollTop = window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0
      return scrollTop
    },
    handleScroll() {
      debugger
      const windowScrollY = this.getScrollTop()
      if (windowScrollY > 0) {
        this.refreshDisabled = true
      } else {
        this.refreshDisabled = false
      }
    }
  },
  computed: {
    ...mapState(['networkSuccess', 'isLoading', 'error']),
    disabled() {
      return !this.refreshEnabled || this.refreshDisabled
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    .loading {
      position: absolute;
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
  }
</style>
