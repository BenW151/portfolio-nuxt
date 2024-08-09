<template>
  <div class="index">
    <Header
      imageUrl="/images/index-background.webp"
      imageAlt="Laptop with code on desk"
      title="Ben Ward"
      titleClass="index-title"
      subtitle="Web Development."
      buttonText="Contact Me"
      buttonUrl="/contact"
      buttonDescription="Contact Me"
      headerClass="header-large">
      <template #description>
        <p>
          Specialising in responsive, user-friendly websites that blend
          aesthetic design with seamless functionality. Focused on delivering
          tailored web solutions that meet the unique needs of each project.
        </p>
      </template>
    </Header>

    <main>
      <section class="lead-text">
        <LayoutGridContainer>
          <TextReveal tag="h3" class="item">
            Empowering businesses through engaging and practical designs, built
            for outstanding performance and significant reach.
          </TextReveal>
          <p>
            Providing either one off collaborations, or ongoing relationships.
          </p>
        </LayoutGridContainer>
      </section>

      <section class="about">
        <LayoutGridContainer>
          <TextSectionLabel labelText="About" />
          <TextParagraphWithTitle subtitleTag="h3">
            <template #title>About Me</template>
            <template #body>
              <p>
                My approach to web development is rooted in a passion for
                crafting digital experiences that are both engaging and
                efficient. I focus on creating user-friendly and visually
                appealing websites. I believe in designs where form and function
                work together seamlessly, ensuring that each project is not only
                aesthetically pleasing but also highly functional. My aim is to
                continuously innovate and exceed expectations in every project.
              </p>
            </template>
          </TextParagraphWithTitle>
          <TextParagraphWithTitle subtitleTag="h4">
            <template #title><LucideBoxSelect /> Form</template>
            <template #body>
              <p>
                Aesthetic appeal and visual innovation, ensuring each design not
                only captures the eye but also embodies a distinctive artistic
                expression that elevates the overall user experience.
              </p>
            </template>
          </TextParagraphWithTitle>
          <TextParagraphWithTitle subtitleTag="h4">
            <template #title><LucideFrame /> Function</template>
            <template #body>
              <p>
                Practicality and usability, with designs engineered to deliver
                optimal performance and ease of use, ensuring they meet the
                exact needs of users with efficiency and reliability.
              </p>
            </template>
          </TextParagraphWithTitle>
        </LayoutGridContainer>
      </section>

      <section class="services">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Details" />
          <TextParagraphWithTitle subtitleTag="h3">
            <template #title>Services</template>
            <template #body>
              <p>
                I provide a full spectrum of web development services, including
                custom website design, responsive, accessible development,
                optimised SEO, and ongoing maintenance, ensuring a seamless and
                engaging user experience across all devices.
              </p>
              <NuxtLink
                class="underline-out"
                to="/portfolio"
                aria-label="Portfolio Page"
                >Previous Work</NuxtLink
              >
            </template>
          </TextParagraphWithTitle>
          <Accordion>
            <AccordionItem title="Web Development" index="1">
              <p>
                Comprehensive web development services that include front-end
                development, custom website design, and CMS solutions. Using the
                latest technologies and best practices, I ensure each website is
                robust, fast-loading, and fully responsive, providing users with
                a seamless experience across all devices.
              </p>
            </AccordionItem>
            <AccordionItem title="UI/UX Design" index="2">
              <p>
                UI/UX design services focus on creating user-centric interfaces
                that are both intuitive and engaging. From wireframing to final
                design implementation, I employ a thorough design process to
                ensure that every aspect of the user experience is streamlined
                and aesthetically pleasing.
              </p>
            </AccordionItem>
            <AccordionItem title="Brand Design" index="3">
              <p>
                Helping businesses establish a strong visual identity with my
                brand design services. This includes logo design, color schemes,
                typography, and overall brand strategy, ensuring a cohesive and
                powerful brand image that resonates with the target audience.
              </p>
            </AccordionItem>
            <AccordionItem title="Blog Configuration" index="4">
              <p>
                Comprehensive blog configuration services, enabling you to
                easily manage and update your blog content through a
                user-friendly CMS. This setup allows for seamless content
                management, ensuring you can make updates on the fly without
                requiring any technical expertise.
              </p>
            </AccordionItem>
            <AccordionItem title="SEO" index="5">
              <p>
                SEO services are designed to increase visibility and drive
                traffic through strategic keyword placement, content
                optimization, and backlink development. I focus on building
                sustainable SEO strategies that improve search engine rankings
                and enhance online presence.
              </p>
            </AccordionItem>
            <AccordionItem title="Support" index="6">
              <p>
                Ongoing support and maintenance services to ensure websites
                remain up-to-date and perform optimally. This includes regular
                updates, security checks, and troubleshooting to help businesses
                maintain a reliable and effective online presence.
              </p>
            </AccordionItem>
          </Accordion>
        </LayoutGridContainer>
      </section>

      <section class="skills">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Skills" />
          <TextParagraphWithTitle subtitleTag="h3">
            <template #title>Skills</template>
            <template #body>
              <p>
                I bring a solid foundation in web development and design,
                focused on creating functional and visually appealing digital
                experiences. I craft responsive, SEO-friendly websites using
                HTML5 and CSS3, enhancing user interaction with dynamic
                JavaScript functionalities. With expertise in Vue and Nuxt, I
                develop efficient UI components and manage application state
                using modern techniques. My proficiency in Figma allows me to
                design clean, functional prototypes that align with project
                goals, ensuring layouts and graphics are both visually
                compelling and practical. Additionally, I manage web analytics
                to track and optimize performance and handle Cloudflare domain
                administration for secure and efficient web hosting. Each
                project reflects my ability to blend technical skills with
                creative insights, delivering innovative and high-quality
                results.
              </p>
            </template>
          </TextParagraphWithTitle>
          <ListsDefaultList
            title="Languages"
            :items="[
              { id: 1, text: 'HTML 5' },
              { id: 2, text: 'CSS 3' },
              { id: 3, text: 'JavaScript' },
            ]" />
          <ListsDefaultList
            title="Frameworks"
            :items="[
              { id: 1, text: 'Nuxt 3' },
              { id: 2, text: 'Vue 3' },
            ]" />
          <ListsDefaultList
            title="Other"
            :items="[
              { id: 1, text: 'Cloudflare' },
              { id: 2, text: 'Figma' },
              { id: 3, text: 'Analytics' },
            ]" />
        </LayoutGridContainer>
      </section>

      <section class="experience">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Experience" />
          <TextParagraphWithTitle subtitleTag="h3">
            <template #title>Experience</template>
            <template #body>
              <p>
                After a successful career as a Network Engineer and IT Service
                Desk professional, I made a proactive career switch to web
                development. Driven by a passion for creating dynamic and
                user-friendly websites, I undertook extensive self-study to
                learn modern web technologies. Through dedicated learning and
                hands-on projects, I have developed strong skills in HTML, CSS,
                JavaScript, and various web development frameworks. I am excited
                to bring my technical expertise and problem-solving abilities
                into a web development role.
              </p>
              <!--<a
                class="underline-out-icon"
                href="/ben-ward-cv.pdf"
                aria-label="Download CV"
                download=""
                ><LucideDownload />Download CV</a
              >-->
              <h4 class="code">Web Developer</h4>
              <h5>benward.io</h5>
              <h6>January 2024 - Current</h6>
              <p>
                As a self-taught freelance web developer, I have been dedicated
                to building responsive and user-friendly websites. My journey
                has involved honing my skills in front-end development and
                continuously expanding my knowledge to deliver high-quality web
                solutions.
              </p>
              <ListsDefaultList
                title="Key Duties"
                :bullets="true"
                :items="[
                  {
                    id: 1,
                    text: 'Successfully completed a project that involved designing and developing a fully functional website from concept to deployment.',
                  },
                  {
                    id: 2,
                    text: 'Focused on creating intuitive user interfaces and seamless user experiences, ensuring that each project meets both client expectations and modern web standards.',
                  },
                  {
                    id: 3,
                    text: 'Continuously learning and applying the latest web development technologies and best practices to stay ahead in a rapidly evolving field.',
                  },
                ]" />
              <h4 class="network">Network Engineer</h4>
              <h5>Hargreaves Lansdown</h5>
              <h6>August 2022 - April 2023</h6>
              <p>
                In my role as a Network Support Engineer, I played a crucial
                role in maintaining and optimising a robust network
                infrastructure, ensuring seamless connectivity and security for
                thousands of users and millions of clients.
              </p>
              <ListsDefaultList
                title="Key Duties"
                :bullets="true"
                :items="[
                  {
                    id: 1,
                    text: 'Managed firewall policies and network configurations, contributing to enhanced security and optimized performance across the organization.',
                  },
                  {
                    id: 2,
                    text: 'Analyzed network traffic and resolved incidents, demonstrating strong problem-solving skills and the ability to maintain high availability.',
                  },
                  {
                    id: 3,
                    text: 'Collaborated with IT teams and third-party contractors, ensuring the smooth implementation and support of complex network solutions using tools like SolarWinds, Infoblox, and F5 BigIP.',
                  },
                ]" />
              <h4 class="laptop">IT Service Desk Analyst</h4>
              <h5>Hargreaves Lansdown</h5>
              <h6>December 2018 - August 2022</h6>
              <p>
                In my role at Hargreaves Lansdown, I built extensive expertise
                in technical support and system administration, with a strong
                emphasis on delivering user-focused solutions and supporting
                system roll-outs.
              </p>
              <ListsDefaultList
                title="Key Duties"
                :bullets="true"
                :items="[
                  {
                    id: 1,
                    text: 'Provided first-line technical support to a large user base, enhancing my ability to diagnose and resolve technical issues swiftly and efficiently.',
                  },
                  {
                    id: 2,
                    text: 'Played an active role in new system and software deployments, gaining hands-on experience in implementing and managing technical projects.',
                  },
                  {
                    id: 3,
                    text: 'Documented processes and collaborated with various teams to ensure seamless operations across diverse IT environments, strengthening my skills in maintaining and improving complex systems.',
                  },
                ]" />
              <h4 class="wrench">Infrastructure Technician</h4>
              <h5>Marsh Corporate</h5>
              <h6>October 2017 - November 2018</h6>
              <p>
                In my role at Marsh Corporate, I developed a solid foundation in
                IT infrastructure and technical support, which has equipped me
                with strong problem-solving skills and a deep understanding of
                the technical aspects behind efficient, user-centered solutions.
              </p>
              <ListsDefaultList
                title="Key Duties"
                :bullets="true"
                :items="[
                  {
                    id: 1,
                    text: 'Provided technical support and troubleshooting across a large user base, enhancing my ability to deliver effective and efficient user-focused solutions.',
                  },
                  {
                    id: 2,
                    text: 'Contributed to site infrastructure migrations, gaining experience in managing and implementing significant technical projects.',
                  },
                  {
                    id: 3,
                    text: 'Developed custom PC images and managed server administration, which deepened my understanding of software deployment and configuration, essential for modern web development practices.',
                  },
                ]" />
            </template>
          </TextParagraphWithTitle>
        </LayoutGridContainer>
      </section>

      <section class="contact">
        <LayoutGridContainer>
          <TextSectionLabel labelText="Contact" />
          <NuxtLink
            class="item get-in-touch underline-out"
            to="/Contact"
            aria-label="Contact Page"
            ><TextReveal tag="h2"> Get in Touch</TextReveal></NuxtLink
          >
        </LayoutGridContainer>
      </section>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: "Ben Ward | Web Development",
  meta: [
    {
      name: "description",
      content:
        "Providing professional web development services focused on creating modern, responsive, and user-friendly websites tailored to your needs.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://benward.io/",
    },
  ],
});
</script>

<style scoped>
.lead-text .container {
  padding-top: 30vh;
  padding-bottom: 30vh;
}

.lead-text .text-reveal {
  font-size: var(--font-size-M);
}

.lead-text .item,
.lead-text p {
  grid-column: 2 / 16;
}

.about .paragraph-with-title:nth-of-type(1) {
  grid-column: 6 / 14;
  grid-row: 1;
}

.about .paragraph-with-title:nth-of-type(2) {
  grid-column: 6 / 10;
  grid-row-start: 2;
  padding-top: 0;
}

.about .paragraph-with-title:nth-of-type(3) {
  grid-column: 10 / 14;
  grid-row-start: 2;
  padding-top: 0;
}

.services .paragraph-with-title:nth-of-type(1) {
  grid-column: 6 / 14;
  grid-row: 1;
}

.services .accordion {
  grid-column: 6 / 17;
  grid-row: 2;
  /*height: 40vw;*/
}

.skills .paragraph-with-title:nth-of-type(1),
.experience .paragraph-with-title:nth-of-type(1) {
  grid-column: 6 / 14;
  grid-row: 1;
}

.experience h4 {
  margin-top: var(--spacing-4);
  margin-bottom: 0;
}

.experience h5 {
  margin-bottom: 1vh;
}

.skills .list:nth-child(3) {
  grid-column: 6 / 9;
  grid-row-start: 2;
}

.skills .list:nth-child(4) {
  grid-column: 9 / 12;
  grid-row-start: 2;
}

.skills .list:nth-child(5) {
  grid-column: 12 / 15;
  grid-row-start: 2;
}

.contact .get-in-touch {
  grid-column: 6 / 17;
  grid-row: 1;
  width: fit-content;
}

.contact .get-in-touch h2 {
  font-size: var(--font-size-XXL);
  margin-bottom: 0;
}

@media (max-width: 767px) {
  .lead-text .item,
  .lead-text p {
    grid-column: 1 / 7;
    grid-row: auto;
  }

  .about .item.paragraph-with-title {
    grid-column: 1 / 7;
    grid-row: auto;
  }

  .services .item.paragraph-with-title:nth-of-type(1),
  .services .accordion,
  .skills .item.paragraph-with-title:nth-of-type(1),
  .contact .get-in-touch,
  .experience .item.paragraph-with-title:nth-of-type(1) {
    grid-column: 1 / 7;
    grid-row: auto;
  }

  .skills .item.list {
    grid-column: span 2;
    grid-row: auto;
  }

  .experience h5 {
    margin-bottom: 1vw;
  }

  .contact .get-in-touch h2 {
    font-size: 14.5vw;
  }
}
</style>
