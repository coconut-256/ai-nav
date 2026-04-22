<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
const tags = computed<string[]>(() => (frontmatter.value?.tags as string[]) || [])
</script>

<template>
  <aside class="extra-sidebar">
    <section v-if="tags.length" class="extra-block">
      <div class="extra-title">标签</div>
      <div class="tag-list">
        <span v-for="t in tags" :key="t" class="tag">#{{ t }}</span>
      </div>
    </section>

    <section class="extra-block">
      <div class="extra-title">相关链接</div>
      <ul class="extra-links">
        <li>
          <a href="https://github.com/coconut-256/ai-nav" target="_blank" rel="noopener">GitHub 仓库</a>
        </li>
        <li>
          <a href="/feed.rss" target="_blank">RSS 订阅</a>
        </li>
      </ul>
    </section>
  </aside>
</template>

<style scoped>
.extra-sidebar {
  margin-top: 1.2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 0.9rem;
}
.extra-block {
  margin-bottom: 1.4rem;
}
.extra-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.tag {
  background: var(--vp-c-default-soft);
  padding: 0.1rem 0.5rem;
  border-radius: 10px;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}
.extra-links {
  list-style: none;
  padding: 0;
  margin: 0;
}
.extra-links li a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.extra-links li a:hover {
  text-decoration: underline;
}
</style>
