import { hero, site } from "@/content/site";
import { Reveal } from "./Reveal";
import { SystemDiagram } from "./SystemDiagram";
import { clean } from "@/lib/links";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="pb-4 pt-20 sm:pt-28">
      <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20">
        <div>
          <Reveal>
            <p className="flex items-center gap-2.5 font-mono text-[0.75rem] uppercase tracking-[0.16em] text-muted">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
              {site.role} · {clean(site.location)}
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1
              id="hero-heading"
              className="mt-7 max-w-[19ch] text-[2.1rem] font-medium leading-[1.12] tracking-[-0.03em] sm:text-[2.9rem] lg:text-[3.15rem]"
            >
              {hero.headline}
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 max-w-[54ch] text-[1.0125rem] leading-[1.75] text-muted">
              {hero.intro}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex h-11 items-center rounded-lg bg-ink px-5 text-[0.9rem] font-medium text-canvas transition-opacity duration-200 hover:opacity-88"
              >
                View work
              </a>
              <a
                href="#contact"
                className="inline-flex h-11 items-center rounded-lg border border-line px-5 text-[0.9rem] font-medium transition-colors duration-200 hover:bg-surface"
              >
                Contact me
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.24} className="hidden justify-self-end lg:block">
          <SystemDiagram />
        </Reveal>
      </div>
    </section>
  );
}
