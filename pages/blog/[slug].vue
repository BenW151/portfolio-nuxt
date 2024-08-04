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
    let post;
    try {
      post = await $content("blog", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      post,
    };
  },
};
</script>
