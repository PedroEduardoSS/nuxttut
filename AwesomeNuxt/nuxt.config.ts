// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/style.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxt/test-utils/module',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ]
})
