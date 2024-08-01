<template>
  <section class="mobile-images">
    <LayoutGridContainer>
      <ImageDefault
        :imageUrl="images[0].url"
        :imageAlt="images[0].alt"
        :customClass="['image-1', images[0].customClass]" />
      <TextParagraphWithTitle :subtitleTag="subtitleTag">
        <template #title>{{ title }}</template>
        <template #body>
          <slot name="body"></slot>
        </template>
      </TextParagraphWithTitle>
      <ImageDefault
        :imageUrl="images[1].url"
        :imageAlt="images[1].alt"
        :customClass="['image-2', images[1].customClass]" />
      <ImageDefault
        :imageUrl="images[2].url"
        :imageAlt="images[2].alt"
        :customClass="['image-3', images[2].customClass]" />
    </LayoutGridContainer>
  </section>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
    subtitleTag: {
      type: String,
      default: "h4",
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.image-1 {
  grid-column: 4 / 9;
  grid-row: 1 / 3;
}

.paragraph-with-title {
  grid-column: 11 / 17;
  grid-row: 4;
}

.image-2 {
  grid-column: 11 / 16;
  grid-row: 2 / 4;
  height: fit-content;
}

.image-3 {
  grid-column: 3 / 8;
  grid-row: 3 / 5;
  margin-top: 15vw;
}

.image {
  border-radius: 2vw;
  border: 2px solid var(--color-white);
}

@media (max-width: 767px) {

  .image-1 {
    grid-column: 1 / 4;
  }

  .image-2 {
    grid-column: 4 / 7;
  }

  .image-3 {
    grid-column: 1 / 4;
    margin-bottom: var(--spacing-5);
    margin-top: var(--spacing-5);
  }

  .paragraph-with-title {
    grid-column: 1 / 7;
    grid-row: auto;
    margin: 0;
  }
}
</style>
