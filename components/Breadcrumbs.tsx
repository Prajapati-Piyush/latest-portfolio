import Link from "next/link";
import { site } from "@/content/site";

export type Crumb = { label: string; href: string };

/**
 * Visible breadcrumb trail plus the matching BreadcrumbList JSON-LD.
 * Keeping both in one component means the markup Google reads can never drift
 * from the markup a person sees.
 */
export function Breadcrumbs({ trail }: { trail: readonly Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${site.url}${c.href === "/" ? "" : c.href}`,
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-muted">
          {trail.map((c, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-faint">
                    {c.label}
                  </span>
                ) : (
                  <Link
                    href={c.href}
                    className="transition-colors duration-200 hover:text-ink"
                  >
                    {c.label}
                  </Link>
                )}
                {!last && (
                  <span aria-hidden="true" className="text-faint">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
