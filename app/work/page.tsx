import type { Metadata } from "next";
import Link from "next/link";
import { projects, site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { clean } from "@/lib/links";

const title = "Projects & Case Studies";
const description =
  "Full-stack and backend engineering case studies by Piyush Prajapati — multi-tenant CRM and logistics systems, BullMQ job pipelines, and AI-powered applications built with Next.js, Node.js and PostgreSQL.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work" },
  openGraph: { title, description, type: "website", url: "/work" },
};

/**
 * Hub page for the case studies. Before this existed /work was a 404 even
 * though /work/<slug> resolved — a hole in the URL hierarchy that left every
 * case study with no crawlable parent.
 */
export default function WorkIndexPage() {
  const published = projects.filter((p) => p.published);

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: `${site.url}/work`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: published.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${site.url}/work/${p.slug}`,
        name: clean(p.title),
      })),
    },
  };

  return (
    <div className="py-20 sm:py-24">
      <Reveal>
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Work", href: "/work" },
          ]}
        />

        <h1 className="mt-8 max-w-[22ch] text-[2rem] font-medium leading-[1.14] tracking-[-0.03em] sm:text-[2.6rem]">
          Projects &amp; case studies
        </h1>
        <p className="mt-5 max-w-[62ch] text-[1.0125rem] leading-[1.75] text-muted">
          Systems I&apos;ve designed and shipped — production CRM and logistics
          workflows, asynchronous job pipelines, and AI-powered applications. Each
          case study covers the problem, the approach, and what actually shipped.
        </p>
      </Reveal>

      <ul className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line">
        {published.map((project, i) => (
          <Reveal as="li" key={project.slug} delay={i * 0.05} className="group bg-canvas">
            <Link
              href={`/work/${project.slug}`}
              className="block p-6 transition-colors duration-200 hover:bg-surface sm:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h2 className="text-[1.15rem] font-medium tracking-tight">
                  {clean(project.title)}
                  <span
                    aria-hidden="true"
                    className="ml-2 inline-block text-accent opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                  >
                    →
                  </span>
                </h2>
                <span className="font-mono text-[0.75rem] text-faint">
                  {clean(project.year)}
                </span>
              </div>

              <p className="mt-3 max-w-[62ch] text-[0.95rem] leading-relaxed text-muted">
                {clean(project.summary)}
              </p>

              <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-line px-2 py-1 font-mono text-[0.7rem] text-muted"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Link>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.04}>
        <div className="mt-16 border-t border-line pt-8">
          <p className="max-w-[62ch] text-[0.95rem] leading-relaxed text-muted">
            More context on the stack behind this work sits on the{" "}
            <Link href="/#stack" className="text-ink underline underline-offset-4">
              tech stack
            </Link>{" "}
            and{" "}
            <Link href="/#experience" className="text-ink underline underline-offset-4">
              experience
            </Link>{" "}
            sections, or{" "}
            <Link href="/#contact" className="text-ink underline underline-offset-4">
              get in touch
            </Link>
            .
          </p>
        </div>
      </Reveal>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
      />
    </div>
  );
}
