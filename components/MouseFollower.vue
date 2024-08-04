<template>
  <div :class="circleClasses" :style="circleStyle">
    <span class="circle-text" :class="{ 'is-visible': textVisible }">
      <component
        :is="hoveredIconComponent || 'span'"
        v-if="hoveredIconComponent" />
      <template v-else>{{ hoveredText }}</template>
    </span>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import {
  LucideRouter,
  LucideCodeXml,
  LucideSend,
  LucideExternalLink,
  LucideMail,
  LucideGlobe,
  LucideAtSign,
  LucideCompass,
  LucideThumbsUp,
  LucideSun,
  LucideMoon,
  LucideLaptop,
  LucideWrench,
  LucideTreePalm,
} from "lucide-vue-next";

// Icons for cycling
const iconsList = [
  LucideSend,
  LucideMail,
  LucideGlobe,
  LucideMoon,
  LucideAtSign,
  LucideCompass,
  LucideThumbsUp,
  LucideSun,
];
const currentIconIndex = ref(0);
let iconInterval = null;

const targetX = ref(0);
const targetY = ref(0);
const currentX = ref(0);
const currentY = ref(0);
const hoveredText = ref("");
const hoverClass = ref("");
const textVisible = ref(false);
const hoveredIconComponent = ref(null);

const updatePosition = (event) => {
  targetX.value = event.clientX;
  targetY.value = event.clientY;
  let element = document.elementFromPoint(targetX.value, targetY.value);

  let found = false;

  while (element) {
    const tagName = element.tagName.toLowerCase();
    const classList = Array.from(element.classList);

    if (classList.includes("wordmark")) {
      // Set hover class to wordmark
      hoveredText.value = ""; // Clear text
      hoverClass.value = "icon-cycle";
      found = true;
      break;
    } else if (classList.includes("index-title")) {
      // Set hover class to wordmark
      hoveredText.value = ""; // Clear text
      hoverClass.value = "icon-cycle";
      found = true;
      break;
    } else if (classList.includes("active")) {
      hoveredIconComponent.value = null; // Reset icon
      hoverClass.value = "link";
      found = true;
      break;
    } else if (classList.includes("accordion-item")) {
      hoveredText.value = "Read More";
      hoveredIconComponent.value = null; // Reset icon
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("swiper-button-next")) {
      hoveredText.value = "Next";
      hoveredIconComponent.value = null; // Reset icon
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("swiper-button-prev")) {
      hoveredText.value = "Previous";
      hoveredIconComponent.value = null; // Reset icon
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("mouse-follow-show")) {
      hoveredText.value = "View";
      hoveredIconComponent.value = null; // Reset icon
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("get-in-touch")) {
      hoveredText.value = "Contact";
      hoveredIconComponent.value = null; // Reset icon
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("portfolio-header")) {
      hoveredText.value = "Header";
      hoveredIconComponent.value = null; // Reset icon
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("portfolio-logo")) {
      hoveredText.value = "Logo";
      hoveredIconComponent.value = null; // Reset icon
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("portfolio-team")) {
      hoveredText.value = "Team";
      hoveredIconComponent.value = null; // Reset icon
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("portfolio-faq")) {
      hoveredText.value = "FAQ";
      hoveredIconComponent.value = null; // Reset icon
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("portfolio-psi")) {
      hoveredText.value = "PSI Score";
      hoveredIconComponent.value = null; // Reset icon
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("portfolio-services")) {
      hoveredText.value = "Services";
      hoveredIconComponent.value = null; // Reset icon
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("portfolio-about")) {
      hoveredText.value = "About";
      hoveredIconComponent.value = null; // Reset icon
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("portfolio-contact")) {
      hoveredText.value = "Contact";
      hoveredIconComponent.value = null; // Reset icon
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("why-not-owner")) {
      hoveredText.value = "Founder";
      hoveredIconComponent.value = null; // Reset icon
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("why-not-destinations")) {
      hoveredText.value = "Destinations";
      hoveredIconComponent.value = null; // Reset icon
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("why-not-itinerary")) {
      hoveredText.value = "Itinerary";
      hoveredIconComponent.value = null; // Reset icon
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("why-not-gallery")) {
      hoveredText.value = "Gallery";
      hoveredIconComponent.value = null; // Reset icon
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("why-not-destination")) {
      hoveredText.value = "Destination";
      hoveredIconComponent.value = null; // Reset icon
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("external-link")) {
      hoveredIconComponent.value = LucideExternalLink;
      hoveredText.value = ""; // Clear text
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("time")) {
      hoveredIconComponent.value = LucideTreePalm;
      hoveredText.value = ""; // Clear text
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("send")) {
      hoveredIconComponent.value = LucideSend;
      hoveredText.value = ""; // Clear text
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("email")) {
      hoveredIconComponent.value = LucideMail;
      hoveredText.value = ""; // Clear text
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("network")) {
      hoveredIconComponent.value = LucideRouter;
      hoveredText.value = ""; // Clear text
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("laptop")) {
      hoveredIconComponent.value = LucideLaptop;
      hoveredText.value = ""; // Clear text
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("wrench")) {
      hoveredIconComponent.value = LucideWrench;
      hoveredText.value = ""; // Clear text
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("code")) {
      hoveredIconComponent.value = LucideCodeXml;
      hoveredText.value = ""; // Clear text
      hoverClass.value = "show";
      found = true;
      break;
    } else if (classList.includes("link")) {
      hoverClass.value = "link";
      found = true;
      break;
    } else if (classList.includes("link-list")) {
      hoverClass.value = "link";
      found = true;
      break;
    } else {
      switch (tagName) {
        case "header":
          hoveredText.value = "Scroll";
          hoveredIconComponent.value = null; // Reset icon
          hoverClass.value = "show";
          found = true;
          break;
        default:
          hoveredText.value =
            element
              .closest("[data-hover-text]")
              ?.getAttribute("data-hover-text") || hoveredText.value;
          hoverClass.value = "";
          break;
      }
    }

    if (found) {
      break;
    }

    element = element.parentElement;
  }

  textVisible.value = found;
};

const startIconCycling = () => {
  if (!iconInterval) {
    hoveredIconComponent.value = iconsList[currentIconIndex.value];
    iconInterval = setInterval(() => {
      currentIconIndex.value = (currentIconIndex.value + 1) % iconsList.length;
      hoveredIconComponent.value = iconsList[currentIconIndex.value];
    }, 200);
  }
};

const stopIconCycling = () => {
  if (iconInterval) {
    clearInterval(iconInterval);
    iconInterval = null;
  }
};

const smoothMovement = () => {
  currentX.value += (targetX.value - currentX.value) * 0.1;
  currentY.value += (targetY.value - currentY.value) * 0.1;
  requestAnimationFrame(smoothMovement);
};

onMounted(() => {
  window.addEventListener("mousemove", updatePosition);
  requestAnimationFrame(smoothMovement);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", updatePosition);
  stopIconCycling(); // Clean up when component is destroyed
});

// Watch the hoverClass and manage icon cycling based on its value
watch(hoverClass, (newClass) => {
  if (newClass === "icon-cycle") {
    startIconCycling();
  } else {
    stopIconCycling();
  }
});

const circleStyle = computed(() => ({
  left: `${currentX.value}px`,
  top: `${currentY.value}px`,
}));

const circleClasses = computed(() => {
  return ["circle", hoverClass.value];
});
</script>

<style scoped>
.circle {
  position: fixed;
  width: 6vw;
  height: 6vw;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* For Safari */
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: none;
  transition: opacity 0.5s ease 0.1s;
  opacity: 0;
}

.circle-text {
  color: var(--font-foreground-primary);
  font-size: var(--font-size-XXS);
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.lucide {
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.circle-text.is-visible,
.is-visible .lucide {
  opacity: 1;
  transition: opacity 0.5s ease;
}

.show,
.icon-cycle {
  opacity: 1;
}
</style>
