<template>
  <nav v-if="userLinks.length || repoLink" class="nav-links">
    <div v-for="item in userLinks" :key="item.link || item.text" class="nav-item">
      <DropdownLink v-if="item.type === 'links'" :item="item" />
      <NavLink v-else :item="item" />
    </div>
    <a v-if="repoLink" :href="repoLink" class="repo-link" target="_blank" rel="noopener noreferrer">
      {{ repoLabel }}
    </a>
  </nav>
</template>

<script>
import NavLink from '@parent-theme/components/NavLink.vue'
import DropdownLink from '@theme/components/DropdownLink.vue'

export default {
  components: { NavLink, DropdownLink },
  computed: {
    userNav () { return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || [] },
    userLinks () {
      return (this.userNav || []).map(link => Object.assign(this.resolveNavLinkItem(link), {
        items: (link.items || []).map(this.resolveNavLinkItem)
      }))
    },
    repoLink () {
      const { repo } = this.$site.themeConfig
      if (!repo) return null
      return /^https?:/.test(repo) ? repo : `https://github.com/${repo}`
    },
    repoLabel () { return this.$site.themeConfig.repoLabel || 'GitHub' }
  },
  methods: {
    resolveNavLinkItem (link) {
      return Object.assign(link, { type: link.items && link.items.length ? 'links' : 'link' })
    }
  }
}
</script>

<style lang="stylus">
.nav-links
  display flex
  align-items center
  gap 1.2rem
  font-size .95rem
  .repo-link
    color #27b1ff
    text-decoration none
</style>
