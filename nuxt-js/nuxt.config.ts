export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  ssr: false,
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: "123",

    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "",
    },
  },
  modules: ["@nuxtjs/i18n", "@pinia/nuxt", "@nuxtjs/tailwindcss"],
  i18n: {
    langDir: "../src/locales",
    strategy: "no_prefix",
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en.json",
      },
    ],
  },
  tailwindcss: {
    cssPath: "./src/assets/scss/tailwind.scss",
    configPath: "tailwind.config",
  },
});
