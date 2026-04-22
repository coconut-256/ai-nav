<template>
  <transition
    name="dropdown"
    @enter="setHeight"
    @after-enter="unsetHeight"
    @before-leave="setHeight"
  >
    <slot />
  </transition>
</template>

<script>
export default {
  methods: {
    setHeight (el) { el.style.height = el.scrollHeight + 'px' },
    unsetHeight (el) { el.style.height = '' }
  }
}
</script>

<style lang="stylus">
.dropdown-enter-active, .dropdown-leave-active
  transition all .25s ease
  overflow hidden
.dropdown-enter, .dropdown-leave-to
  opacity 0
  height 0 !important
</style>
