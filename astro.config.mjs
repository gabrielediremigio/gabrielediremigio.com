import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  // site: "https://gabrielediremigio.com",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
