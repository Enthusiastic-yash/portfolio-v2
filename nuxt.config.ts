// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  app: {
    head: {
      title: "Yash kashyap",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/images/logo.png" }],
    },
  },
  css: ["./app/assets/css/main.css"],
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/image", "@nuxtjs/google-fonts"],
  build: {
    transpile: ["gsap"],
  },

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
