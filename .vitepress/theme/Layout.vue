<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { inBrowser, useRoute } from 'vitepress'
import { nextTick, onMounted, watch } from 'vue'
import mediumZoom from 'medium-zoom'
import ExtraSidebar from './components/ExtraSidebar.vue'
import Footer from './components/Footer.vue'

const { Layout } = DefaultTheme
const route = useRoute()

const applyZoom = () => {
  if (!inBrowser) return
  mediumZoom('.vp-doc img:not(.no-zoom)', { background: 'rgba(0,0,0,0.75)' })
}

onMounted(() => nextTick(applyZoom))
watch(() => route.path, () => nextTick(applyZoom))
</script>

<template>
  <Layout>
    <template #aside-outline-after>
      <ExtraSidebar />
    </template>
    <template #layout-bottom>
      <Footer />
    </template>
  </Layout>
</template>
