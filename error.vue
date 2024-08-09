<template>
  <div>
    <Nav />
    <Header
    imageUrl="/images/index-background.webp"
    :title="`${error.statusCode} Error`"
      subtitle="This Page Does Not Exist"
      headerClass="header-small"
      buttonText="Back to Home Page"
      buttonUrl="/"
      buttonDescription="Back to Home Page">
      <template #description>
        <p>There was an error.</p>
      </template>
    </Header>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });

useHead({
  title: "Ben Ward | Error",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>
