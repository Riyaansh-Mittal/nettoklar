// @ts-check
import { defineConfig } from "astro/config";
import indexNow from 'astro-indexnow';
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://nettoklar.de",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap(),
    indexNow({
      key: import.meta.env.INDEXNOW_KEY ?? process.env.INDEXNOW_KEY
    }),
  ],
  output: "static",
});
