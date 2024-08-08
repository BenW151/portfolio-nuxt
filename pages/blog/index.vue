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
          <img
            :src="post.headerImageUrl"
            :alt="post.headerImageUrl"
            class="post-image" />
          <!-- Display the title -->
          <NuxtLink :to="post._path" class="post-title">{{
            post.title
          }}</NuxtLink>
          <p>{{ post.description }}</p>
        </NuxtLink>
      </div>
      <!-- <p v-else>No posts found or failed to load posts.</p>-->
    </LayoutGridContainer>

    <BlogCountryPosts country="france" />

  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData("posts", async () => {
  try {
    const content = await queryContent("blog").find();

    // Sort posts by date extracted from file names, newest first
    const sortedContent = content.sort((a, b) => {
      const dateA = new Date(
        a._path.split("/").pop().split("-").slice(0, 3).join("-")
      );
      const dateB = new Date(
        b._path.split("/").pop().split("-").slice(0, 3).join("-")
      );
      return dateB - dateA;
    });

    return sortedContent;
  } catch (err) {
    console.error("Error fetching posts:", err);
    return [];
  }
});
</script>

<style scoped>
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
  height: 30vw;
  object-fit: cover;
}

.blog-item:nth-child(2n + 1) {
  grid-column: 1 / 9;
  grid-row: auto;
}

.blog-item:nth-child(2n) {
  grid-column: 9 / 17;
  grid-row: auto;
}

@media (max-width: 767px) {
  .post-image {
    height: 60vw;
  }

  .post-title {
    margin-bottom: 0;
  }

  .blog-item:nth-child(2n + 1) {
    grid-column: 1 / 7;
  }

  .blog-item:nth-child(2n) {
    grid-column: 1 / 7;
  }
}
</style>

<style>
.blog-pages .paragraph.medium {
  display: none;
}
</style>
