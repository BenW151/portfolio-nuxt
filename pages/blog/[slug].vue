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
          :imageUrl="doc.headerImageUrl"
          :imageAlt="doc.headerImageAlt"
          :title="doc.title"
          :subtitle="doc.subtitle"
          headerClass="header-large" />

        <section class="contents">
          <LayoutGridContainer>
            <ListsPageIndex :labels="pageIndexLabels" />
          </LayoutGridContainer>
        </section>

        <section class="what-to-do" id="what-to-do">
          <LayoutGridContainer>
            <div class="blog-text">
              <h3>{{ doc.whatToDoTitle }}</h3>
              <div v-html="doc.whatToDoText"></div>
            </div>
          </LayoutGridContainer>
        </section>

        <section class="where-to-stay" id="where-to-stay">
          <LayoutGridContainer>
            <div class="blog-text">
              <h3>{{ doc.whereToStayTitle }}</h3>
              <div v-html="doc.whereToStayText"></div>
            </div>
          </LayoutGridContainer>
        </section>

        <section class="what-to-see" id="what-to-see">
          <LayoutGridContainer>
            <div class="blog-text">
              <h3>{{ doc.whatToSeeTitle }}</h3>
              <div v-html="doc.whatToSeeText"></div>
            </div>
          </LayoutGridContainer>
        </section>
        
      </article>
    </ContentDoc>
  </div>
</template>

<script setup>
const pageIndexLabels = [
  { title: "What To Do", link: "what-to-do" },
  { title: "Where To Stay", link: "where-to-stay" },
  { title: "What To See", link: "what-to-see" },
];
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
