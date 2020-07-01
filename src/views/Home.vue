<template>
  <div class="home">
    <van-nav-bar v-if="this.$route.meta.showNavBar" :title="this.$route.meta.navBarTitle" fixed>
    </van-nav-bar>
    <Container>
    <router-link to='/detail'>页面详情跳转</router-link>
    <div>{{sysParams}}</div>
    </Container>
  </div>
</template>
<style lang="sass" scoped>
</style>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Home',
    data () {
      return {
        api: ''
      }
    },
    created () {
      // this.$api.baseDataApi.GetSysParams()
      // this.$api.baseDataApi.GetMerchantId('13950956173')
      // this.$api.baseDataApi.CheckPaymentPassword({ userType: '0', userId: '10001', paymentPassword: '123456' })
    },
    mounted () {
      // this.$store.commit('loginSuccess', '123456')
      this.$store.dispatch('sysParams')
    },
    computed: {
      ...mapGetters([
        'requesting',
        'error',
        'sysParams'
      ])
    }
  }
</script>
<style lang="sass" scoped>

</style>
