<template>
  <aside class="extra-sidebar">
    <section v-if="tags.length" class="extra-block">
      <div class="extra-title">标签</div>
      <div class="tag-list">
        <RouterLink v-for="t in tags" :key="t" :to="`/tag/${t}/`" class="tag">#{{ t }}</RouterLink>
      </div>
    </section>

    <section class="extra-block">
      <div class="extra-title">相关链接</div>
      <ul class="extra-links">
        <li><a href="https://github.com/coconut-256/ai-nav" target="_blank" rel="noopener">GitHub 仓库</a></li>
        <li><a href="/feed.xml" target="_blank">RSS 订阅</a></li>
      </ul>
    </section>
  </aside>
</template>

<script>
export default {
  computed: {
    tags () { return (this.$page.frontmatter && this.$page.frontmatter.tags) || [] }
  }
}
</script>

<style lang="stylus">
.extra-block
  margin-bottom 1.4rem
  .extra-title
    font-weight 600
    margin-bottom .5rem
    color #333
  .tag-list
    display flex
    flex-wrap wrap
    gap .4rem
    .tag
      background #f1f5f9
      padding .1rem .5rem
      border-radius 10px
      font-size .8rem
      color #3b4252
      text-decoration none
  .extra-links
    list-style none
    padding 0
    margin 0
    font-size .9rem
    li a
      color #27b1ff
      text-decoration none
</style>
