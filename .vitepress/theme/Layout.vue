<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { inBrowser, useRoute } from 'vitepress'
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import mediumZoom from 'medium-zoom'
import ExtraSidebar from './components/ExtraSidebar.vue'
import Footer from './components/Footer.vue'

const { Layout } = DefaultTheme
const route = useRoute()

const applyZoom = () => {
  if (!inBrowser) return
  mediumZoom('.vp-doc img:not(.no-zoom), .home-community-card img', { background: 'rgba(0,0,0,0.85)' })
}

const STORAGE_KEY = 'ai-nav:aside-pinned'
const pinned = ref(true)

const syncAsideClass = () => {
  if (!inBrowser) return
  document.documentElement.classList.toggle('aside-unpinned', !pinned.value)
}

const togglePin = () => {
  pinned.value = !pinned.value
  if (inBrowser) {
    localStorage.setItem(STORAGE_KEY, pinned.value ? '1' : '0')
  }
  syncAsideClass()
}

const CARET_SVG =
  '<svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true"><path d="M3 4.5 L6 7.5 L9 4.5" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>'

const enhanceOutline = () => {
  if (!inBrowser) return
  const outline = document.querySelector('.VPDocAsideOutline')
  if (!outline) return
  const items = outline.querySelectorAll<HTMLLIElement>('li')
  items.forEach((li) => {
    const childUl = li.querySelector<HTMLUListElement>(':scope > ul')
    const existing = li.querySelector<HTMLButtonElement>(':scope > .outline-collapse')
    if (!childUl) {
      if (existing) existing.remove()
      return
    }
    if (existing) return
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'outline-collapse'
    btn.setAttribute('aria-label', '折叠或展开子项')
    btn.innerHTML = CARET_SVG
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()
      const collapsed = li.getAttribute('data-outline-collapsed') === '1'
      li.setAttribute('data-outline-collapsed', collapsed ? '0' : '1')
    })
    li.prepend(btn)
  })
}

let outlineObserver: MutationObserver | null = null

onMounted(() => {
  if (inBrowser) {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved !== null) pinned.value = saved === '1'
    syncAsideClass()
  }
  nextTick(() => {
    applyZoom()
    enhanceOutline()
    const aside = document.querySelector('.VPDoc .aside')
    if (aside) {
      outlineObserver = new MutationObserver(() => enhanceOutline())
      outlineObserver.observe(aside, { childList: true, subtree: true })
    }
  })
})
onUnmounted(() => outlineObserver?.disconnect())
watch(() => route.path, () => nextTick(() => {
  applyZoom()
  enhanceOutline()
}))
</script>

<template>
  <Layout>
    <template #aside-outline-before>
      <div class="outline-header">
        <span class="outline-header-title">大纲</span>
        <button
          class="outline-pin"
          :class="{ 'is-pinned': pinned }"
          :title="pinned ? '取消固定（鼠标靠右悬停显示）' : '固定大纲'"
          :aria-label="pinned ? '取消固定大纲' : '固定大纲'"
          @click="togglePin"
        >
          <svg v-if="pinned" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path fill="currentColor" d="M12 5c-5 0-9 4.5-10 7 1 2.5 5 7 10 7s9-4.5 10-7c-1-2.5-5-7-10-7Zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
          </svg>
          <svg v-else viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path fill="currentColor" d="M3.3 4.7a1 1 0 0 1 1.4 0l15.6 15.6a1 1 0 0 1-1.4 1.4l-2.6-2.6A11.6 11.6 0 0 1 12 20C7 20 3 15.5 2 13c.5-1.3 1.9-3.3 4-5L3.3 6.1a1 1 0 0 1 0-1.4Zm5.3 5.3 5.4 5.4a4 4 0 0 1-5.4-5.4ZM12 6c5 0 9 4.5 10 7-.4 1-1.5 2.6-3.2 4.1l-2.5-2.5a4 4 0 0 0-5.4-5.4L8.9 7.1A11.7 11.7 0 0 1 12 6Z"/>
          </svg>
        </button>
      </div>
    </template>
    <template #aside-outline-after>
      <ExtraSidebar />
    </template>
    <template #layout-bottom>
      <Footer />
    </template>
  </Layout>

  <div v-if="!pinned" class="aside-peek" aria-hidden="true">
    <div class="aside-peek-icon">
      <span />
      <span />
      <span />
    </div>
  </div>
</template>

<style scoped>
.outline-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 8px;
}
.outline-header-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  line-height: 32px;
}
.outline-pin {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 6px;
  background: transparent;
  color: var(--vp-c-text-3);
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s, border-color 0.2s;
}
.outline-pin:hover {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}
.outline-pin.is-pinned {
  color: var(--vp-c-brand-1);
}

.aside-peek {
  position: fixed;
  top: var(--vp-nav-height);
  right: 0;
  bottom: 0;
  width: 24px;
  z-index: 29;
}
.aside-peek-icon {
  position: absolute;
  top: 16px;
  right: 8px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  opacity: 0.7;
  transition: opacity 0.35s ease;
  pointer-events: none;
}
.aside-peek-icon span {
  display: block;
  width: 14px;
  height: 2px;
  border-radius: 2px;
  background: var(--vp-c-text-3);
}
.aside-peek:hover .aside-peek-icon {
  opacity: 0;
}
</style>
