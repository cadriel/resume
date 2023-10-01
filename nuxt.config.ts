// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Modules
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/content'
  ],

  // Module Config
  colorMode: {
    classSuffix: ''
  },
  content: {
    // options
  },
  tailwindcss: {
    // cssPath: '~/assets/css/tailwind.css',
    // configPath: 'tailwind.config',
    // exposeConfig: false,
    // exposeLevel: 2,
    // config: {},
    // injectPosition: 'first',
    // viewer: true,
  },

  // Vite Config
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true
      }
    }
  },
  ssr: false,
  devtools: { enabled: true }
})
