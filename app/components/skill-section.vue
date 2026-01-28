<template>
  <div id="skills">
    <div class="py-20">
      <h2
        class="font-heading bg-linear-to-br from-white to-zinc-500 bg-clip-text py-4 text-3xl font-bold text-transparent"
      >
        Skills & Tools
      </h2>
      <div
        class="relative grid grid-cols-2 gap-y-4 py-14 md:grid-cols-3 lg:grid-cols-6"
      >
        <span
          v-for="skill in skills"
          :key="skill.id"
          class="group font-body text-md relative flex w-full scale-90 cursor-pointer items-center justify-center justify-self-center rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-full bg-zinc-900/50 bg-[radial-gradient(50%_80%_at_50%_-20%,hsl(206,81.9%,65.3%,0.5),rgba(255,255,255,0))] font-semibold text-zinc-400/80 capitalize ring-1 ring-zinc-100/10 transition-all duration-300 hover:scale-100 hover:-rotate-2 hover:shadow-[0px_0px_12px_rgba(56,189,248,0.35),0_0_28px_rgba(56,189,248,0.25),0_0_60px_rgba(56,189,248,0.15)]"
        >
          <component
            :is="skill.logo"
            class="size-12 pr-3 transition-all duration-300"
            :class="skill.iconColor"
          />
          {{ skill.title }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandSass,
  IconBrandVue,
  IconBrandTailwind,
  IconBrandBootstrap,
  IconBrandNuxt,
  IconBrandVisualStudio,
  IconBrandGit,
  IconBrandGithub,
  IconBrandFirebase,
  IconBrandVercelFilled,
  IconBrandTypescript,
  type Icon,
} from "@tabler/icons-vue";

interface Skills {
  id: number;
  title: string;
  logo: Icon;
  iconColor: string;
}

const skills = ref<Skills[]>([
  {
    id: 1,
    title: "Html",
    logo: IconBrandHtml5,
    iconColor: "text-orange-500",
  },
  {
    id: 2,
    title: "css",
    logo: IconBrandCss3,
    iconColor: "text-blue-500",
  },
  {
    id: 3,
    title: "javaScript",
    logo: IconBrandJavascript,
    iconColor: "text-yellow-400",
  },
  {
    id: 4,
    title: "SCSS",
    logo: IconBrandSass,
    iconColor: "text-pink-500",
  },
  {
    id: 5,
    title: "Tailwind Css",
    logo: IconBrandTailwind,
    iconColor: "text-sky-400",
  },
  {
    id: 6,
    title: "Bootstrap",
    logo: IconBrandBootstrap,
    iconColor: "text-purple-500",
  },
  {
    id: 7,
    title: "Vue Js",
    logo: IconBrandVue,
    iconColor: "text-green-500",
  },
  {
    id: 8,
    title: "Nuxt Js",
    logo: IconBrandNuxt,
    iconColor: "text-green-500",
  },
  {
    id: 9,
    title: "Vs Code",
    logo: IconBrandVisualStudio,
    iconColor: "text-sky-500",
  },
  {
    id: 10,
    title: "Git",
    logo: IconBrandGit,
    iconColor: "text-red-500",
  },
  {
    id: 11,
    title: "Github",
    logo: IconBrandGithub,
    iconColor: "text-gray-500",
  },
  {
    id: 12,
    title: "Firebase",
    logo: IconBrandFirebase,
    iconColor: "text-yellow-500",
  },
  {
    id: 13,
    title: "Vuetify",
    logo: IconBrandVue,
    iconColor: "text-blue-500",
  },
  {
    id: 14,
    title: "Vercel",
    logo: IconBrandVercelFilled,
    iconColor: "text-gray-500",
  },
  {
    id: 15,
    title: "TypeScript",
    logo: IconBrandTypescript,
    iconColor: "text-indigo-500",
  },
]);
</script>

<style scoped></style>
