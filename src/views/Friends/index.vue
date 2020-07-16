<template>
  <div class="friends">
    <Container :has-nav-bar="true" :has-tab-bar="true">
      <van-skeleton title avatar :row="3" :loading="loading" :round="true">
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
        <div>实际内容</div>
      </van-skeleton>
    </Container>
  </div>
</template>

<script>
import scrollTopMixin from '@/mixin/scrollTopHandler'
export default {
  name: 'Friends',
  mixins: [scrollTopMixin],
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  }
}
</script>
