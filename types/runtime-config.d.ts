declare module 'nuxt/schema' {

  interface RuntimeConfig {
    SUPABASE_SECRET_KEY: string
    HAPIO_API_KEY: string
    HAPIO_API_URL: string
    public: PublicRuntimeConfig
  }

  interface PublicRuntimeConfig {
    SUPABASE_URL: string
    SUPABASE_KEY: string
    SITE_URL: string
  }
}

export {};
