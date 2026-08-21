import { ImageResponse } from "next/og";
import { site, seo } from "@/content/site";

export const alt = seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Generated from the same content source as the page — no image asset to keep in sync. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fcfcfb",
          color: "#1c1a19",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{ width: 10, height: 10, borderRadius: 999, background: "#9a5f27" }}
          />
          <div style={{ fontSize: 22, letterSpacing: "0.16em", color: "#6b625b" }}>
            {site.role.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Full name — this image is the share-card identity, and "Piyush"
              alone doesn't identify anyone. */}
          <div style={{ fontSize: 72, fontWeight: 600, letterSpacing: "-0.035em" }}>
            {site.fullName}
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.35,
              color: "#5d5751",
              maxWidth: "900px",
              letterSpacing: "-0.015em",
            }}
          >
            {site.positioning}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 22, color: "#8a817a", letterSpacing: "0.04em" }}>
          Next.js · Node.js · Fastify · PostgreSQL · BullMQ · Docker
        </div>
      </div>
    ),
    size,
  );
}
