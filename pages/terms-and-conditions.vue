<template>
  <div class="terms">
    <section id="terms">
      <LayoutGridContainer>
        <TextParagraphWithTitle subtitleTag="h3">
          <template #title>Terms + Conditions</template>
          <template #body>
            <p>
              Thank you for visiting my website. Your trust is important to me,
              and I am dedicated to providing a transparent and fair experience.
              These Terms and Conditions are designed to help you understand the
              rules and guidelines that govern the use of my website and the
              services I offer.
            </p>
            <p>Last Updated: 04/08/2024</p>

            <h4>1. Introduction</h4>
            <p>
              Welcome to benward.io ("Company", "we", "our", "us", "me", "I").
              These Terms and Conditions ("Terms") govern your relationship with
              benward.io (the "Website") and all services provided by the
              Company.
            </p>
            <p>
              By accessing or using our Website and services, you agree to
              comply with and be bound by these Terms. If you do not agree with
              any part of these Terms, you must not use our services.
            </p>

            <h4>2. Services</h4>
            <p>
              We offer web development services, including but not limited to
              website design, development, and maintenance. The specifics of the
              services will be detailed in a separate agreement or statement of
              work ("SOW") provided to the client.
            </p>

            <h4>3. Client Obligations</h4>
            <p>
              <strong>Content and Materials:</strong> The client is responsible
              for providing all content, logos, images, and any other materials
              required for the completion of the project, unless otherwise
              agreed.
            </p>
            <p>
              <strong>Timely Feedback:</strong> The client agrees to provide
              timely feedback and approvals to ensure the project progresses
              according to the agreed timeline.
            </p>
            <p>
              <strong>Legal Compliance:</strong> The client must ensure that all
              provided content complies with applicable laws and does not
              infringe on any third-party rights.
            </p>

            <h4>4. Payment Terms</h4>
            <p>
              <strong>Fees:</strong> Payment terms, including fees and payment
              schedules, will be outlined in the SOW.
            </p>
            <p>
              <strong>Deposits:</strong> A non-refundable deposit may be
              required before work commences.
            </p>
            <p>
              <strong>Late Payments:</strong> Any late payments may incur
              interest at a rate of 5% per month. We reserve the right to pause
              work or terminate the agreement if payment is not received in a
              timely manner.
            </p>

            <h4>5. Revisions and Changes</h4>
            <p>
              <strong>Scope of Work:</strong> Any revisions or changes requested
              by the client that fall outside the original scope of work will be
              billed additionally at our standard hourly rate.
            </p>
            <p>
              <strong>Revisions:</strong> We offer [X] rounds of revisions as
              part of the service. Additional revisions will incur additional
              charges.
            </p>

            <h4>6. Intellectual Property</h4>
            <p>
              <strong>Ownership:</strong> Upon full payment, the client will own
              the final deliverables. We retain ownership of any pre-existing
              intellectual property or tools used in the project.
            </p>
            <p>
              <strong>Portfolio Use:</strong> We reserve the right to showcase
              the completed project in our portfolio and marketing materials
              unless the client specifically requests otherwise.
            </p>

            <h4>7. Confidentiality</h4>
            <p>
              Both parties agree to keep confidential any proprietary
              information received during the course of the project. This
              includes business plans, technical data, and client information.
            </p>

            <h4>8. Termination</h4>
            <p>
              <strong>By the Client:</strong> The client may terminate the
              project at any time, but will be responsible for payment for all
              work completed up to the termination date.
            </p>
            <p>
              <strong>By the Company:</strong> We reserve the right to terminate
              the project if the client breaches these Terms or fails to make
              timely payments.
            </p>

            <h4>9. Limitation of Liability</h4>
            <p>
              We will not be liable for any indirect, special, or consequential
              damages arising out of or in connection with the services
              provided, including but not limited to loss of profits, data, or
              business opportunities.
            </p>

            <h4>10. Governing Law</h4>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the United Kingdom, without regard to its conflict of
              law provisions.
            </p>

            <h4>11. Amendments</h4>
            <p>
              We reserve the right to modify these Terms at any time. Any
              changes will be effective immediately upon posting on our Website.
              It is the client's responsibility to review the Terms
              periodically.
            </p>

            <h4>12. Contact Information</h4>
            <p>
              By using our services, you agree to the terms outlined in these
              Terms and Conditions. If you have any questions or concerns about
              these Terms, please contact us at
              <a
                href="mailto:contact@benward.io"
                aria-label="email address"
                class="underline-out email"
                >contact@benward.io</a
              >.
            </p>
          </template>
        </TextParagraphWithTitle>
      </LayoutGridContainer>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Ben Ward | Terms + Conditions",
  meta: [
    {
      name: "description",
      content:
        "Understand the terms and conditions that apply when using my website and services.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://benward.io/terms-and-conditions",
    },
  ],
});
</script>

<style scoped>
#terms .paragraph-with-title:nth-of-type(1) {
  grid-column: 2 / 10;
  grid-row: 1;
}

@media (max-width: 767px) {
  #terms .item.paragraph-with-title {
    grid-column: 1 / 7;
    grid-row: auto;
  }
}
</style>
