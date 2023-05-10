// https://nuxt.com/docs/api/configuration/nuxt-config
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

export default defineNuxtConfig({
  app: {
    baseURL: "/",
    buildAssetsDir: "/home-relative/",
  },

  // Github pages required
  ssr: false,

  // plugins: [
  //   "@/plugins/element-plus.js",
  // ],

  css: ["@/assets/css/reset.css"],

  // vite: {
  //   build: {
  //     sourcemap: false,
  //     minify: "terser",
  //     chunkSizeWarningLimit: 1500,
  //     terserOptions: {
  //       compress: {
  //         drop_console: true,
  //         drop_debugger: true,
  //       },
  //     },
  //   },
  //   plugins: [
  //     AutoImport({
  //       resolvers: [ElementPlusResolver(), IconsResolver()],
  //     }),
  //     Components({
  //       resolvers: [
  //         ElementPlusResolver(),
  //         IconsResolver({
  //           enabledCollections: ["ep"],
  //         }),
  //       ],
  //     }),
  //     Icons({
  //       autoInstall: true,
  //     }),
  //   ],
  // },
});
