declare module 'nuxt/schema' {

  interface RuntimeConfig {
    SUPABASE_SECRET_KEY: string
    public: PublicRuntimeConfig
  }

  interface PublicRuntimeConfig {
    SUPABASE_URL: string
    SUPABASE_KEY: string
  }
}

export {};
