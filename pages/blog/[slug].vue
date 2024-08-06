<template>
  <div class="blog">
    <ContentDoc v-slot="{ doc }">
      <article>
        
        <Header
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
  async asyncData({ $content, params, error }) {
    console.log("asyncData is running"); // Check if asyncData is executed
    let post;
    try {
      post = await $content("blog", params.slug).fetch();
      console.log("Fetched post:", post); // Log the post object
    } catch (e) {
      console.error("Error fetching post:", e);
      error({ message: "Blog Post not found", statusCode: 404 });
    }

    return {
      post,
    };
  },
  mounted() {
    console.log("Component has been mounted"); // Confirm the component is mounting
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

<style>
.blog .paragraph.medium {
  display: none;
}
</style>
