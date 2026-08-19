import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/site";
import { Reveal } from "@/components/Reveal";
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

  const title = clean(project.title);
  const description = clean(project.summary);

  return {
    title,
    description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title, description, type: "article", url: `/work/${project.slug}` },
    robots: project.published ? undefined : { index: false, follow: true },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const meta = [
    { label: "Year", value: clean(project.year) },
    { label: "Role", value: clean(project.role) },
    { label: "Stack", value: project.tech.join(" · ") },
  ];

  return (
    <article className="py-20 sm:py-24">
      <Reveal>
        <Link
          href="/#work"
          className="group inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-muted transition-colors duration-200 hover:text-ink"
        >
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-x-0.5">
            ←
          </span>
          All work
        </Link>

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
      </div>

      <Reveal delay={0.04}>
        <div className="mt-20 border-t border-line pt-8">
          <Link
            href="/#contact"
            className="text-[0.95rem] text-muted transition-colors duration-200 hover:text-ink"
          >
            Questions about this project? Get in touch →
          </Link>
        </div>
      </Reveal>
    </article>
  );
}
