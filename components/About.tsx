import { about } from "@/content/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { clean } from "@/lib/links";

export function About() {
  return (
    <Section id="about" index="05 / About" title="About">
      <Reveal>
        <div className="max-w-[60ch] space-y-5">
          {about.paragraphs.map((p) => (
            <p key={p} className="text-[1.0125rem] leading-[1.75] text-muted">
              {clean(p)}
            </p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
