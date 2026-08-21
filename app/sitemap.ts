import type { MetadataRoute } from "next";
import { projects, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: `${site.url}/work`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Unpublished case studies stay out until they describe real work — their
    // detail pages are noindexed too, so the two signals agree.
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
