// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/",
    buildAssetsDir: "/home-relative/",
  },

  // Github pages required
  ssr: false,

  plugins: [
    {
      src: "@/plugins/animate.js",
      ssr: false,
    },
  ],

  css: ["@/assets/css/reset.css", "@/assets/css/demo.css"],
});
