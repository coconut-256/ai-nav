<template>
  <main class="page">
    <slot name="top" />
    <Content class="theme-default-content" />
    <PageEdit />
    <PageNav v-bind="{ sidebarItems }" />
    <PageSidebarToc />
    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@parent-theme/components/PageEdit.vue'
import PageNav from '@parent-theme/components/PageNav.vue'
import PageSidebarToc from '@theme/components/PageSidebarToc.vue'

export default {
  components: { PageEdit, PageNav, PageSidebarToc },
  props: { sidebarItems: { type: Array, default: () => [] } }
}
</script>

<style lang="stylus">
.page
  padding-bottom 2rem
  .theme-default-content
    max-width 820px
    margin 0 auto
    padding 2rem 2.5rem 0
</style>
