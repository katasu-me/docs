import { defineCollection } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    loader: docsLoader({
      generateId: ({ entry }) => {
        const slug = entry.split(".").slice(0, -1).join(".");
        const dateMatch = slug.match(/(\d{4})-(\d{2})-(\d{2})$/);

        if (!dateMatch) {
          return slug;
        }

        // newsのサイドバーを日付降順にしたいので、日付を反転させた数値をIDにする
        const dateNum = Number(dateMatch[0].replace(/-/g, ""));
        const reversed = String(99999999 - dateNum).padStart(8, "0");
        const dir = slug.substring(0, slug.lastIndexOf("/"));

        return dir ? `${dir}/${reversed}` : reversed;
      },
    }),
    schema: docsSchema(),
  }),
};
