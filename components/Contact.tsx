import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { clean, isPlaceholder, mailto, resolveHref } from "@/lib/links";

const channels = [
  { label: "GitHub", value: site.links.github },
  { label: "LinkedIn", value: site.links.linkedin },
  { label: "Résumé", value: site.links.resume },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t border-line py-20 sm:py-28"
    >
      <Reveal>
        <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-accent">
          06 / Contact
        </span>
        <h2
          id="contact-heading"
          className="mt-6 max-w-[18ch] text-[1.9rem] font-medium leading-[1.15] tracking-[-0.03em] sm:text-[2.4rem]"
        >
          Open to interesting engineering problems.
        </h2>
        <p className="mt-5 max-w-[52ch] text-[1.0125rem] leading-relaxed text-muted">
          The fastest way to reach me is email. I read everything and reply to anything
          concrete — roles, contract work, or a system you want a second opinion on.
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <a
          href={mailto(site.email)}
          className="mt-9 inline-flex h-12 items-center rounded-lg bg-ink px-6 text-[0.9375rem] font-medium text-canvas transition-opacity duration-200 hover:opacity-88"
        >
          {clean(site.email)}
        </a>
      </Reveal>

      <Reveal delay={0.14}>
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {channels.map((c) => (
            <li key={c.label}>
              <a
                href={resolveHref(c.value)}
                target={c.value.startsWith("/") ? undefined : "_blank"}
                rel="noreferrer noopener"
                className="group inline-flex items-baseline gap-1.5 font-mono text-[0.8125rem] text-muted transition-colors duration-200 hover:text-ink"
              >
                {c.label}
                <span
                  aria-hidden="true"
                  className="text-faint transition-transform duration-200 group-hover:-translate-y-px"
                >
                  ↗
                </span>
                {isPlaceholder(c.value) && (
                  <span className="text-[0.7rem] text-faint">(add link)</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
