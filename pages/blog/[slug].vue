<template>
  <div class="blog">
    <!-- Header Placeholder -->
    <Header
      v-if="!contentLoaded"
      backgroundColor="var(--background-primary)"
      title=""
      subtitle=""
      headerClass="header-large" />
    <ContentDoc v-slot="{ doc }">
      <article>
        <!-- Actual Header -->
        <Header
          v-if="contentLoaded"
          :imageUrl="doc.imageUrl"
          :imageAlt="doc.imageAlt"
          :title="doc.title"
          :subtitle="doc.subtitle"
          headerClass="header-large" />

        <section class="what-to-do">
          <LayoutGridContainer>
            <div class="blog-text">
              <h3>{{ doc.sectionTitle }}</h3>
              <div v-html="doc.sectionText"></div>
            </div>
          </LayoutGridContainer>
        </section>
      </article>
    </ContentDoc>
  </div>
</template>

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
    this.contentLoaded = true; // Mark content as loaded when component is mounted
  },
};
</script>

<style scoped>
.blog-text {
  grid-column: 5 / 13;
}

@media (max-width: 767px) {
  .blog-text {
    grid-column: 1 / 7;
  }
}
</style>
