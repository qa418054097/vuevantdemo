<template>
  <div class="home">
    <!--<van-nav-bar v-if="this.$route.meta.showNavBar" :title="this.$route.meta.navBarTitle" fixed>-->
    <!--</van-nav-bar>-->
    <Container ref="container" :refreshEnabled="true" v-on:refresh="onRefresh">
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
  .doge {
    width: 140px;
    height: 72px;
    margin-top: 8px;
    border-radius: 4px;
  }
</style>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Home',
    data () {
      return {
        api: '',
        list: [],
        loading: false,
        finished: false
      }
    },
    created () {
      // this.$api.baseDataApi.GetSysParams()
      // this.$api.baseDataApi.GetMerchantId('13950956173')
      // this.$api.baseDataApi.CheckPaymentPassword({ userType: '0', userId: '10001', paymentPassword: '123456' })
    },
    computed: {
      ...mapGetters([
        'sysParams'
      ])
    },
    methods: {
      onLoad () {
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
      onRefresh () {
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
