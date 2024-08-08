<template>
  <div class="blog">
    <!-- Header Placeholder -->
    <Header
      v-if="!contentLoaded"
      backgroundColor="var(--background-primary)"
      title=""
      subtitle=""
      headerClass="header-large" />
      
    <article v-if="contentLoaded">
      <!-- Actual Header -->
      <Header
        :imageUrl="destinationData.headerImageUrl"
        :imageAlt="destinationData.headerImageAlt"
        :title="destinationData.title"
        :subtitle="destinationData.subtitle"
        headerClass="header-large" />

      <!-- Pass the correct country prop to BlogCountryPosts -->
      <BlogCountryPosts :country="country" />
    </article>
  </div>
</template>

<script setup>
import { useRoute } from "nuxt/app";

const route = useRoute();
const country = route.params.slug; // Use 'slug' instead of 'country'

// Add console logs to debug
console.log("Route Params:", route.params);
console.log("Country from Route:", country);

// Fetch the destination-specific data
const { data: destinationData } = await useAsyncData(
  `destinationData-${country}`,
  async () => {
    const content = await queryContent("blog/destinations")
      .where({ country: country }) // Ensure you're filtering by 'country'
      .findOne();
    
    console.log("Fetched Destination Data:", content); // Log fetched data
    return content;
  }
);

const contentLoaded = !!destinationData.value; // Determine if data has been loaded

// Additional log to confirm everything is set up correctly
console.log("Content Loaded:", contentLoaded);
console.log("Country Prop:", country);
</script>

<style scoped></style>
