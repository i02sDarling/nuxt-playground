import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default antfu(
  {
    unocss: true,
    formatters: true,
    markdown: false,
    ignores: [
      '**/content/*.md',
    ],
  },
  nuxt,
)
