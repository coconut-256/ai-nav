<script setup lang="ts">
const year = new Date().getFullYear()
const links = [
  { text: 'GitHub', href: 'https://github.com/coconut-256/ai-nav' },
  { text: 'RSS', href: '/feed.rss' }
]
const copyright = `© ${year} 可可耐特（coconut-256）`
const icp = ''
</script>

<template>
  <footer class="site-footer">
    <div v-if="links.length" class="footer-links">
      <a
        v-for="l in links"
        :key="l.href"
        :href="l.href"
        target="_blank"
        rel="noopener noreferrer"
      >{{ l.text }}</a>
    </div>
    <div class="footer-copy">
      {{ copyright }}
      <span v-if="icp" class="icp">
        &nbsp;·&nbsp;
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">{{ icp }}</a>
      </span>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--vp-c-divider);
  padding: 1.4rem 2rem;
  text-align: center;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}
.footer-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 0.4rem;
}
.footer-links a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.footer-links a:hover {
  text-decoration: underline;
}
</style>
