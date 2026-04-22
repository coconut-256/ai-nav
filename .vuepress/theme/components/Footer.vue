<template>
  <footer class="footer">
    <div class="footer-links" v-if="links && links.length">
      <a v-for="l in links" :key="l.href" :href="l.href" target="_blank" rel="noopener noreferrer">{{ l.text }}</a>
    </div>
    <div class="footer-copy">
      {{ copyright }}
      <span v-if="icp" class="icp">&nbsp;·&nbsp;<a :href="'https://beian.miit.gov.cn/'" target="_blank" rel="noopener">{{ icp }}</a></span>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    footerConfig () { return (this.$site.themeConfig && this.$site.themeConfig.footer) || {} },
    copyright () { return this.footerConfig.copyright || `© ${new Date().getFullYear()}` },
    icp () { return this.footerConfig.icp },
    links () { return this.footerConfig.links || [] }
  }
}
</script>

<style lang="stylus">
.footer
  .footer-links
    display flex
    justify-content center
    gap 1rem
    margin-bottom .4rem
    a
      color #27b1ff
      text-decoration none
</style>
