<template>
  <div>
    <Header
      backgroundColor="var(--color-black)"
      title="Portfolio"
      subtitle="Previous Work"
      headerClass="header-small">
      <template #description> </template>
    </Header>

    <section id="carousel">
      <div class="container">
        <SwiperSlider />
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Ben Ward - Portfolio",
  meta: [{ name: "description", content: "My amazing site." }],
});

const isMobile = ref(window.innerWidth < 768);

//Temp fix for swiper mounting before dom is loaded on dev server. can be removed for prod
if (!isMobile.value) {
  definePageMeta({
    pageTransition: false,
  });
}
</script>

<style>
#carousel .container {
  padding-left: 1vw;
  padding-right: 1vw;
  padding-bottom: 7.5vh;
}

@media (max-width: 767px) {
  #carousel .container {
    padding-left: var(--spacing-5);
    padding-right: var(--spacing-5);
  }
}
</style>
