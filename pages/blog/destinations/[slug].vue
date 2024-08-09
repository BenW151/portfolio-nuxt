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

// Fetch the destination-specific data
const { data: destinationData } = await useAsyncData(
  `destinationData-${country}`,
  async () => {
    const content = await queryContent("blog/destinations")
      .where({ country: country }) // Ensure you're filtering by 'country'
      .findOne();
    
    return content;
  }
);

const contentLoaded = !!destinationData.value; // Determine if data has been loaded

</script>

<style>
.blog .paragraph.medium {
  display: none;
}
</style>
