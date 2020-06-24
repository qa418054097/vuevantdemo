<template>
  <div class="friends">
    <van-nav-bar v-if="this.$route.meta.showNavBar" :title="this.$route.meta.navBarTitle" fixed>
    </van-nav-bar>
    <Container></Container>
  </div>
</template>

<script>
  export default {
    name: 'Friends'
  }
</script>
