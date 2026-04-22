<template>
  <aside v-if="headers.length" class="page-sidebar-toc">
    <div class="toc-title">本页目录</div>
    <ul class="toc-list">
      <PageSidebarTocLink v-for="(h, i) in headers" :key="i" :header="h" />
    </ul>
  </aside>
</template>

<script>
import PageSidebarTocLink from '@theme/components/PageSidebarTocLink.vue'

export default {
  components: { PageSidebarTocLink },
  computed: {
    headers () { return (this.$page.headers || []).filter(h => h.level >= 2 && h.level <= 4) }
  }
}
</script>

<style lang="stylus">
.page-sidebar-toc
  .toc-title
    font-weight 600
    margin-bottom .6rem
    font-size .9rem
    color #666
  .toc-list
    list-style none
    padding 0
    margin 0
    font-size .85rem
</style>
