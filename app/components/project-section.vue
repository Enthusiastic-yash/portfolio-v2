<template>
  <div id="projects">
    <div class="py-20">
      <h2
        class="font-heading bg-linear-to-br from-white to-zinc-500 bg-clip-text py-4 text-3xl font-bold text-transparent"
      >
        Projects
      </h2>

      <div
        v-for="project in projects"
        :key="project.id"
        class="grid grid-cols-1 gap-5 py-14 md:grid-cols-2"
      >
        <div class="project-card aspect-auto -translate-x-20 opacity-0">
          <NuxtImg
            :src="`./images/${project.id}.png`"
            class="rounded-xl"
            alt="nuxt-ai"
          />
        </div>
        <div class="project-card translate-x-20 opacity-0">
          <h3
            class="font-heading bg-linear-to-br from-white to-zinc-500 bg-clip-text pb-2 text-xl font-bold text-transparent"
          >
            {{ project.title }}
          </h3>
          <p class="text-md py-2 text-start leading-7 text-zinc-400/90">
            {{ project.description }}
          </p>
          <div class="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            <div
              class="py-2"
              v-for="tool in project.tools"
              :key="tool.indexOf(tool)"
            >
              <span
                class="font-body block w-full rounded-lg bg-zinc-900/80 py-1 text-center text-xs tracking-tight text-zinc-300 ring-1 ring-zinc-100/10"
                >{{ tool }}</span
              >
            </div>
          </div>
          <div class="mt-3 flex flex-col gap-2 md:flex-row md:gap-4">
            <NuxtLink :to="project.appLink" target="_blank">
              <div
                class="mt-2 flex w-full cursor-pointer items-center justify-center rounded-lg bg-zinc-900/80 py-1 ring-1 ring-zinc-100/10 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-[0px_0px_5px_rgba(56,189,248,0.35),0_0_12px_rgba(56,189,248,0.25),0_0_50px_rgba(56,189,248,0.15)] md:w-32 md:justify-evenly"
              >
                <IconExternalLink class="size-8 pr-2 md:size-7" />
                <span class="font-body text-sm capitalize">View Demo</span>
              </div>
            </NuxtLink>
            <NuxtLink :to="project.githubLink" target="_blank">
              <div
                class="mt-2 flex w-full cursor-pointer items-center justify-center rounded-lg bg-zinc-900/80 py-1 ring-1 ring-zinc-100/10 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-[0px_0px_5px_rgba(56,189,248,0.35),0_0_12px_rgba(56,189,248,0.25),0_0_50px_rgba(56,189,248,0.15)] md:w-32 md:justify-evenly"
              >
                <IconBrandGithub class="size-8 pr-2 md:size-7" />
                <span class="font-body text-sm capitalize">Github</span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconExternalLink, IconBrandGithub } from "@tabler/icons-vue";

interface projectTypes {
  id: number;
  title: string;
  description: string;
  tools: string[];
  appLink: string;
  githubLink: string;
}

const projects = ref<projectTypes[]>([
  {
    id: 1,
    title: "Full-Stack Nuxt AI Suite (SaaS)",
    description:
      "A full-stack Software as a Service (SaaS) platform built with Nuxt 4 and Nuxt UI, offering a versatile collection of AI-powered tools. Key features include background removal, object removal from images using the Cloudinary API, a Resume Reviewer, Article Writer, and a Blog Title Generator. The application utilizes the Gemini/OpenAI API for core AI functionalities, manages user subscriptions via Polar, and ensures data persistence with the Turso database and Drizzle ORM for type-safe operations. Zod is used for robust runtime validation. and Better-Auth for secure authentication",
    tools: [
      "Nuxt",
      "NuxtUI",
      "JavaScript",
      "Drizzle (ORM)",
      "Turso",
      "Polar (For Payment)",
      "Gemini/OpenAI API",
      "Cloudinary API",
      "Zod",
      "Better-Auth",
    ],
    appLink: "https://nuxt-ai-xi.vercel.app/",
    githubLink: "https://github.com/Enthusiastic-yash/Nuxt-ai-sass",
  },
  {
    id: 2,
    title: "Global Vue Weather Tracker",
    description:
      "Emphasizes real-time data, API integration, and the framework (Vue.js).",
    tools: ["Html", "css", "javascript", "Vue.js"],
    appLink: "https://global-weather-report.netlify.app/",
    githubLink: "https://github.com/Enthusiastic-yash/weather-app",
  },
  {
    id: 3,
    title: "Full-Stack Firebase Music Platform",
    description:
      "Highlights Full-Stack nature, user interaction (upload, listen, comment), and the key technologies (Vue.js, Tailwind, Firebase).",
    tools: ["Html", "SCSS", "Firebase", "Vue.js"],
    appLink: "https://music-example-ruddy.vercel.app/",
    githubLink: "https://github.com/Enthusiastic-yash/Music-app",
  },
  {
    id: 4,
    title: "Real-Time Geo IP Tracker",
    description:
      "Focuses on real-time capability, location tracking, and map visualization.",
    tools: ["Html", "Tailwind CSS", "javascript", "Vue.js"],
    appLink: "https://location-ip-tracker.netlify.app/",
    githubLink: "https://github.com/Enthusiastic-yash/Ip-Tracker",
  },
  {
    id: 5,
    title: "Responsive SCSS Hotel Landing Page",
    description: "Stresses responsive design and the use of SCSS for styling.",
    tools: ["Html", "SCSS"],
    appLink: "https://yash-nature.netlify.app/",
    githubLink: "#",
  },
  {
    id: 6,
    title: "Animated SCSS/JS Tour Booking Page",
    description:
      "Highlights advanced, vanilla animation and the Tour Booking niche.",
    tools: ["Html", "SCSS", "JavaScript"],
    appLink: "https://yash-travel.netlify.app/",
    githubLink: "#",
  },
]);
const { $gsap } = useNuxtApp();

let ctx: any;

onMounted(async () => {
  // await nextTick();

  ctx = $gsap.context(() => {
    // 1. Select all project cards
    const cards = $gsap.utils.toArray(".project-card") as HTMLElement[];
    cards.forEach((card) => {
      $gsap.to(card, {
        scrollTrigger: {
          trigger: card, // Each card triggers itself
          start: "top 85%", // Trigger when the top of THIS card hits 85% of viewport
          end: "top 50%", // Optional: finish the animation by the time it hits middle
          toggleActions: "play none none reverse",
          //markers: true, // Uncomment this to see exactly where each card triggers!
        },
        x: 0, // Bring it to its natural CSS position
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      });
    });
  });
});

onUnmounted(() => {
  console.log("unmount");
  ctx.revert();
});
</script>

<style scoped></style>
