import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";
console.log(JSON.stringify("1st->", import.meta.env.PUBLIC_VERCEL_ENV));
console.log(JSON.stringify("2nd->", process.env.PUBLIC_VERCEL_ENV));
console.log(JSON.stringify("3nd->", process.env.PUBLIC_SANITY_PROJECT_ID));

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sanity({
      //TODO:env variables
      projectId: "9ebfcrzt",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: false,
      apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
    }),
  ],
});
