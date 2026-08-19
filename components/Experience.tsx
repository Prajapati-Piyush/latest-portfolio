import { experience } from "@/content/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { clean } from "@/lib/links";

export function Experience() {
  return (
    <Section id="experience" index="02 / Experience" title="Experience">
      <ol className="space-y-14">
        {experience.map((role, i) => (
          <Reveal as="li" key={role.company} delay={i * 0.05}>
            <article className="grid gap-6 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-10">
              <header className="sm:pt-1">
                <p className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-faint">
                  {clean(role.period)}
                </p>
                <p className="mt-2 text-[0.8125rem] text-muted sm:mt-3">{clean(role.location)}</p>
              </header>

              <div>
                <h3 className="text-[1.15rem] font-medium tracking-tight">
                  {role.role}
                  <span className="text-faint"> · </span>
                  <span className="text-muted">{role.company}</span>
                </h3>
                <p className="mt-2 max-w-[62ch] text-[0.95rem] leading-relaxed text-muted">
                  {role.summary}
                </p>

                <ul className="mt-6 space-y-3">
                  {role.bullets.map((b) => (
                    <li
                      key={b}
                      className="relative max-w-[64ch] pl-5 text-[0.95rem] leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-[0.7em] size-1 rounded-full bg-line"
                      />
                      {clean(b)}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {role.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-line px-2 py-1 font-mono text-[0.7rem] text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
