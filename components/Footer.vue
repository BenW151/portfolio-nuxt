<template>
  <footer ref="footer">
    <LayoutGridContainer class="footer-main">
      <div :class="{ 'nav-items': true, open: isMenuOpen }">
        <NuxtLink
          class="nav-item"
          to="/"
          :class="{ active: $route.path === '/' }"
          aria-label="Home Page"
          >About</NuxtLink
        >
        <NuxtLink
          class="nav-item"
          to="/portfolio"
          :class="{ active: $route.path === '/portfolio' }"
          aria-label="Portfolio Page"
          >Portfolio</NuxtLink
        >
        <NuxtLink
          class="nav-item"
          to="/contact"
          :class="{ active: $route.path === '/contact' }"
          aria-label="Contact Page"
          >Contact</NuxtLink
        >
      </div>
      <ListsLinkList
        class="socials"
        :links="[
          {
            url: 'https://www.instagram.com/benward.io/',
            label: 'Instagram',
            description: 'Instagram',
          },
          {
            url: 'https://linkedin.com/in/benw151',
            label: 'LinkedIn',
            description: 'LinkedIn',
          },
          {
            url: 'https://github.com/BenW151',
            label: 'GitHub',
            description: 'GitHub',
          },
        ]" />
    </LayoutGridContainer>

    <LayoutGridContainer class="footer-end">
      <p class="item copyright">Copyright ©2024</p>
      <NuxtLink
        class="item privacy-policy"
        :class="{ active: $route.path === '/privacy-policy' }"
        to="/privacy-policy"
        aria-label="Privacy Policy Page"
        >Privacy Policy</NuxtLink
      >
      <NuxtLink
        class="item terms"
        :class="{ active: $route.path === '/terms-and-conditions' }"
        to="/terms-and-conditions"
        aria-label="Terms and Conditions Page"
        >Terms + Conditions</NuxtLink
      >
      <button
        class="item back-to-top"
        @click="scrollToTop"
        aria-label="Back to Top">
        Back to Top
      </button>
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
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: auto;
  z-index: 1000;
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}

footer .container {
  padding-bottom: var(--spacing-3);
  padding-top: var(--spacing-3);
  white-space: nowrap;
}

footer .footer-main {
  padding-top: var(--spacing-5);
}

footer .footer-end {
  padding-bottom: var(--spacing-4);
}

footer .footer-main::before {
  content: "";
  width: calc(100% - (2 * var(--spacing-5)));
  height: 1px;
  background-color: var(--color-white);
  opacity: var(--opacity);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

footer .nav-items {
  grid-column: 1 / 4;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  margin-top: auto;
}

footer .nav-items .nav-item {
  font-size: var(--font-size-S);
  font-family: var(--font-family-primary);
}

footer .socials {
  grid-column: 6 / 10;
  grid-row-start: 1;
  margin-top: auto;
  margin-bottom: 0;
}

.footer-logo {
  grid-column: 11 /15;
  height: 5vw;
  margin: 0;
}

.footer-end .item {
  margin-right: auto;
}

.copyright {
  grid-column: 1 / 3;
  grid-row: 1;
}

.terms {
  grid-column: 6 / 8;
  grid-row: 1;
}

.privacy-policy {
  grid-column: 11 / 13;
  grid-row: 1;
}

.back-to-top {
  grid-column: 15 / 17;
  grid-row: 1;
}

.item.active::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.back-to-top:hover {
  cursor: pointer;
}

.nav-item.active::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

@media (max-width: 767px) {
  footer {
    justify-content: space-between;
  }

  footer .footer-main::before {
    width: calc(100% - (2 * var(--spacing-4)));
  }

  .footer {
    align-items: start;
    margin: 0;
    text-align: center;
  }

  .footer .item {
    font-size: var(--font-size-XS);
    margin: 0 var(--spacing-3);
  }

  footer .nav-items {
    grid-column: 1 / 4;
    grid-row: 1;
  }

  footer .socials {
    grid-column: 5 / 7;
    grid-row: 1;
  }

  .copyright {
    grid-column: 5 / 7;
    grid-row: 1;
  }

  .terms {
    grid-column: 1 / 3;
    grid-row: 1;
  }

  .privacy-policy {
    grid-column: 1 / 3;
    grid-row: 2;
  }

  .back-to-top {
    grid-column: 5 / 7;
    grid-row: 2;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
}
</style>
