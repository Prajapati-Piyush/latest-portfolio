import Link from "next/link";
import { site } from "@/content/site";
import { resolveHref } from "@/lib/links";

const internal = [
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/#experience" },
  { label: "Stack", href: "/#stack" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const external = [
  { label: "GitHub", href: site.links.github },
  { label: "LinkedIn", href: site.links.linkedin },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[68rem] px-6 py-10">
        {/* Site-wide internal links: cheap crawl paths to every important page,
            and a genuinely useful way out of a case study. */}
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {internal.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-[0.75rem] text-muted transition-colors duration-200 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          {external.map((l) => (
            <a
              key={l.label}
              href={resolveHref(l.href)}
              target="_blank"
              rel="noreferrer noopener"
              className="font-mono text-[0.75rem] text-muted transition-colors duration-200 hover:text-ink"
            >
              {l.label} ↗
            </a>
          ))}
        </nav>

        <div className="mt-6 flex flex-col gap-3 border-t border-line pt-6 font-mono text-[0.75rem] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.fullName} · {site.role},{" "}
            {site.location}
          </p>
          <p>Designed &amp; built with care.</p>
        </div>
      </div>
    </footer>
  );
}
