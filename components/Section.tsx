import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  lede?: string;
  children: ReactNode;
};

/**
 * Every section shares one rhythm: a mono index + rule, a title, an optional
 * lede, then content. Consistency here is most of the "premium" feel.
 */
export function Section({ id, index, title, lede, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24 py-20 sm:py-28">
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-accent">
            {index}
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-line" />
        </div>
        <h2
          id={`${id}-heading`}
          className="mt-6 text-2xl font-medium tracking-tight sm:text-[1.75rem]"
        >
          {title}
        </h2>
        {lede && (
          <p className="mt-3 max-w-2xl text-[0.975rem] leading-relaxed text-muted">{lede}</p>
        )}
      </Reveal>
      <div className="mt-10 sm:mt-12">{children}</div>
    </section>
  );
}
