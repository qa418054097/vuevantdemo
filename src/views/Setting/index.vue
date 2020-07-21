<template>
  <div class="setting">
    <Container :has-nav-bar="true" :has-tab-bar="true">
      <van-row type="flex" justify="space-around" @click="onLogin">
        <van-col span="6">
          <van-image
            width="50"
            height="50"
            round
            lazy-load
            :src="avatar"
          />
        </van-col>
        <van-col span="18">
          <van-row type="flex" justify="center" align="center">
            {{ token ? name : '请先登录' }}
          </van-row>
        </van-col>
      </van-row>
      <van-button v-if="token" round block type="info" @click="onLogout">
        退出登录
      </van-button>
    </Container>
  </div>
</template>

<script>
import scrollTopMixin from '@/mixin/scrollTopHandler'
import { mapGetters } from 'vuex'
export default {
  name: 'Setting',
  mixins: [scrollTopMixin],
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['token', 'avatar', 'name'])
  },
  methods: {
    async onLogin() {
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    async onLogout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
