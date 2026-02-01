<template>
  <div id="smooth-wrapper">
    <NuxtRouteAnnouncer />
    <NuxtLayout id="smooth-content">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const { $gsap, $ScrollSmoother } = useNuxtApp();

useHead({
  meta: [
    {
      name: "description",
      content:
        "Yash Kashyap | Senior Frontend Developer & Nuxt.js Expert Creative Frontend Developer with 3+ years of experience specializing in Nuxt 3, Vue.js, and TypeScript. Proven track record in building scalable SaaS platforms and high-performance web applications like Medmate and Ausmate. Expert in UI/UX optimization and full-stack integration.",
    },
  ],
});

onMounted(() => {
  $ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.5,
    effects: true,
  });
});

const route = useRoute();

watch(
  () => route.path,
  () => {
    const smoother = $ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTop(0); // Reset scroll to top on new page
      ScrollTrigger.refresh();
    }
  },
);
</script>
