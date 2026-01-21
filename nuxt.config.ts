// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app:{
    head:{
      charset:'utf-8',
      title:"Learn Nuxt",
      meta:[{
        name:'description',content:"Learning nuxt"
      }]
    },
  }
})
