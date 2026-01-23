// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["./app/assets/css/main.css"],
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/icon", "@nuxt/image", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
      Poppins: [400, 500, 600, 700],
      "JetBrains Mono": [400, 500, 600],
    },
    display: "swap",
    preload: true,
  },
});
