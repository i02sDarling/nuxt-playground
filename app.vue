<script setup lang="ts">
import '@unocss/reset/tailwind.css'
import 'splitpanes/dist/splitpanes.css'
import './styles/base.css'
import './styles/prose.css'
import './styles/overrides.css'

useHead({
  meta: [
    { name: 'description', content: '我的神奇网站。' },
    { name: 'keywords', content: 'i02sdarling,02sdarling,darling,github,nuxt,2668933894@qq.com,袁哲,算法,博客' },
  ],
})
</script>

<template>
  <NuxtPage page-key="playground" />
</template>
