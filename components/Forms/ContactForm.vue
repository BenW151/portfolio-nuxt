<template>
  <LayoutGridContainer>
    <TextSectionLabel labelText="Contact" />
    <TextParagraphWithTitle subtitleTag="h3">
      <template #title>Get in Touch</template>
      <template #body>
        <p>
          For any inquiries or to discuss your project needs, feel free to get
          in touch. I'm always available to provide personalized solutions and
          help bring your digital vision to life.
        </p></template
      >
    </TextParagraphWithTitle>
    <div class="item contact-form">
      <div>
        <form @submit.prevent="submitForm" autocomplete="on">
          <label class="form-name">
            <input
              type="text"
              v-model="formData.name"
              name="name"
              autocomplete="name"
              placeholder="Name"
              required />
          </label>
          <label class="form-email">
            <input
              type="email"
              v-model="formData.email"
              name="email"
              autocomplete="email"
              placeholder="Email"
              required />
          </label>
          <label class="form-project">
            <input
              type="text"
              v-model="formData.project"
              name="project"
              placeholder="Project Title" />
          </label>
          <label class="form-message">
            <textarea
              v-model="formData.message"
              name="message"
              placeholder="Message"
              required></textarea>
          </label>
          <button class="link underline-out send" type="submit">
            Submit
          </button>
        </form>
        <p>{{ message }}</p>
      </div>
    </div>
  </LayoutGridContainer>
</template>

<script setup>
import { ref } from "vue";

const initialFormData = {
  name: "",
  email: "",
  project: "",
  message: "",
};

const formData = ref({ ...initialFormData });
const message = ref("");

const submitForm = async () => {
  message.value = "Submitting...";

  try {
    const response = await fetch("https://contact.benward.io/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData.value),
    });

    const result = await response.json();

    if (response.ok) {
      message.value = `Form submitted, I'll get back to you as soon as possible.`;
      formData.value = { ...initialFormData }; // Reset form fields
    } else {
      message.value = `Failed to submit form: ${result.message}. Please send us a direct email at contact@benward.io.`;
      console.error("Error response from server:", result.message);
    }
  } catch (error) {
    message.value = `An error occurred: ${error.message}. Please send us a direct email at contact@benward.io.`;
    console.error("Fetch error:", error);
  }
};
</script>

<style scoped>
input,
textarea {
  border: none;
  outline: none;
  border-bottom: 1px solid grey;
  color: var(--foreground-primary);
  background-color: transparent;
  position: relative;
  padding-bottom: var(--spacing-3);
  margin-bottom: var(--spacing-4);
  width: 100%;
  font-family: var(--font-family-secondary);
  font-size: var(--font-size-XS);
}

textarea {
  height: 100px;
}

input:focus,
textarea:focus {
  border-bottom: 1px solid var(--foreground-primary);
}

form button {
  outline: none;
  border: none;
  cursor: pointer;
}

form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-3);
  padding-top: var(--spacing-5);
}

form label:nth-child(1) {
  grid-column: 1 / 2;
  grid-row-start: 1;
}

form label:nth-child(2) {
  grid-column: 2 / 3;
  grid-row-start: 1;
}

form label:nth-child(3) {
  grid-column: 1 / 3;
  grid-row-start: 2;
}

form label:nth-child(4) {
  grid-column: 1 / 3;
  grid-row-start: 3;
}

@media (max-width: 767px) {
  .contact-form {
    grid-column: 1 / 7;
  }
}
</style>
