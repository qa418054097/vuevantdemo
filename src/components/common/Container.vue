<template>
    <div class="container">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Container'
    }
</script>

<style lang="sass" scoped>
  .container
   padding: 10px
</style>
