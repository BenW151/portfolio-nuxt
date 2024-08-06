<template>
  <div>
    <Header
      imageUrl="/images/index-background.webp"
      imageAlt="Laptop with code on desk"
      title="Blog Title"
      subtitle="Blog Subtitle."
      headerClass="header-large">
    </Header>

    <div class="container">
      <ContentDoc />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    console.log('asyncData is running'); // Check if asyncData is executed
    let post;
    try {
      post = await $content("blog", params.slug).fetch();
      console.log('Fetched post:', post); // Log the post object
    } catch (e) {
      console.error('Error fetching post:', e);
      error({ message: "Blog Post not found", statusCode: 404 });
    }

    return {
      post,
    };
  },
  mounted() {
    console.log('Component has been mounted'); // Confirm the component is mounting
  }
};
</script>

