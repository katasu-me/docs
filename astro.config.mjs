// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "katasu.me docs",
      customCss: [
        "./src/styles/custom.css",
      ],
      social: [{
        icon: "github",
        label: "GitHub",
        href: "https://github.com/katasu-me",
      }],
      sidebar: [
        {
          label: "katasu.meについて",
          autogenerate: { directory: "info" },
        },
        {
          label: "更新履歴",
          autogenerate: { directory: "news" },
        },
        {
          label: "その他",
          autogenerate: { directory: "others" },
        },
      ],
    }),
  ],

  adapter: cloudflare(),
});