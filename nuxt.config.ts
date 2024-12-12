// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/image',
    '@vueuse/motion/nuxt',
    '@nuxtjs/i18n',
    'nuxt-zod-i18n',
    '@pinia/nuxt',
  ],
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
  },
  css: ['@/assets/css/custom.css'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  runtimeConfig: {
    public: {
      available: '',
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
    },
  },
  i18n: {
    defaultDirection: 'ltr',
    defaultLocale: 'fr-FR',
    langDir: 'locales',
    locales: [
      {
        code: 'fr-FR',
        file: 'fr.json',
      },
    ],
  },
  nitro: {
    preset: 'node-server',
  },
})
