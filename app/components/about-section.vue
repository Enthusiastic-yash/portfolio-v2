<template>
  <div id="about" class="grid grid-cols-1 pb-8">
    <div>
      <h2
        class="font-heading bg-linear-to-br from-white to-zinc-500 bg-clip-text py-4 text-3xl font-bold text-transparent"
      >
        About Me
      </h2>
      <p class="font-body text-md leading-8 text-zinc-400/80 capitalize">
        {{ AboutMeParagraph }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const AboutMeParagraph = ref(
  "Frontend Developer with 3+ years of experience building scalable and user-friendly web applications using Vue.js, Nuxt 3, and Angular. I’ve worked on healthcare platforms, dashboards, and SaaS products, focusing on clean UI, performance optimization, and reusable components. I have experience working in both remote and onsite teams and enjoy building interfaces that solve real business problems.",
);
</script>

<style scoped></style>
