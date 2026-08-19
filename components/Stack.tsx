import { stack } from "@/content/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Stack() {
  return (
    <Section
      id="stack"
      index="03 / Stack"
      title="Tech stack"
      lede="Tools I've used in production, grouped by where they sit in the system."
    >
      <dl className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
        {stack.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.04} className="bg-canvas p-6 sm:p-7">
            <dt className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent">
              {group.group}
            </dt>
            <dd className="mt-4">
              <ul className="flex flex-wrap gap-x-2 gap-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-surface px-2.5 py-1.5 text-[0.8125rem] text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
