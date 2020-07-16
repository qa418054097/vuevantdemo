<template>
  <div class="detail">
    <Container :has-nav-bar="true" />
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data() {
    return {
    }
  },
  methods: {
    onBack() {
      this.$router.go(-1)
    }
  }
}
</script>
