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
