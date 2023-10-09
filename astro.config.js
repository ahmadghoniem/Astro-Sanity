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
        import.meta.env.PUBLIC_VERCEL_ENV === "production"
          ? JSON.stringify(import.meta.env.PUBLIC_SANITY_PROJECT_ID)
          : import.meta.env.VITE_SANITY_PROJECT_ID,
      dataset:
        import.meta.env.PUBLIC_VERCEL_ENV === "production"
          ? JSON.stringify(import.meta.env.PUBLIC_SANITY_PROJECT_DATASET)
          : import.meta.env.VITE_SANITY_PROJECT_DATASET,
      // Set useCdn to false if you're building statically.
      useCdn: false,
      apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
    }),
  ],
});
