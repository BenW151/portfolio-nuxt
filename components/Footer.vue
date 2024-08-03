<template>
  <footer ref="footer">
    <LayoutGridContainer class="footer">
      <div class="work-with-me">
        <h5>Work With Me</h5>
        <p>
          For new business inquiries and cooperations <br />
          please reach out to
          <a
            href="mailto:contact@benward.io"
            aria-label="email address"
            class="underline-out email"
            >contact@benward.io</a
          >.
        </p>
      </div>
      <ListsLinkList
        class="nav-links"
        :links="[
          {
            url: '/',
            label: 'About',
            description: 'About Page',
          },
          {
            url: '/portfolio',
            label: 'Portfolio',
            description: 'Portfolio Page',
          },
          {
            url: '/contact',
            label: 'Contact',
            description: 'Contact Page',
          },
          {
            url: '/terms-and-conditions',
            label: 'Terms + Conditions',
            description: 'Terms + Conditions Page',
          },
          {
            url: '/privacy-policy',
            label: 'Privacy Policy',
            description: 'Privacy Policy',
          },
        ]" />
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
      <p class="wordmark">benward.io</p>
      <p class="item copyright">Copyright ©2024</p>
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
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}

footer .container {
  color: var(--foreground-primary);
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

.copyright {
  grid-column: 15 / 17;
  grid-row: 2;
  margin-top: auto;
}

.work-with-me {
  grid-column: 1 / 6;
  grid-row: 1;
  margin-bottom: auto;
}

.nav-links {
  grid-column: 11 / 13;
  grid-row: 1;
  margin-bottom: auto;
}

.socials {
  grid-column: 15 / 17;
  grid-row: 1;
  margin-bottom: auto;
}

.wordmark {
  grid-column: 1 / 11;
  grid-row: 2;
  transform: translateX(-0.5vw);
  font-size: var(--font-size-XXL);
  font-family: var(--font-family-primary);
  margin-bottom: 0;
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

  .work-with-me {
    grid-column: 1 / 7;
    grid-row: 1;
  }

  .nav-links {
    grid-column: 1 / 3;
    grid-row: 2;
  }

  .socials {
    grid-column: 4 / 7;
    grid-row: 2;
  }

  .copyright {
    grid-column: 1 / 7;
    grid-row: 4;
  }

  .wordmark {
    grid-column: 1 / 7;
    grid-row: 3;
    font-size: 17vw;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
}
</style>

<!--<template>
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
  background-color: var(--foreground-primary);
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
</style>-->
