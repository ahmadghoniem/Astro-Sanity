import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";
import { loadEnv } from "vite";
import vercel from "@astrojs/vercel/static";
const {
  SANITY_PROJECT_ID,
  SANITY_PROJECT_DATASET,
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  vite: {
    define: {
      "process.env.EMAILJS_PUBLIC_KEY": JSON.stringify(EMAILJS_PUBLIC_KEY),
      "process.env.EMAILJS_SERVICE_ID": JSON.stringify(EMAILJS_SERVICE_ID),
      "process.env.EMAILJS_TEMPLATE_ID": JSON.stringify(EMAILJS_TEMPLATE_ID),
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sanity({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_PROJECT_DATASET,
      // Set useCdn to false if you're building statically.
      useCdn: true,
      apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
    }),
  ],
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
