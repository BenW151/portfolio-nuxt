<template>
  <div class="item paragraph-with-title">
    <component :is="subtitleTag" class="subtitle">
      <template v-if="useTextReveal">
        <TextReveal>
          <slot name="title">Default Title</slot>
        </TextReveal>
      </template>
      <template v-else>
        <slot name="title">Default Title</slot>
      </template>
    </component>

    <slot name="body">
      <p class="body">Default paragraph content.</p>
    </slot>
  </div>
</template>

<script setup>
const props = defineProps({
  subtitleTag: {
    type: String,
    default: "h3",
  },
  useTextReveal: {
    type: Boolean,
    default: true, // Use TextReveal by default
  },
});
</script>

<style scoped>
.paragraph-with-title {
  grid-column: span 7;
  background-color: var(--background-primary);
  margin: auto;
  z-index: 5;
}

@media (max-width: 767px) {
  .paragraph-with-title {
    grid-column: span 6;
  }
}
</style>
