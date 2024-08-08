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

        <!-- Posts with 'hiking' Tag -->
        <section class="related-posts">
          <LayoutGridContainer v-if="relatedPosts && relatedPosts.length">
            <h3>Related Posts</h3>
            <div
              v-for="post in relatedPosts"
              :key="post._path"
              class="blog-item">
              <NuxtLink :to="post._path" class="post-link">
                <!-- Display the image -->
                <img
                  :src="post.headerImageUrl"
                  :alt="post.headerImageAlt"
                  class="post-image" />
                <!-- Display the title -->
                <NuxtLink :to="post._path" class="post-title">{{
                  post.title
                }}</NuxtLink>
                <p>{{ post.description }}</p>
              </NuxtLink>
            </div>
          </LayoutGridContainer>
        </section>
      </article>
    </ContentDoc>
  </div>
</template>

<script setup>
import { useRoute } from "nuxt/app";

const pageIndexLabels = [
  { title: "What To Do", link: "what-to-do" },
  { title: "Where To Stay", link: "where-to-stay" },
  { title: "What To See", link: "what-to-see" },
];

const route = useRoute();
const slug = route.params.slug;

const { data: currentPost } = await useAsyncData("currentPost", async () => {
  const post = await queryContent("blog")
    .where({ _path: `/blog/${slug}` })
    .findOne();
  return post;
});

const { data: relatedPosts } = await useAsyncData("relatedPosts", async () => {
  if (!currentPost.value || !currentPost.value.tag) return [];

  const content = await queryContent("blog").find();

  // Filter posts by the current post's tag
  const filteredContent = content.filter(
    (post) =>
      post.tag &&
      post.tag === currentPost.value.tag &&
      post._path !== currentPost.value._path
  );

  // Return the top 4 posts with the matched tag
  return filteredContent.slice(0, 4);
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
    this.contentLoaded = true; // Mark content as loaded when component is mounted
  },
};
</script>

<style scoped>
.blog-text {
  grid-column: 5 / 13;
}

.related-posts h3 {
  grid-column: 5 / 16;
  grid-row: 1;
}

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
  height: 20vw;
  object-fit: cover;
}

.blog-item:nth-child(2) {
  grid-column: 1 / 5;
  grid-row: 2;
}

.blog-item:nth-child(3) {
  grid-column: 5 / 9;
  grid-row: 2;
}

.blog-item:nth-child(4) {
  grid-column: 9 / 13;
  grid-row: 2;
}

.blog-item:nth-child(5) {
  grid-column: 13 / 17;
  grid-row: 2;
}

@media (max-width: 767px) {
  .blog-text {
    grid-column: 1 / 7;
  }

  .post-image {
    height: 60vw;
  }

  .post-title {
    margin-bottom: 0;
  }

  .blog-item:nth-child(n),
  .related-posts h3 {
    grid-column: 1 / 7;
    grid-row: auto;
  }
}
</style>
