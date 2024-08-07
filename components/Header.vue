<template>
  <header ref="headerRef" :class="headerClass" id="header">
    <div
      v-if="imageUrl"
      class="background-image rellax"
      v-rellax
      data-rellax-speed="3">
      <NuxtImg format="webp" :alt="imageAlt" :src="imageUrl" />
    </div>
    <div
      v-else
      v-rellax
      :style="{ backgroundColor: backgroundColor }"
      class="background-color rellax"></div>
    <LayoutGridContainer>
      <div class="hero-text item">
        <TextReveal :tag="'h1'" :class="titleClass">{{ title }}</TextReveal>
        <TextReveal tag="h2">{{ subtitle }}</TextReveal>
      </div>
      <TextParagraph paragraphSize="medium">
        <slot name="description"></slot>
        <template v-if="buttonUrl">
          <NuxtLink
            v-if="isInternalLink(buttonUrl)"
            :to="buttonUrl"
            :aria-label="buttonDescription"
            class="item link underline-out">
            {{ buttonText }}
          </NuxtLink>
          <a
            v-else
            :href="buttonUrl"
            :aria-label="buttonDescription"
            class="item link underline-out"
            target="_blank"
            rel="noopener noreferrer">
            {{ buttonText }}
          </a>
        </template>
      </TextParagraph>
    </LayoutGridContainer>
  </header>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const props = defineProps({
  imageUrl: String,
  imageAlt: String,
  title: String,
  subtitle: String,
  buttonText: String,
  buttonUrl: String,
  buttonDescription: String,
  headerClass: String,
  backgroundColor: String,
  pageIndexLabels: Array,
  titleClass: String, // New prop for custom class
});

const headerRef = ref(null);

const checkScroll = () => {
  if (!headerRef.value) return;
  const header = headerRef.value;
  if (window.scrollY > header.offsetHeight) {
    document.body.classList.add("scrolled-past-header");
  } else {
    document.body.classList.remove("scrolled-past-header");
  }
};

const isInternalLink = (url) => {
  return url.startsWith("/") || url.startsWith(window.location.origin);
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
  checkScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>

<style scoped>
.header-small {
  height: 100lvh;
}
.header-fixed {
  height: 105lvh;
}
.header-large {
  height: auto;
}

header,
header a,
header a .lucide {
  color: var(--foreground-primary);
}

header a.link::after {
  background-color: var(--foreground-primary);
}

.container {
  min-height: 100%;
}

.background-image {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 0;
}

.background-image img {
  height: 120lvh;
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  top: 0;
  bottom: 0;
  right: 0;
  filter: brightness(0.5);
}

.background-color {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 0;
}

.hero-text {
  grid-column: 1 / 17;
  grid-row-start: 1;
  height: 75vh;
}

.hero-text h1 {
  margin-top: auto;
  width: fit-content;
}

.hero-text h2 {
  font-size: var(--font-size-M);
}

.paragraph.medium {
  margin-top: 10vw;
}

header .container {
  background: none;
}

header .item:nth-child(2) {
  grid-column: 11 / 17;
  grid-row-start: 2;
}

.page-index {
  position: absolute;
  bottom: var(--spacing-4);
  right: var(--spacing-5);
  z-index: 100;
  margin: 0;
  display: flex;
  align-items: center;
  opacity: var(--opacity);
}

@media (max-width: 767px) {
  .header-small {
    height: 80lvh;
  }
  .header-fixed {
    height: 110lvh;
  }
  .header-large {
    height: auto;
    min-height: 100lvh;
  }

  .background-image img {
    height: 110lvh;
    object-position: 65% 50%;
  }

  .hero-text {
    grid-column: span 6;
    grid-row-start: 1;
    height: 60vh;
  }

  header .paragraph.medium {
    margin-top: 35vh;
  }

  header .item:nth-child(2) {
    grid-column: 1 / 7;
    grid-row-start: 2;
  }

  header .item:nth-child(3) {
    grid-column: 5 / 7;
    grid-row-start: 2;
    margin-top: auto;
  }

  .page-index {
    font-size: var(--font-size-XS);
    right: 0;
    width: 100%;
  }
}
</style>
