<template>
  <div class="search">
    <Container :has-nav-bar="true" :has-tab-bar="true">
      <router-link :to="{ path: '/detail', query: { redirect: 'search'}}" class="test">页面详情跳转</router-link>
      <div class="test">jqTest</div>
    </Container>
  </div>
</template>

<script>
import scrollTopMixin from '@/mixin/scrollTopHandler'
export default {
  name: 'Search',
  mixins: [scrollTopMixin],
  data() {
    return {
    }
  },
  mounted() {
    console.log(this.$('.test'))
  }
}
</script>
<style lang="scss" scoped>
</style>
