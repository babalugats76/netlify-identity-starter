// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  // modules: [
  //   '@nuxt/eslint',
  // ],
  devtools: { enabled: true },

  compatibilityDate: '2024-11-01',

  // typescript: {
  //   strict: true,
  //   typeCheck: true,
  // },
  // eslint: {
  //   config: {
  //     stylistic: true,
  //   },
  // },
  app: {
    head: {
      script: [
        {
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
          type: 'text/javascript',
          defer: true
        }
      ]
    }
  },
  modules: ['@pinia/nuxt', '@nuxtjs/supabase'],
  runtimeConfig: {
    HAPIO_API_KEY: '',
    HAPIO_API_URL: '',
    SUPABASE_SECRET_KEY: '',
    public: {
      SITE_URL: 'https://localhost:3000',
      SUPABASE_URL: '',
      SUPABASE_KEY: '',
    },
  },
});