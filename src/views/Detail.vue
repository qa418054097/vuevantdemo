<template>
  <div class="detail">
    <Container></Container>
  </div>
</template>

<script>
  export default {
    name: 'Detail',
    data () {
      return {
      }
    },
    methods: {
      onBack () {
        this.$router.go(-1)
      }
    }
  }
</script>
