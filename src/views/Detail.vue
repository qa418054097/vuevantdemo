<template>
  <div class="detail">
    <van-nav-bar left-text="返回" left-arrow title="详情" fixed @click-left="onBack">
    </van-nav-bar>

    反反复复付付付付付付付付付
  </div>
</template>

<script>
  export default {
    name: 'Detail',
    data () {
      return {
      }
    },
    methods: {
      onBack () {
        this.$router.go(-1)
      }
    }
  }
</script>
