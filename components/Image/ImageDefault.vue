<template>
  <div :class="['item image image-default', customClass]">
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
  customClass: {
    type: [String, Array],
    default: '',
  },
});
</script>


<style scoped>
.image-default {
  grid-column: span 6;
  overflow: hidden;
  top: 0;
  left: 0;
  margin: 0;
  height: fit-content
}

.image-default img,
.image-default video {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
