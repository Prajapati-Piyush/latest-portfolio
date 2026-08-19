import { philosophy } from "@/content/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Philosophy() {
  return (
    <Section id="philosophy" index="04 / Principles" title="How I approach engineering">
      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {philosophy.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <h3 className="border-t border-line pt-5 text-[1.0125rem] font-medium tracking-tight">
              {p.title}
            </h3>
            <p className="mt-3 max-w-[46ch] text-[0.95rem] leading-relaxed text-muted">{p.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
