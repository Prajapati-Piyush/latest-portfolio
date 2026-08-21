import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, site, experience } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { clean } from "@/lib/links";

type Params = { params: Promise<{ slug: string }> };

// Fully static: every case study is known at build time.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  // metaTitle/metaDescription are written for the SERP; title/summary are
  // written for the page. Keeping them separate means neither is compromised.
  const title = clean(project.metaTitle);
  const description = clean(project.metaDescription);
  const url = `/work/${project.slug}`;

  return {
    title,
    description,
    keywords: [...project.topics, ...project.tech, site.fullName],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: "article",
      url,
      authors: [site.fullName],
      tags: [...project.tech],
    },
    twitter: { card: "summary_large_image", title, description },
    robots: project.published ? undefined : { index: false, follow: true },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  // Shared technology is the honest signal for "related" here — no invented
  // taxonomy, just overlap in what each project actually used.
  const related = projects
    .filter((p) => p.slug !== project.slug && p.published)
    .map((p) => ({
      ...p,
      overlap: p.tech.filter((t) => project.tech.includes(t)).length,
    }))
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, 2);

  const url = `${site.url}/work/${project.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${url}#article`,
    headline: clean(project.title),
    name: clean(project.title),
    description: clean(project.summary),
    url,
    inLanguage: "en",
    author: { "@id": `${site.url}/#person` },
    publisher: { "@id": `${site.url}/#person` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    about: [...project.topics],
    keywords: [...project.tech, ...project.topics].join(", "),
    dateCreated: clean(project.year),
    isPartOf: { "@id": `${site.url}/#website` },
  };

  const meta = [
    { label: "Year", value: clean(project.year) },
    { label: "Role", value: clean(project.role) },
    { label: "Stack", value: project.tech.join(" · ") },
  ];

  return (
    <article className="py-20 sm:py-24">
      <Reveal>
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Work", href: "/work" },
            { label: clean(project.title), href: `/work/${project.slug}` },
          ]}
        />

        <h1 className="mt-8 max-w-[20ch] text-[2rem] font-medium leading-[1.14] tracking-[-0.03em] sm:text-[2.6rem]">
          {clean(project.title)}
        </h1>
        <p className="mt-5 max-w-[58ch] text-[1.0125rem] leading-[1.75] text-muted">
          {clean(project.summary)}
        </p>
      </Reveal>

      <Reveal delay={0.06}>
        <dl className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
          {meta.map((m) => (
            <div key={m.label} className="bg-canvas p-5 sm:p-6">
              <dt className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-faint">
                {m.label}
              </dt>
              <dd className="mt-3 text-[0.9rem] leading-snug">{m.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <div className="mt-16 space-y-14">
        <Reveal delay={0.04}>
          <section aria-labelledby="cs-problem">
            <h2
              id="cs-problem"
              className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-accent"
            >
              Problem
            </h2>
            <p className="mt-4 max-w-[62ch] text-[1.0125rem] leading-[1.75] text-muted">
              {clean(project.problem)}
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.04}>
          <section aria-labelledby="cs-solution">
            <h2
              id="cs-solution"
              className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-accent"
            >
              Approach
            </h2>
            <ul className="mt-4 space-y-4">
              {project.solution.map((s) => (
                <li
                  key={s}
                  className="relative max-w-[62ch] border-l border-line pl-5 text-[1.0125rem] leading-[1.75] text-muted"
                >
                  {clean(s)}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delay={0.04}>
          <section aria-labelledby="cs-outcome">
            <h2
              id="cs-outcome"
              className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-accent"
            >
              Outcome
            </h2>
            <p className="mt-4 max-w-[62ch] text-[1.0125rem] leading-[1.75] text-muted">
              {clean(project.outcome)}
            </p>
          </section>
        </Reveal>

        {project.links && project.links.length > 0 && (
          <Reveal delay={0.04}>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {project.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-mono text-[0.8125rem] text-muted transition-colors hover:text-ink"
                  >
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        <Reveal delay={0.04}>
          <section aria-labelledby="cs-topics">
            <h2
              id="cs-topics"
              className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-accent"
            >
              Technologies &amp; topics
            </h2>
            <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
              {project.topics.map((t) => (
                <li
                  key={t}
                  className="rounded-md bg-surface px-2.5 py-1.5 text-[0.8125rem] text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      </div>

      {related.length > 0 && (
        <Reveal delay={0.04}>
          <section aria-labelledby="cs-related" className="mt-20 border-t border-line pt-10">
            <h2
              id="cs-related"
              className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-accent"
            >
              Related case studies
            </h2>
            <ul className="mt-6 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
              {related.map((r) => (
                <li key={r.slug} className="bg-canvas">
                  <Link
                    href={`/work/${r.slug}`}
                    className="block h-full p-5 transition-colors duration-200 hover:bg-surface sm:p-6"
                  >
                    <h3 className="text-[1rem] font-medium tracking-tight">
                      {clean(r.title)}
                    </h3>
                    <p className="mt-2 max-w-[46ch] text-[0.875rem] leading-relaxed text-muted">
                      {clean(r.summary)}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      )}

      <Reveal delay={0.04}>
        <div className="mt-16 border-t border-line pt-8 text-[0.95rem] leading-relaxed text-muted">
          <p>
            <Link href="/work" className="text-ink underline underline-offset-4">
              Browse all case studies
            </Link>{" "}
            or{" "}
            <Link href="/#contact" className="text-ink underline underline-offset-4">
              get in touch
            </Link>{" "}
            about this project.
          </p>
        </div>
      </Reveal>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </article>
  );
}
