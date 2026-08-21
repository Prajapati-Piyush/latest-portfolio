import Link from "next/link";
import { about, site } from "@/content/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { clean } from "@/lib/links";

export function About() {
  return (
    <Section id="about" index="05 / About" title={`About ${site.fullName}`}>
      <Reveal>
        <div className="max-w-[60ch] space-y-5">
          {about.paragraphs.map((p) => (
            <p key={p} className="text-[1.0125rem] leading-[1.75] text-muted">
              {clean(p)}
            </p>
          ))}
          <p className="text-[0.95rem] leading-[1.75] text-muted">
            More detail lives in the{" "}
            <Link href="/work" className="text-ink underline underline-offset-4">
              case studies
            </Link>
            , the{" "}
            <Link href="/#experience" className="text-ink underline underline-offset-4">
              experience
            </Link>{" "}
            section, and the{" "}
            <Link href="/#stack" className="text-ink underline underline-offset-4">
              tech stack
            </Link>
            .
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
