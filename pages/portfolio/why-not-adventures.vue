<template>
  <div class="portfolio why-not-adventures">
    <Header
      imageUrl="/images/why-not-adventures/background-image.webp"
      imageAlt="Mountains of Pakistan"
      title="Why Not Adventures"
      subtitle="Tour Operator"
      buttonText="View Website"
      buttonUrl="https://whynotadventures.co.uk"
      buttonDescription="View Website"
      headerClass="header-large">
      <template #description>
        <p>
          Why Not Adventures, a premier travel company offering unique and
          exciting tours worldwide. For this project, I designed and developed a
          captivating website that effectively showcases the company's diverse
          travel experiences. The site features an engaging, user-friendly
          layout that includes detailed itineraries, customer testimonials, and
          a seamless booking system for hassle-free reservations. Strategic SEO
          practices were also implemented to enhance online visibility and
          attract more adventure-seeking travelers.
        </p>
      </template>
    </Header>

    <section class="overview">
      <LayoutGridContainer>
        <TextSectionLabel labelText="IT Services" />
        <TextParagraphWithTitle subtitleTag="h3" linkUrl="/facilities">
          <template #title
            >Distinctive adventures, unforgettable experiences.</template
          >
          <template #body>
            <p>
              Why Not Adventures, a premier travel company offering unique and
              exciting tours worldwide. For this project, I designed and
              developed a captivating website that effectively showcases the
              company's diverse travel experiences. The site features an
              engaging, user-friendly layout that includes detailed itineraries,
              customer testimonials, and a seamless booking system for
              hassle-free reservations. Strategic SEO practices were also
              implemented to enhance online visibility and attract more
              adventure-seeking travelers.
            </p>
            <a
              class="link underline-out-icon"
              href="https://whynotadventures.co.uk"
              aria-label="Why Not Adventures Website"
              target="_blank"
              ><LucideExternalLink />View Website</a
            >
          </template>
        </TextParagraphWithTitle>
        <ListsDefaultList
          title="Services"
          :items="[
            { id: 1, text: 'UI/UX Design' },
            { id: 2, text: 'Web Development' },
            { id: 3, text: 'Brand Design' },
            { id: 4, text: 'SEO' },
          ]" />
        <ListsDefaultList
          title="Industry"
          :items="[
            { id: 1, text: 'Travel' },
            { id: 2, text: 'Tourism' },
          ]" />
        <ListsDefaultList
          title="Date"
          :items="[{ id: 1, text: 'July 2024' }]" />
      </LayoutGridContainer>
    </section>

    <section>
      <LayoutGridContainer>
        <ImageDefault
          imageUrl="/images/why-not-adventures/header.png"
          altText="Celestial Relaxation Room"
          class="portfolio-header"
          rellaxPercentage="0"
          rellaxSpeed="0" />
      </LayoutGridContainer>
    </section>

    <section class="large-image-container">
      <LayoutGridContainer>
        <ImageDefault
          imageUrl="/images/why-not-adventures/trip-long-screenshot.png"
          altText="Celestial Relaxation Room"
          class="portfolio-header" />
        <TextParagraphWithTitle subtitleTag="h4">
          <template #title>A Fresh, Modern Appearance</template>
          <template #body>
            <p>
              An IT services company offering best in class service and support.
              For this project, I designed and developed a professional website
              that effectively communicates the firm's expertise in IT
              solutions. The site features a robust, informative layout that
              includes service descriptions, client testimonials, and a live
              chat feature for instant customer support. Strategic SEO practices
              were also implemented to enhance online visibility and attract
              more business clientele.
            </p>
          </template>
          <template #link-text>View Treatments & Packages</template>
        </TextParagraphWithTitle>
        <ImageDefault
          imageUrl="/images/why-not-adventures/gallery.png"
          altText="Celestial Relaxation Room"
          class="portfolio-header" />
        <ImageDefault
          imageUrl="/images/why-not-adventures/image-1.png"
          altText="Celestial Relaxation Room"
          class="portfolio-header" />
      </LayoutGridContainer>
    </section>

    <PortfolioSection
      sectionID="branding"
      imageUrl="/images/why-not-adventures/logo.svg"
      imageAlt="Why Not Adventures Logo"
      :imageCustomClass="['portfolio-logo']"
      textPosition="left"
      title="A Fresh, Modern Appearance">
      <template #body>
        <p>
          An IT services company offering best in class service and support. For
          this project, I designed and developed a professional website that
          effectively communicates the firm's expertise in IT solutions. The
          site features a robust, informative layout that includes service
          descriptions, client testimonials, and a live chat feature for instant
          customer support. Strategic SEO practices were also implemented to
          enhance online visibility and attract more business clientele.
        </p>
      </template>
    </PortfolioSection>

    <PortfolioSection
      sectionID="team"
      imageUrl="/images/why-not-adventures/image-1.png"
      imageAlt="TODO REPLACE TEXT"
      :imageCustomClass="['portfolio-team', 'overflow']"
      textPosition="right"
      title="A Personable, Approachable Team">
      <template #body>
        <p>
          An IT services company offering best in class service and support. For
          this project, I designed and developed a professional website that
          effectively communicates the firm's expertise in IT solutions. The
          site features a robust, informative layout that includes service
          descriptions, client testimonials, and a live chat feature for instant
          customer support. Strategic SEO practices were also implemented to
          enhance online visibility and attract more business clientele.
        </p>
      </template>
    </PortfolioSection>

    <PortfolioSection
      sectionID="services"
      imageUrl="/images/why-not-adventures/image-1.png"
      imageAlt="TODO REPLACE TEXT"
      :imageCustomClass="['portfolio-services', 'overflow']"
      textPosition="left"
      title="A Full Spectrum Of Services On Offer">
      <template #body>
        <p>
          An IT services company offering best in class service and support. For
          this project, I designed and developed a professional website that
          effectively communicates the firm's expertise in IT solutions. The
          site features a robust, informative layout that includes service
          descriptions, client testimonials, and a live chat feature for instant
          customer support. Strategic SEO practices were also implemented to
          enhance online visibility and attract more business clientele.
        </p>
      </template>
    </PortfolioSection>

    <PortfolioSection
      sectionID="psi"
      imageUrl="/images/why-not-adventures/psi-score.png"
      imageAlt="TODO REPLACE TEXT"
      :imageCustomClass="['portfolio-lighthouse']"
      textPosition="right"
      title="High Performance, Available to Everyone">
      <template #body>
        <p>
          An IT services company offering best in class service and support. For
          this project, I designed and developed a professional website that
          effectively communicates the firm's expertise in IT solutions. The
          site features a robust, informative layout that includes service
          descriptions, client testimonials, and a live chat feature for instant
          customer support. Strategic SEO practices were also implemented to
          enhance online visibility and attract more business clientele.
        </p>
        <a
          class="link underline-out-icon"
          href="https://pagespeed.web.dev/analysis/https-portfolio-nuxt-6c3-pages-dev-portfolio-node-one/15ywm0w7vd?hl=en-GB&form_factor=desktop"
          aria-label="Node One Website"
          target="_blank"
          ><LucideExternalLink />View Full Report</a
        >
      </template>
    </PortfolioSection>

    <section class="end">
      <LayoutGridContainer>
        <TextCard
          name="Tia Thomas"
          position="Founder"
          quote="Working with this team has been a game-changer for our business. The web development service provided was top-notch, with a keen attention to detail and a clear focus on our objectives. Our new website is not only visually stunning but also highly functional and user-friendly. The continuous support we receive ensures our site remains up-to-date and continues to perform excellently."
          imgSrc="/images/person.png" />
        <NuxtLink
          class="underline-out"
          to="/portfolio/node-one"
          aria-label="Portfolio Page"
          >View Next Project</NuxtLink
        >
      </LayoutGridContainer>
    </section>
  </div>
</template>

<script setup>
import PortfolioSection from "~/components/Layout/PortfolioSection.vue";

useHead({
  title: "Ben Ward - Why Not Adventures",
  meta: [
    {
      name: "description",
      content:
        "Offering top-notch web development services to help businesses succeed online.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://benward.io/portfolio/why-not-adventures",
    },
  ],
});
</script>

<style scoped>
.overview .paragraph-with-title {
  grid-column: 6 / 14;
}

.overview .list {
  margin-top: 2vw;
}

.overview .list:nth-child(3) {
  grid-column: 6 / 9;
  grid-row-start: 2;
}

.overview .list:nth-child(4) {
  grid-column: 9 / 12;
  grid-row-start: 2;
}

.overview .list:nth-child(5) {
  grid-column: 12 / 15;
  grid-row-start: 2;
}

.portfolio .portfolio-header {
  grid-column: 2 / 16;
}

.portfolio .card {
  grid-column: 10 / 16;
}

.container .end a {
  grid-column: 10 / 15;
}

.large-image-container .container .image:nth-child(1) {
  grid-column-end: 8;
  grid-row: 1 / 4;
  margin-left: -500px;
}

.large-image-container .container .paragraph-with-title:nth-child(2) {
  grid-column: 9 / 16;
  grid-row: 1;
}

.large-image-container .container .image:nth-child(3) {
  grid-column: 9 / 17;
  grid-row: 2;
  margin-right: -500px;
}

.large-image-container .container .image:nth-child(4) {
  grid-column: 9 / 17;
  grid-row: 3;
  margin-right: -500px;
}

@media (max-width: 767px) {
  .portfolio .item.paragraph-with-title,
  .portfolio .item.image,
  .portfolio .item.card,
  .end a {
    grid-column: 1 / 7;
    grid-row: auto;
    margin: 0;
  }

  .overview .item.list {
    grid-column: span 2;
    grid-row: auto;
  }

  .end .container a {
    margin-right: auto;
    margin-top: var(--spacing-5);
  }

  .large-image-container .container .image:nth-child(1) {
    grid-column-end: 5;
    grid-row: 2 / 4;
    margin-left: -300px;
  }

  .large-image-container .container .paragraph-with-title:nth-child(2) {
    grid-column: 1 / 7;
    grid-row: 1;
  }

  .large-image-container .container .image:nth-child(3) {
    grid-column: 5 / 7;
    grid-row: 2;
    margin-right: -200px;
  }

  .large-image-container .container .image:nth-child(4) {
    grid-column: 5 / 7;
    grid-row: 3;
    margin-right: -200px;
  }
}
</style>

<style>
@media (max-width: 767px) {
  h1 {
    font-size: 16vw;
  }
}
</style>
