import type { MetadataRoute } from "next";
import { projects, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    // Placeholder case studies stay out of the sitemap until they describe real work.
    ...projects
      .filter((p) => p.published)
      .map((p) => ({
        url: `${site.url}/work/${p.slug}`,
        lastModified: now,
        changeFrequency: "yearly" as const,
        priority: 0.7,
      })),
  ];
}
