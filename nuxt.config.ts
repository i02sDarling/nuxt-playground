import { execaSync } from 'execa'
import components from 'unplugin-vue-components/vite'
import { AntDesignXVueResolver } from 'ant-design-x-vue/resolver'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    'floating-vue/nuxt',
    '@nuxtjs/seo',
    // '@nuxt/icon',
    '@nuxt/eslint',

    // local
    '~/modules/template-loader',
  ],
  colorMode: {
    classSuffix: '',
  },
  site: {
    url: 'https://i02sdarling.top',
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  ogImage: {
    defaults: {
      component: 'OgImageDocs',
      props: {
        colorMode: 'dark',
      },
    },
    componentOptions: {
      global: true,
    },
  },
  app: {
    head: {
      titleTemplate: '%s - Nuxt Tutorial',
      htmlAttrs: {
        lang: 'en-US',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },

  },
  typescript: {
    includeWorkspace: true,
    tsConfig: {
      include: [
        '../content/**/.template/**/*.ts',
      ],
    },
  },

  features: {
    inlineStyles: false,
  },
  runtimeConfig: {
    public: {
      buildTime: Date.now(),
      gitSha: execaSync('git', ['rev-parse', 'HEAD']).stdout.trim(),
      repoUrl: 'https://github.com/i02sDarling/nuxt-playground',
    },
    app: {
      devtools: {
        iframeProps: {
          allow: 'cross-origin-isolated',
          credentialless: true,
        },
      },
    },
  },
  devtools: {
    enabled: true,
  },
  nitro: {
    routeRules: {
      '/**': {
        headers: {
          'Cross-Origin-Embedder-Policy': 'require-corp',
          'Cross-Origin-Opener-Policy': 'same-origin',
        },
      },
    },
  },
  vite: {
    build: {
      minify: 'esbuild',
      cssMinify: 'esbuild',
    },
    server: {
      headers: {
        'Cross-Origin-Embedder-Policy': 'require-corp',
        'Cross-Origin-Opener-Policy': 'same-origin',
      },
    },
    optimizeDeps: {
      include: [
        'monaco-editor/esm/vs/editor/editor.worker',
        'monaco-editor-core/esm/vs/editor/editor.worker',
        'typescript/lib/tsserverlibrary',
        '@vue/language-service',
        '@volar/monaco/worker',
        'typescript',
        'vscode-uri',
      ],
    },
    plugins: [
      components({
        resolvers: [AntDesignXVueResolver()],
      }),
    ],
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    },
    markdown: {
      remarkPlugins: [
        'remark-external-links',
      ],
    },
    experimental: {
      search: {},
    },
  },

  compatibilityDate: '2024-04-03',
})
