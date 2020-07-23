// 功能: 页面切换时记住滚动条位置
export default {
  data() {
    return {
      scrollTop: 0
    }
  },
  deactivated() {
    const containerRef = document.querySelector('.app-container')

    this.scrollTop = containerRef.scrollTop
  },
  activated() {
    this.$nextTick(() => {
      setTimeout(() => {
        const containerRef = document.querySelector('.app-container')
        containerRef.scrollTop = this.scrollTop
      }, 32)
    })
  }
}
