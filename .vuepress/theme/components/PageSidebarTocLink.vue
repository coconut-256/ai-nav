<template>
  <li class="toc-item" :class="'level-' + header.level">
    <a :href="'#' + header.slug" class="toc-link">{{ header.title }}</a>
  </li>
</template>

<script>
export default {
  props: { header: { type: Object, required: true } }
}
</script>

<style lang="stylus">
.toc-item
  padding 0.1rem 0
  &.level-3 padding-left .8rem
  &.level-4 padding-left 1.6rem
  .toc-link
    color #555
    text-decoration none
    &:hover
      color #27b1ff
</style>
