<template>
  <div class="portfolio">
    <Header
      backgroundColor="var(--background-primary)"
      title="Portfolio"
      subtitle="Previous Work."
      headerClass="header-large">
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
  title: "Ben Ward | Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Explore my web development portfolio, featuring my latest and most impactful projects.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://benward.io/portfolio",
    },
  ],
});
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
