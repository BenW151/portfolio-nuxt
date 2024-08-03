<template>
  <footer ref="footer">
    <LayoutGridContainer class="footer">
      <div class="work-with-me">
        <h5>Work With Me</h5>
        <p>
          For all business inquiries please <br v-if="!isMobile" />
          contact me at
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
      <TextReveal tag="p" class="wordmark">benward.io</TextReveal>
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

const { windowWidth, isMobile } = useWindowWidth();

</script>

<style scoped>
footer {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 4vw;
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}

footer::after {
  content: "";
  width: calc(100% - (2 * var(--spacing-5)));
  height: 1px;
  background-color: var(--accent-primary);
  border-radius: 2vw;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

footer .container {
  color: var(--foreground-primary);
  padding-bottom: var(--spacing-3);
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