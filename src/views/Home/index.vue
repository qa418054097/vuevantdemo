<template>
  <div class="home">
    <Container ref="container" :has-nav-bar="true" :has-tab-bar="true" :refresh-enabled="true" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </Container>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
import { mapGetters } from 'vuex'
import scrollTopMixin from '@/mixin/scrollTopHandler'
export default {
  name: 'Home',
  mixins: [scrollTopMixin],
  data() {
    return {
      api: '',
      list: [],
      loading: false,
      finished: false
    }
  },
  computed: {
    ...mapGetters({
      // sysParams: 'testStore/sysParams'
    })
  },
  mounted() {
    // console.log(this.sysParams)
  },
  methods: {
    onLoad() {
      const containerRef = this.$refs.container
      setTimeout(() => {
        if (containerRef.isRefreshing()) {
          this.list = []
          containerRef.finishRefresh()
        }
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        this.loading = false

        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    }
  }
}
</script>
<style lang="scss" scoped>
  .test {
    word-break: break-all;
  }
</style>
