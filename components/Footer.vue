<template>
  <footer ref="footer">
    <LayoutGridContainer class="footer">
      <p class="item">Copyright ©2024</p>
      <NuxtLink
        class="item footer-contact"
        :class="{ active: $route.path === '/contact' }"
        to="/contact"
        aria-label="Contact Page"
        >Contact</NuxtLink
      >
      <NuxtLink
        class="item"
        :class="{ active: $route.path === '/privacy-policy' }"
        to="/privacy-policy"
        aria-label="Privacy Policy Page"
        >Privacy Policy</NuxtLink
      >
      <NuxtLink
        class="item"
        :class="{ active: $route.path === '/terms-and-conditions' }"
        to="/terms-and-conditions"
        aria-label="Terms and Conditions Page"
        >Terms + Conditions</NuxtLink
      >
      <!--<button
        class="item back-to-top"
        @click="scrollToTop"
        aria-label="Back to Top">
        <LucideArrowUp />
      </button>-->
    </LayoutGridContainer>
  </footer>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style scoped>
footer {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 4vw;
  z-index: 1000;
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}

footer .container {
  color: var(--color-white);
  padding-bottom: var(--spacing-3);
  padding-top: var(--spacing-3);
  white-space: nowrap;
}

.footer {
  width: 100%;
  padding-bottom: 5px;
  margin: 0;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}

.footer .item {
  font-size: var(--font-size-XXS);
  color: var(--color-white);
  pointer-events: all;
  margin-right: auto;
}

.footer .footer-contact {
  margin-right: auto;
}

.item.active::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.back-to-top::after {
  display: none;
}

.back-to-top:hover {
  transform: translateY(-4px);
  cursor: pointer;
}

.footer .item:nth-child(1) {
  grid-column: 1 / 3;
  grid-row: 1;
}

.footer .item:nth-child(2) {
  grid-column: 6 / 8;
  grid-row: 1;
}

.footer .item:nth-child(3) {
  grid-column: 11 / 13;
  grid-row: 1;
}

.footer .item:nth-child(4) {
  grid-column: 15 / 17;
  grid-row: 1;
}

@media (max-width: 767px) {
  footer {
    height: 6vh;
  }

  .footer {
    align-items: start;
    margin: 0;
  }

  .footer .item {
    font-size: var(--font-size-XS);
  }

  .footer .item:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1;
  }

  .footer .item:nth-child(2) {
    grid-column: 1 / 3;
    grid-row: 2;
  }

  .footer .item:nth-child(3) {
    grid-column: 5 / 7;
    grid-row: 1;
  }

  .footer .item:nth-child(4) {
    grid-column: 5 / 7;
    grid-row: 2;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
}
</style>
