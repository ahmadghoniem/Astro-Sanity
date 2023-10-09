import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";
// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sanity({
      //TODO:env variables
      projectId:
        JSON.stringify(import.meta.env.VERCEL_ENV) === "production"
          ? JSON.stringify(import.meta.env.SANITY_PROJECT_ID)
          : import.meta.env.SANITY_PROJECT_ID,
      dataset:
        JSON.stringify(import.meta.env.VERCEL_ENV) === "production"
          ? JSON.stringify(import.meta.env.SANITY_PROJECT_DATASET)
          : import.meta.env.SANITY_PROJECT_DATASET,
      // Set useCdn to false if you're building statically.
      useCdn: false,
      apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
    }),
  ],
});
