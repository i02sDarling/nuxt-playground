<script setup lang="ts">
import '@unocss/reset/tailwind.css'
import 'splitpanes/dist/splitpanes.css'
import './styles/base.css'
import './styles/prose.css'
import './styles/overrides.css'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

const nuxtApp = useNuxtApp()
nuxtApp.vueApp.use(ElementPlus)
useHead({
  meta: [
    { name: 'description', content: 'Nuxt - Playground' },
    { name: 'keywords', content: 'i02sdarling,02sdarling,darling,github,nuxt,2668933894@qq.com,袁哲,算法,博客,monaco,vscode,online-ide' },
  ],
})
</script>

<template>
  <NuxtPage page-key="playground" />
</template>
