import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";
console.log("ANYBODY -> ", import.meta.env.DEV);

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sanity({
      //TODO:env variables
      projectId: import.meta.env.DEV
        ? import.meta.env.VITE_SANITY_PROJECT_ID
        : JSON.stringify(import.meta.env.PUBLIC_SANITY_PROJECT_ID),
      dataset: import.meta.env.DEV
        ? import.meta.env.VITE_SANITY_PROJECT_DATASET
        : JSON.stringify(import.meta.env.PUBLIC_SANITY_PROJECT_DATASET),
      // Set useCdn to false if you're building statically.
      useCdn: false,
      apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
    }),
  ],
});
