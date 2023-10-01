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
    //
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
  app: {
    baseURL: '/resume/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
  // ssr: false, // causes issues when running generate due to content not being available.
  devtools: { enabled: true }
})
