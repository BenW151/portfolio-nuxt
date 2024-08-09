<template>
  <div class="blog-pages">
    <Header
      v-if="!contentLoaded"
      backgroundColor="var(--background-primary)"
      title=""
      subtitle=""
      headerClass="header-large" />
    <Header
      v-if="contentLoaded"
      imageUrl="/images/index-background.webp"
      imageAlt="Laptop with code on desk"
      title="Recent Posts"
      subtitle="Read My Blog."
      buttonText="Destinations"
      buttonUrl="/blog/destinations"
      buttonDescription="Destinations"
      headerClass="header-large">
      <template #description>
        <p>View some of my blog posts</p>
      </template>
    </Header>

    <BlogRecentPosts />
  </div>
</template>

<script setup>
useHead({
  title: "Ben Ward | Blog",
  meta: [
    {
      name: "description",
      content:
        "Providing professional web development services focused on creating modern, responsive, and user-friendly websites tailored to your needs.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://benward.io/",
    },
  ],
});
</script>

<script>
export default {
  data() {
    return {
      contentLoaded: false, // State to track content loading
    };
  },
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("blog", params.slug).fetch();
    } catch (e) {
      error({ message: "Blog Post not found", statusCode: 404 });
    }
    return { post };
  },
  mounted() {
    this.contentLoaded = true;
  },
};
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
