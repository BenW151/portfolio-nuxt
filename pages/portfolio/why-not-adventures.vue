<template>
  <div class="portfolio why-not-adventures">
    <Header
      imageUrl="/images/why-not-adventures/background-image.webp"
      imageAlt="Mountains of Pakistan"
      title="Why Not Adventures"
      subtitle="Tour Operator."
      headerClass="header-large">
    </Header>

    <section class="overview">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Tour Operator" />
        <TextParagraphWithTitle subtitleTag="h3">
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
              class="link underline-out external-link"
              href="https://whynotadventures.co.uk"
              aria-label="Why Not Adventures Website"
              target="_blank"
              >View Website</a
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
          imageUrl="/images/why-not-adventures/header.webp"
          altText="TODO Replace"
          class="portfolio-header"
          rellaxPercentage="0"
          rellaxSpeed="0" />
      </LayoutGridContainer>
    </section>

    <LayoutPortfolioLargeImages
      :images="[
        {
          url: '/images/why-not-adventures/trip-long-screenshot.webp',
          alt: 'Background Image',
          customClass: 'why-not-destination',
        },
        {
          url: '/images/why-not-adventures/gallery.webp',
          alt: 'Overlay Image 1',
          customClass: 'why-not-gallery',
        },
        {
          url: '/images/why-not-adventures/itinerary-2.webp',
          alt: 'Overlay Image 2',
          customClass: 'why-not-itinerary',
        },
      ]"
      title="Visually Appealing, Fully Responsive">
      <template #body>
        <p>
          The site maintains a clean and modern design throughout, ensuring a
          consistent and engaging user experience. The site is thoughtfully
          designed with attention to detail, combining visually appealing
          elements with intuitive navigation. High-quality images,
          well-structured content, and responsive layouts work together to
          create an inviting and seamless experience for users. This approach
          not only enhances the site's aesthetic appeal but also its
          functionality and usability, reflecting a commitment to delivering
          top-notch web design.
        </p>
      </template>
    </LayoutPortfolioLargeImages>

    <LayoutPortfolioSection
      sectionID="branding"
      imageUrl="/images/why-not-adventures/logo-rectangle.svg"
      imageAlt="Why Not Adventures Logo"
      :imageCustomClass="['portfolio-logo']"
      textPosition="left"
      title="A Fresh, Modern Appearance">
      <template #body>
        <p>
          I crafted a cohesive brand identity that reflects the essence of
          exploration and adventure. This includes a clean and modern logo
          featuring a simple yet striking mountain icon, symbolising the spirit
          of adventure and the great outdoors. The logo is complemented by a
          sleek, contemporary font used for the company name, ensuring a
          versatile and easily recognisable design. Alongside the logo, the
          brand's colour palette and typography were carefully selected to
          create a consistent and engaging visual experience, perfectly aligning
          with the brand's identity and vision.
        </p>
      </template>
    </LayoutPortfolioSection>

    <LayoutPortfolioSection
      sectionID="itinerary"
      imageUrl="/images/why-not-adventures/image-1.webp"
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
    </LayoutPortfolioSection>

    <LayoutPortfolioImageLayover
      :images="[
        {
          url: '/images/why-not-adventures/background-image.webp',
          alt: 'Background Image',
          customClass: 'custom-background-class',
        },
        {
          url: '/images/why-not-adventures/why-choose.webp',
          alt: 'Overlay Image 1',
          customClass: 'portfolio-about',
        },
        {
          url: '/images/why-not-adventures/faq.webp',
          alt: 'Overlay Image 2',
          customClass: 'portfolio-faq',
        },
      ]" />

    <LayoutPortfolioSection
      sectionID="services"
      imageUrl="/images/why-not-adventures/who-am-i.webp"
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
    </LayoutPortfolioSection>

    <LayoutPortfolioSection
      sectionID="psi"
      imageUrl="/images/why-not-adventures/psi-score.webp"
      imageAlt="TODO REPLACE TEXT"
      :imageCustomClass="['portfolio-psi']"
      textPosition="right"
      title="High Performance, Available to Everyone">
      <template #body>
        <p>
          I focused on optimising the website to achieve a perfect 100 score
          across all categories on Google PageSpeed Insights. This was
          accomplished through meticulous attention to performance,
          accessibility, best practices, and SEO. I implemented efficient coding
          practices, optimized images, leveraged browser caching, and ensured a
          responsive design. By prioritising these elements, I not only enhanced
          the site's loading speed and user experience but also improved its
          visibility and ranking in search engines, demonstrating my commitment
          to delivering high-quality, performant websites.
        </p>
        <!--<a
          class="link underline-out-icon"
          href="https://pagespeed.web.dev/analysis/https-whynotadventures-co-uk/5tj85c4iyr?hl=en-GB&form_factor=desktop"
          aria-label="PSI Report"
          target="_blank"
          ><LucideExternalLink />View Full Report</a
        >-->
      </template>
    </LayoutPortfolioSection>

    <LayoutPortfolioMobile
      :images="[
        {
          url: '/images/why-not-adventures/header-mobile.webp',
          alt: 'Background Image',
          customClass: 'portfolio-header',
        },
        {
          url: '/images/why-not-adventures/destinations-mobile.webp',
          alt: 'Overlay Image 1',
          customClass: 'why-not-destinations',
        },
        {
          url: '/images/why-not-adventures/itinerary-mobile.webp',
          alt: 'Overlay Image 2',
          customClass: 'why-not-itinerary',
        },
      ]"
      title="Fully Responsive, Across All Devices">
      <template #body>
        <p>
          The site is fully mobile responsive, ensuring a seamless experience
          across all devices. By employing a responsive design approach, the
          site automatically adjusts its layout and elements to fit any screen
          size, from desktops to smartphones. This guarantees that users can
          easily navigate and interact with the site, no matter what device they
          are using. The mobile-responsive design enhances accessibility and
          usability, providing a consistent and enjoyable experience for all
          visitors.
        </p>
      </template>
    </LayoutPortfolioMobile>

    <section>
      <LayoutGridContainer>
        <ImageDefault
          imageUrl="/images/why-not-adventures/contact-long-screenshot.webp"
          altText="TODO Replace"
          class="portfolio-contact" />
      </LayoutGridContainer>
    </section>

    <section class="end">
      <LayoutGridContainer>
        <TextCard
          name="Tia Thomas"
          position="Founder"
          quote="Working with Ben on this project was an absolute pleasure. The attention to detail and dedication to maintaining a clean, modern design truly brought the vision to life. The result is a stunning, user-friendly website that perfectly captures the spirit of adventure and exploration. Ben's expertise and creativity are evident in every aspect of the site, and I couldn't be happier with the outcome. I highly recommend Ben for anyone looking to create a high-quality, engaging website."
          imgSrc="/images/why-not-adventures/tia.webp" />
        <NuxtLink
          class="underline-out"
          to="/portfolio"
          aria-label="Portfolio Page"
          >View Next Project</NuxtLink
        >
      </LayoutGridContainer>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Ben Ward | Why Not Adventures",
  meta: [
    {
      name: "description",
      content:
        "Explore one of my recent projects, showcasing a dynamic and user-friendly travel website built to inspire and engage travellers.",
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

.portfolio .portfolio-header,
.portfolio-contact {
  grid-column: 1 / 17;
}

.portfolio .card,
.end a {
  grid-column: 3 / 9;
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
}
</style>

<style>
@media (max-width: 767px) {
  .why-not-adventures h1 {
    font-size: 16vw;
  }
}
</style>
