<template>
  <div
    class="item image image-text-overlay rellax"
    v-rellax
    :data-rellax-percentage="rellaxPercentage"
    :data-rellax-speed="rellaxSpeed">
    <div :class="['text-wrapper', textPosition]">
      <h4 v-html="overlayText"></h4>
    </div>
    <NuxtImg format="webp" :alt="altText" :src="imageUrl" />
  </div>
</template>

<script setup>
// Define the props the component accepts
const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    default: "Image",
  },
  overlayText: {
    type: String,
    default: "",
  },
  textPosition: {
    type: String,
    default: "left", // Default position of the text overlay
  },
  rellaxPercentage: {
    type: String,
    default: "0.6", // Default value for rellax effect
  },
  rellaxSpeed: {
    type: String,
    default: "2", // Default speed for rellax effect
  },
});
</script>

<style scoped>
.image-text-overlay {
  grid-column: span 6;
  overflow: hidden;
  top: 0;
  left: 0;
  margin: 0;
}

.image-text-overlay .text-wrapper,
.image-text-overlay .text-wrapper a.link {
  color: var(--foreground-primary);
}

.image-text-overlay .text-wrapper a.link::after {
  background-color: var(--foreground-primary);
}

.image-text-overlay img,
.image-text-overlay video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-text-overlay .text-wrapper {
  opacity: 0;
  position: absolute;
  width: 100%;
  z-index: 100;
  bottom: 0;
  left: 0;
  text-align: center;
}

.text-wrapper.right {
  text-align: right;
  padding-right: var(--spacing-3);
}

.text-wrapper.left {
  text-align: left;
  padding-left: var(--spacing-3);
}

.image-text-overlay:hover img,
.image-text-overlay:hover video {
  filter: brightness(0.8);
}

.image-text-overlay:hover .text-wrapper {
  opacity: 1;
}
</style>
