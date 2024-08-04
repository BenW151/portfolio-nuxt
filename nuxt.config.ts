// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  site: {
    url: "https://benward.io",
    name: "Ben Ward Web Development",
  },

  devtools: { enabled: true },

  alias: {
    assets: "/<rootDir>/assets",
  },

  css: ["~/assets/main.css"],

  modules: [
    "nuxt-lucide-icons",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "nuxt-swiper",
    "@nuxtjs/sitemap",
    "@nuxt/content"
  ],

  image: {
    format: ["webp"],
  },

  googleFonts: {
    families: {
      Lexend: {
        wght: [300, 400, 500],
        ital: [100, 400],
      },
      "Roboto Flex": {
        wght: [100, 300, 400, 500, 700, 900],
        ital: [400],
      },
    },
    display: "swap",
  },

  plugins: ["~/plugins/rellax.client.js"],

  app: {
    pageTransition: { name: "page", appear: true },

    head: {
      title: "Ben Ward | Web Development",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },

      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        {
          hid: "description",
          name: "description",
          content:
            "Providing professional web development services focused on creating modern, responsive, and user-friendly websites tailored to your needs.",
        },
        {
          name: "keywords",
          content:
            "Web, Development, WebDev, Benward, Web Development Services, Ben Ward, Web Development, Web Developer, Developer, Web Design, Design, WebDesign, SEO",
        },
        { name: "theme-color", content: "#ffffff" },
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "msapplication-config", content: "/browserconfig.xml" },
        {
          property: "og:title",
          content: "Ben Ward | Web Development",
        },
        {
          property: "og:site_name",
          content: "Ben Ward | Web Development",
        },
        {
          property: "og:description",
          content:
            "Providing professional web development services focused on creating modern, responsive, and user-friendly websites tailored to your needs.",
        },
        {
          property: "og:image",
          content: "https://benward.io/images/index-background.webp",
        },
        { property: "og:url", content: "https://benward.io/" },
        {
          property: "og:locale",
          content: "en_GB",
        },
        { name: "twitter:card", content: "summary_large_image" },
      ],

      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Ben Ward Web Development",
            url: "https://benward.io",
            logo: "https://benward.io/branding/benward-logo-square.webp",
            sameAs: [
              "https://www.instagram.com/benward.io",
              "https://www.linkedin.com/company/benward/",
            ],
            description:
              "Offering top-notch web development services to help businesses succeed online.",
          }),
        },

        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://benward.io/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Portfolio",
                item: "https://benward.io/portfolio",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Contact",
                item: "https://benward.io/contact",
              },
            ],
          }),
        },
      ],

      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
      ],
    },
  },

  compatibilityDate: "2024-08-02",
});