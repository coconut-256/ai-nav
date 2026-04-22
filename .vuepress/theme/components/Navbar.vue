<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />
    <RouterLink :to="$localePath" class="home-link">
      <img v-if="$site.themeConfig.logo" class="logo" :src="$withBase($site.themeConfig.logo)" :alt="$siteTitle" />
      <span v-if="$siteTitle" class="site-name">{{ $siteTitle }}</span>
    </RouterLink>
    <div class="links">
      <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
      <NavLinks class="can-hide" />
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from '@theme/components/AlgoliaSearchBox.vue'
import SidebarButton from '@parent-theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  components: { SidebarButton, NavLinks, AlgoliaSearchBox },
  computed: {
    algolia () { return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {} },
    isAlgoliaSearch () { return this.algolia && this.algolia.apiKey && this.algolia.indexName }
  }
}
</script>

<style lang="stylus">
.navbar
  display flex
  align-items center
  padding 0 1.5rem
  .home-link
    display inline-flex
    align-items center
    text-decoration none
    color inherit
    .logo
      height 2.2rem
      margin-right .6rem
    .site-name
      font-weight 600
      font-size 1.1rem
  .links
    margin-left auto
    display flex
    align-items center
    gap 1rem
</style>
