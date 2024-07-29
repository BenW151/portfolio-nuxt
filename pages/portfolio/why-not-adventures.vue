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
      <template #description> </template>
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
              Why Not Adventures, a new travel company offering unique and
              exciting tours worldwide. For this project, I designed and
              developed a captivating website that effectively showcases the
              company's diverse travel experiences. The site features an
              engaging, user-friendly layout that includes detailed itineraries,
              immersive video, and payment integration for hassle-free
              reservations. Strategic SEO practices were also implemented to
              enhance online visibility and attract more adventure-seeking
              travelers.
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
          altText="TODO Replace"
          class="portfolio-header"
          rellaxPercentage="0"
          rellaxSpeed="0" />
      </LayoutGridContainer>
    </section>

    <section class="large-image-container">
      <LayoutGridContainer>
        <ImageDefault
          imageUrl="/images/why-not-adventures/trip-long-screenshot.png"
          altText="TODO Replace"
          class="why-not-destination" />
        <TextParagraphWithTitle subtitleTag="h4">
          <template #title
            >Visually Appealing, <br />
            Fully Responsive
          </template>
          <template #body>
            <p>
              The site maintains a clean and modern design throughout, ensuring
              a consistent and engaging user experience. The site is
              thoughtfully designed with attention to detail, combining visually
              appealing elements with intuitive navigation. High-quality images,
              well-structured content, and responsive layouts work together to
              create an inviting and seamless experience for users. This
              approach not only enhances the site's aesthetic appeal but also
              its functionality and usability, reflecting a commitment to
              delivering top-notch web design.
            </p>
          </template>
        </TextParagraphWithTitle>
        <ImageDefault
          imageUrl="/images/why-not-adventures/gallery.png"
          altText="TODO Replace"
          class="why-not-gallery" />
        <ImageDefault
          imageUrl="/images/why-not-adventures/image-1.png"
          altText="TODO Replace"
          class="why-not-itinerary" />
      </LayoutGridContainer>
    </section>

    <PortfolioSection
      sectionID="branding"
      imageUrl="/images/why-not-adventures/logo-rectangle.svg"
      imageAlt="Why Not Adventures Logo"
      :imageCustomClass="['portfolio-logo']"
      textPosition="left"
      title="A Fresh, Modern Appearance">
      <template #body>
        <p>
          I designed a clean and modern logo that captures the essence of
          exploration and adventure. The logo features a simple yet striking
          mountain icon, symbolizing the spirit of adventure and the great
          outdoors. Accompanying the mountain is the company name, presented in
          a sleek, contemporary font that enhances the logo's overall appeal.
          This minimalist design ensures the logo is versatile and easily
          recognizable, aligning perfectly with the brand's identity and vision.
        </p>
      </template>
    </PortfolioSection>

    <PortfolioSection
      sectionID="itinerary"
      imageUrl="/images/why-not-adventures/image-1.png"
      imageAlt="TODO REPLACE TEXT"
      :imageCustomClass="['why-not-itinerary', 'overflow']"
      textPosition="right"
      title="A Trip to Remember">
      <template #body>
        <p>
          I created an engaging and visually appealing itinerary section to
          outline each day's activities. Each day features a large, high-quality
          image that immerses viewers in the experience. Below the image,
          detailed text explains the day's activities, providing a clear and
          enticing overview of what to expect. This layout not only captures the
          essence of the adventure but also ensures the information is
          accessible and easy to follow, enhancing the overall user experience.
        </p>
      </template>
    </PortfolioSection>

    <LayoutPortfolioImageLayover
      :images="[
        {
          url: '/images/why-not-adventures/background-image.webp',
          alt: 'Background Image',
          customClass: 'custom-background-class',
        },
        {
          url: '/images/why-not-adventures/gallery.png',
          alt: 'Overlay Image 1',
          customClass: 'why-not-gallery',
        },
        {
          url: '/images/why-not-adventures/image-1.png',
          alt: 'Overlay Image 2',
          customClass: 'why-not-itinerary',
        },
      ]" />

    <PortfolioSection
      sectionID="services"
      imageUrl="/images/why-not-adventures/who-am-i.png"
      imageAlt="TODO REPLACE TEXT"
      :imageCustomClass="['why-not-owner', 'overflow']"
      textPosition="left"
      title="A Relatable, Personable Character">
      <template #body>
        <p>
          I designed a dedicated section to introduce the company owner, who
          will personally lead the tours. The aim is to make the owner relatable
          and build a connection with potential customers. This section
          highlights their passion for travel, personal anecdotes, and unique
          insights, creating an inviting and trustworthy image. By showcasing
          the owner's personality and expertise, it encourages customers to join
          the tours, knowing they will be guided by someone genuinely passionate
          and knowledgeable about the destinations.
        </p>
      </template>
    </PortfolioSection>

    <PortfolioSection
      sectionID="psi"
      imageUrl="/images/why-not-adventures/psi-score.png"
      imageAlt="TODO REPLACE TEXT"
      :imageCustomClass="['portfolio-psi']"
      textPosition="right"
      title="High Performance, Available to Everyone">
      <template #body>
        <p>
          I focused on optimizing the website to achieve a perfect 100 score
          across all categories on Google PageSpeed Insights. This was
          accomplished through meticulous attention to performance,
          accessibility, best practices, and SEO. I implemented efficient coding
          practices, optimized images, leveraged browser caching, and ensured a
          responsive design. By prioritizing these elements, I not only enhanced
          the site's loading speed and user experience but also improved its
          visibility and ranking in search engines, demonstrating my commitment
          to delivering high-quality, performant websites.
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
          imgSrc="/images/why-not-adventures/tia.webp" />
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
  grid-column: 1 / 17;
}

.portfolio .card, .end a {
  grid-column: 10 / 16;
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
    grid-column: 1 / 7;
    grid-row: 2;
    margin-left: 0;
  }

  .large-image-container .container .paragraph-with-title:nth-child(2) {
    grid-column: 1 / 7;
    grid-row: 1;
  }

  .large-image-container .container .image:nth-child(3) {
    grid-column: 1 / 7;
    grid-row: auto;
    margin-right: 0;
  }

  .large-image-container .container .image:nth-child(4) {
    grid-column: 1 / 7;
    grid-row: auto;
    margin-right: 0;
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
