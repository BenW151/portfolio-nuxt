<template>
  <div class="accordion-item" @click="handleClick" :class="{ active: isActive }">
    <p class="accordion-title">
      {{ title }}
      <LucideArrowUpRight />
    </p>
    <div class="accordion-content" :class="{ visible: isActive }">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, computed } from "vue";

const props = defineProps({
  title: String,
  index: String,
});

const setActiveIndex = inject("setActiveIndex");
const activeIndex = inject("activeIndex");

const isActive = computed(() => props.index === activeIndex.value);

function handleClick() {
  setActiveIndex(isActive.value ? null : props.index);
}
</script>

<style scoped>
.accordion-item {
  border-bottom: 1px solid var(--accent-primary);
  cursor: pointer;
}

.accordion-title {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-S);
  display: flex;
  align-items: center;
  margin-top: var(--spacing-3);
  margin-bottom: var(--spacing-3);
}

.accordion-title svg {
  height: var(--font-size-XS);
  margin-right: var(--spacing-2);
  margin-left: auto;
}

.accordion-item::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: var(--foreground-primary);
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);
}

.accordion-item:hover::before {
  height: 1px;
  transform: scaleX(1);
  transform-origin: bottom left;
  transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);
}

.accordion .accordion-content {
  width: 65%;
  margin-bottom: 0;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.77, 0, 0.175, 1);
}

.accordion-item.active::before {
  transform: scaleX(1);
  height: 1px;
}

.accordion-item.active svg {
  transform: rotate(180deg);
}

.accordion-item.active .accordion-content {
  max-height: 200px;
  opacity: 1;
  transition: all 0.4s cubic-bezier(0.77, 0, 0.175, 1);
}

@media (max-width: 767px) {
  .accordion .accordion-content {
    width: 100%;
  }
}
</style>
