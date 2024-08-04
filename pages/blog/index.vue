<template>
  <div>
    <Header
      imageUrl="/images/index-background.webp"
      imageAlt="Laptop with code on desk"
      title="Blog Pages"
      subtitle="Read My Blog."
      headerClass="header-large">
    </Header>

    <div class="container">
      <ul v-if="posts && posts.length">
        <li v-for="post in posts" :key="post._path">
          <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
        </li>
      </ul>
      <p v-else>No posts found or failed to load posts.</p>
    </div>
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
