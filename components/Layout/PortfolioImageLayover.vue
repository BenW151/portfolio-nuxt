<template>
  <section class="image-layover">
    <LayoutGridContainer>
      <div
        class="background-image rellax"
        v-rellax
        data-rellax-speed="1"
        data-rellax-percentage="-0.5"
        :class="images[0].customClass"
        :style="{ backgroundImage: `url(${images[0].url})` }" />
      <ImageDefault
        :imageUrl="images[1].url"
        :imageAlt="images[1].alt"
        :customClass="['image-1', images[1].customClass]" />
      <ImageDefault
        :imageUrl="images[2].url"
        :imageAlt="images[2].alt"
        :customClass="['image-2', images[2].customClass]" />
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
  },
};
</script>

<style scoped>
.image-layover {
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 140%;
  background-size: cover;
  background-repeat: no-repeat;
  /*  grid-column: 1 / 17;
  grid-row: 1 / 3;
  margin-left: calc(-1 * var(--spacing-5));
  margin-right: calc(-1 * var(--spacing-5));
  height: 150%;*/
}

.image-1 {
  grid-column: 2 / 16;
  grid-row: 1;
  margin-top: var(--spacing-5);
  margin-bottom: var(--spacing-5);
}

.image-2 {
  grid-column: 2 / 16;
  grid-row: 2;
  margin-top: var(--spacing-5);
  margin-bottom: var(--spacing-5);
}

@media (max-width: 767px) {
  .background-image {
    height: 140%;
  }

  .image-1,
  .image-2 {
    grid-column: 1 / 7;
  }
}
</style>
