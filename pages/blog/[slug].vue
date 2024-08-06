<template>
  <div>
    <Header
      :imageUrl="post.imageUrl"
      :imageAlt="post.imageAlt"
      :title="post.title"
      :subtitle="post.subtitle"
      headerClass="header-large">
    </Header>

    <div class="container">
      <ContentDoc :content="post.bodyText" />
    </div>

    <section class="blog-text">
      <LayoutGridContainer>
        <TextParagraphWithTitle subtitleTag="h3">
          <template #title>{{ post.sectionTitle }}</template>
          <template #body>
            <p>{{ post.sectionText }}</p>
          </template>
        </TextParagraphWithTitle>
      </LayoutGridContainer>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("blog", params.slug).fetch();
    } catch (e) {
      error({ message: "Blog Post not found", statusCode: 404 });
    }

    return {
      post,
    };
  },
};
</script>


<style scoped>
.blog-text .paragraph-with-title:nth-of-type(1) {
  grid-column: 6 / 14;
  grid-row: 1;
}
</style>
