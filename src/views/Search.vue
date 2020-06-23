<template>
  <div class="search">
    <van-nav-bar v-if="this.$route.meta.showNavBar" :title="this.$route.meta.navBarTitle" fixed>
    </van-nav-bar>
  </div>
</template>

<script>
  export default {
    name: 'Search'
  }
</script>
