<template>
  <div class="setting">
    <van-nav-bar v-if="this.$route.meta.showNavBar" :title="this.$route.meta.navBarTitle" fixed>
    </van-nav-bar>
    <Container>
      <div class="item-wrapper" v-for="(item, index) of items" v-bind:key="index">
        <div class="avatar"></div>
        <div class="content">
          <div class="title">标题</div>
          <div class="desc">描述</div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
  export default {
    name: 'Setting',
    data () {
      return {
        items: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
      }
    }
  }
</script>
<style lang="sass" scoped>
  .item-wrapper
    @include df()
    @include df-ai()
    margin-bottom: 10px
    border-radius: 20px
    .avatar
      width: 100px
      height: 100px
      background: #eeeeee
      border-radius: 20px
    .content
      @include df()
      @include fd-c()
      @include df-jc-sa()
      flex: 1
      height: 100px
      margin-left: 4px
      font-size: 20px
</style>
