import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Next's build artefacts carry no ranking value and only burn crawl budget.
      disallow: ["/_next/static/chunks/"],
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
