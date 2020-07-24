<template>
  <div class="login">
    <Container :has-nav-bar="true">
      <van-form @submit="onSubmit">
        <van-field
          v-model="loginForm.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="loginForm.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
      <div v-if="!token" style="margin: 16px;">
        <van-button round block type="info" @click="onDirectExperience">
          直接体验
        </van-button>
      </div>
    </Container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      redirect: undefined
    }
  },
  computed: {
    ...mapGetters(['token'])
  },
  watch: {
    $route: {
      handler: function(route) {
        debugger
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values)
      this.$store.dispatch('user/login', this.loginForm).then(() => {
        this.$router.replace({ path: this.redirect || '/' })
      }).catch(() => {
      })
    },
    onDirectExperience() {
      this.$router.push({ path: this.redirect || '/' })
    }
  }
}
</script>
