<template>
  <div>
    <div v-if="!networkSuccess">
      <!-- 网络错误 -->
      <van-empty image="network" description="网络已断开">
        <van-button round type="danger" class="bottom-button" @click="onRefresh()">
          点我刷新
        </van-button>
      </van-empty>
    </div>
    <div v-if="error">
      <!-- 其他错误 -->
      <van-empty>
        <div class="error-wrapper">
          <div class="error-content">{{ error }}</div>
          <van-button round type="danger" class="bottom-button" @click="onRefresh()">
            点我刷新
          </van-button>
        </div>
      </van-empty>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Refresh',
  inject: ['reload'],
  data() {
    return {}
  },
  computed: {
    ...mapState(['networkSuccess', 'error'])
  },
  methods: {
    onRefresh() {
      this.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
  .error-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .error-content {
      word-break: break-all;
    }
    .bottom-button {
      width: 160px;
      height: 40px;
    }
  }
</style>
