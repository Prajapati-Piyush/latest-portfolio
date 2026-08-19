import { snapshot } from "@/content/site";
import { Reveal } from "./Reveal";

export function Snapshot() {
  return (
    <section aria-label="Engineering snapshot" className="py-14 sm:py-16">
      <Reveal>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
          {snapshot.map((item) => (
            <div key={item.label} className="bg-canvas p-5 sm:p-6">
              <dt className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-faint">
                {item.label}
              </dt>
              <dd className="mt-3 text-[0.975rem] font-medium tracking-tight">{item.value}</dd>
              <dd className="mt-1 text-[0.8125rem] leading-snug text-muted">{item.detail}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
