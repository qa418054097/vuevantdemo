<template>
  <div v-if="!networkSuccess">
  <!-- 网络错误 -->
  <van-empty  image="network" description="网络已断开" >
    <van-button round type="danger" class="bottom-button" @click="onRefresh()">
      点我刷新
    </van-button>
  </van-empty>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
    export default {
      name: 'Refresh',
      inject: ['reload'],
      data () {
        return {}
      },
      methods: {
        onRefresh () {
          this.reload()
        }
      },
      computed: {
        ...mapState(['networkSuccess'])
      }
    }
</script>

<style lang="sass" scoped>
  .bottom-button
    width: 160px
    height: 40px
</style>
