import type { MetadataRoute } from "next";
import { site, seo } from "@/content/site";

/** Lets mobile browsers install/name the site correctly; also a mobile-SEO signal. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seo.title,
    short_name: site.fullName,
    description: seo.description,
    start_url: "/",
    display: "browser",
    background_color: "#fcfcfb",
    theme_color: "#fcfcfb",
  };
}
