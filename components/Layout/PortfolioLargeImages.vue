<template>
  <section class="large-images">
    <LayoutGridContainer>
      <ImageDefault
        :imageUrl="images[0].url"
        :imageAlt="images[0].alt"
        :customClass="['image-1', images[0].customClass]" />
      <TextParagraphWithTitle
        :subtitleTag="subtitleTag"
        :textPosition="textPosition">
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
  grid-column-end: 8;
  grid-row: 1 / 4;
  margin-left: -500px;
}

.paragraph-with-title {
  grid-column: 9 / 16;
  grid-row: 1;
}

.image-2 {
  grid-column: 9 / 17;
  grid-row: 2;
  margin-right: -500px;
}

.image-3 {
  grid-column: 9 / 17;
  grid-row: 3;
  margin-right: -500px;
}

@media (max-width: 767px) {

  .image-1 {
    grid-column: 1 / 7;
    grid-row: 2;
    margin-left: 0;
  }

  .paragraph-with-title {
    grid-column: 1 / 7;
    grid-row: 1;
  }

  .image-2 {
    grid-column: 1 / 7;
    grid-row: auto;
    margin-right: 0;
  }

  .image-3 {
    grid-column: 1 / 7;
    grid-row: auto;
    margin-right: 0;
  }
}
</style>
