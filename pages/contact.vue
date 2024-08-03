<template>
  <div class="contact">
    <Header
      backgroundColor="var(--background-primary)"
      title="Contact"
      subtitle="Get in Touch."
      headerClass="header-large">
      <template #description>
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
      </template>
    </Header>

    <section id="contact-form">
      <FormsContactForm />
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Ben Ward | Contact",
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
      href: "https://benward.io/contact",
    },
  ],
});
</script>

<style>
.contact header .paragraph.medium {
  grid-column: 15 / 16;
  grid-row: 1;
  margin-top: auto;
}

.contact-form {
  grid-column: 3 / 15;
}

#contact-form .paragraph-with-title {
  grid-column: 3 / 11;
  grid-row: 1;
}

#contact-form .item-inner {
  margin: 0;
}

@media (max-width: 767px) {
  #contact-form .item.paragraph-with-title {
    grid-column: 1 / 7;
    grid-row: auto;
  }

  .contact header .paragraph.medium {
    grid-column: 1 / 4;
    grid-row: 2;
    margin-top: 45vw;
  }
}
</style>
