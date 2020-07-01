<template>
  <div>
    <div v-if="networkSuccess" class="container">
      <slot></slot>
    </div>
    <Refresh></Refresh>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'Container',
    data () {
      return {}
    },
    methods: {

    },
    computed: {
      ...mapState(['networkSuccess'])
    }
  }
</script>

<style lang="sass" scoped>
  .container
    padding: 0
</style>
