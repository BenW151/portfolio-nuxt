<template>
  <div class="portfolio">
    <Header
      backgroundColor="var(--color-black)"
      title="Portfolio"
      subtitle="Previous Work"
      headerClass="header-large">
      <template #description> </template>
    </Header>

    <section id="carousel">
      <div class="container">
        <CarouselsPortfolio />
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Ben Ward - Portfolio",
  meta: [{ name: "description", content: "Offering top-notch web development services to help businesses succeed online." }],
  link: [
    {
      rel: "canonical",
      href: "https://benward.io/portfolio",
    },
  ],
});

const isMobile = ref(window.innerWidth < 768);

//Temp fix for swiper mounting before dom is loaded on dev server. can be removed for prod
</script>

<style>
#carousel .container {
  padding-left: 1vw;
  padding-right: 1vw;
  padding-bottom: 7.5vh;
  padding-top: 0;
}

.portfolio .paragraph.medium {
  display: none;
}


@media (max-width: 767px) {
  #carousel .container {
    padding-left: var(--spacing-4);
    padding-right: var(--spacing-4);
  }
}
</style>
