<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'Fade'
}
</script>

<style lang="stylus" scoped>
  // 开始和结束时的状态
  .v-enter , .v-leave-to
    opacity : 0
   // 开始的过渡效果和结束的过渡效果
  .v-enter-active , .v-leave-active
    transition : opacity .5s
</style>
