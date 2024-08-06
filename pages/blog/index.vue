<template>
  <div class="blog-pages">
    <Header
      imageUrl="/images/index-background.webp"
      imageAlt="Laptop with code on desk"
      title="Blog Pages"
      subtitle="Read My Blog."
      headerClass="header-large">
    </Header>

    <LayoutGridContainer v-if="posts && posts.length">
      <div v-for="post in posts" :key="post._path" class="blog-item">
        <NuxtLink :to="post._path" class="post-link">
          <!-- Display the image -->
          <img :src="post.imageUrl" :alt="post.imageAlt" class="post-image" />
          <!-- Display the title -->
          <NuxtLink :to="post._path" class="post-title">{{ post.title }}</NuxtLink>
          <p>{{ post.description }}</p>
        </NuxtLink>
      </div>
      <!-- <p v-else>No posts found or failed to load posts.</p>-->
    </LayoutGridContainer>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData("posts", async () => {
  try {
    const content = await queryContent("blog").find();
    // console.log("Fetched posts:", content);
    return content;
  } catch (err) {
    // console.error("Error fetching posts:", err);
    return [];
  }
});
</script>

<style>
.blog-pages .paragraph.medium {
  display: none;
}

.post-title {
  font-size: var(--font-size-M);
  font-family: var(--font-family-primary);
  margin-right: auto;
}

.post-link::after {
  display: none;
}

.post-image {
  width: 100%;
  height: 100%;
}

.blog-item:nth-child(2n+1) {
  grid-column: 1 / 9;
  grid-row: auto;
}

.blog-item:nth-child(2n) {
  grid-column: 9 / 16;
  grid-row: auto;
}

</style>
