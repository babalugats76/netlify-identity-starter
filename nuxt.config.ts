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
  supabase: {
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5bG5wcHBldWN3ZnJ0dGRjenhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5NTM4MDEsImV4cCI6MjA0OTUyOTgwMX0.dBPE301_h-YmgmS1jZsyKvrAcL8PjT3MOYdbLfZgTuQ",
    url: 'https://yylnpppeucwfrttdczxq.supabase.co',
  }
});