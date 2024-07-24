<template>
  <section :class="['itinerary-day', textPosition]" :id="sectionID">
    <LayoutGridContainer>
      <TextSectionLabel
        v-if="sectionID === 'day1'"
        labelText="The Plan"
        id="itinerary-detailed" />
      <ImageDefault
        :imageUrl="imageUrl"
        :imageAlt="imageAlt"
        :textPosition="imageTextPosition"
        :customClass="imageCustomClass" />
      <TextParagraphWithTitle
        :subtitleTag="subtitleTag"
        :textPosition="textPosition">
        <template #title>{{ title }}</template>
        <template #body>
          <slot name="body"></slot>
        </template>
      </TextParagraphWithTitle>
    </LayoutGridContainer>
  </section>
</template>

<script>
import ImageDefault from "../Image/ImageDefault.vue";

export default {
  name: "ItineraryDay",
  props: {
    sectionID: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
    overlayText: {
      type: String,
      required: true,
    },
    textPosition: {
      type: String,
      default: "left",
      validator: (value) => ["left", "right"].includes(value),
    },
    subtitleTag: {
      type: String,
      default: "h4",
    },
    title: {
      type: String,
      required: true,
    },
    imageCustomClass: {
      type: [String, Array],
      default: "",
    },
  },
  computed: {
    imageTextPosition() {
      return this.textPosition === "left" ? "right" : "left";
    },
  },
};
</script>

<style scoped>
.heading {
  grid-column: 3 / 10;
  grid-row-start: 1;
}

#day1 .paragraph-with-title,
#day1 .image {
  grid-row-start: 2;
}

.left .paragraph-with-title {
  grid-column: 2 / 8;
  grid-row-start: 1;
}

.left .image {
  grid-column: 10 / 16;
}

.left .image.overflow {
  grid-column: 10 / 17;
  margin-right: -400px;
}

.right .paragraph-with-title {
  grid-column: 10 / 16;
  grid-row-start: 1;
}

.right .image {
  grid-column: 2 / 8;
}

.right .image.overflow {
  grid-column-end: 8;
  margin-left: -500px;
}

@media (max-width: 767px) {
 /* 
  .right .image,
  .left .image {
    max-height: 60vw;
  }
*/
  .heading,
  .right .paragraph-with-title,
  .right .image,
  .right .image.overflow,
  .left .paragraph-with-title,
  .left .image,
  .left .image.overflow {
    grid-column: 1 / 7;
    grid-row-start: auto;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
