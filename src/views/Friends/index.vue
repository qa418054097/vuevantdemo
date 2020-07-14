<template>
  <div class="friends">
    <Container>
      <van-skeleton title avatar :row="3" :loading="loading" :round="true">
        <div>实际内容</div>
      </van-skeleton>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'Friends',
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
