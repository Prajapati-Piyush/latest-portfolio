import Link from "next/link";
import { projects } from "@/content/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { clean } from "@/lib/links";

export function Work() {
  return (
    <Section
      id="work"
      index="01 / Work"
      title="Selected work"
      lede="A few systems I've built, with the reasoning behind them. Each entry covers the problem, the approach, and what actually shipped."
    >
      <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line">
        {projects.map((project, i) => (
          <Reveal as="li" key={project.slug} delay={i * 0.05} className="group bg-canvas">
            <Link
              href={`/work/${project.slug}`}
              className="block p-6 transition-colors duration-200 hover:bg-surface sm:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h3 className="text-[1.15rem] font-medium tracking-tight">
                  {clean(project.title)}
                  <span
                    aria-hidden="true"
                    className="ml-2 inline-block text-accent opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                  >
                    →
                  </span>
                </h3>
                <span className="font-mono text-[0.75rem] text-faint">{clean(project.year)}</span>
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
    </Section>
  );
}
