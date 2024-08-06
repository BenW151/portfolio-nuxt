<template>
  <div class="blog">
    <ContentDoc v-slot="{ doc }">
      <article>
        <!-- Pass the content fields as props to the Header component -->
        <Header
          :imageUrl="doc.imageUrl"
          :imageAlt="doc.imageAlt"
          :title="doc.title"
          :subtitle="doc.subtitle"
          headerClass="header-large" />

        <!-- Render the rest of the content -->
        <div class="container">
          <h3>{{ doc.sectionTitle }}</h3>
          <div v-html="doc.sectionText"></div>
        </div>
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

<style>
.blog .paragraph.medium {
  display: none;
}
</style>
