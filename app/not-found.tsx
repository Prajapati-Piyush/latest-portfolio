import type { Metadata } from "next";
import Link from "next/link";

// Next emits its own `noindex` for not-found, but the root layout's
// `index, follow` still resolves onto this page — leaving two contradictory
// robots tags. Restating noindex here makes both tags agree.
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col justify-center py-24">
      <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-accent">404</p>
      <h1 className="mt-5 text-[2rem] font-medium tracking-[-0.03em]">Page not found</h1>
      <p className="mt-4 max-w-[46ch] text-[1.0125rem] leading-relaxed text-muted">
        That URL doesn&apos;t resolve to anything. It may have moved, or never existed.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex h-11 w-fit items-center rounded-lg border border-line px-5 text-[0.9rem] font-medium transition-colors duration-200 hover:bg-surface"
        >
          Back home
        </Link>
        {/* A 404 that only offers "home" wastes the visit — and the crawl. */}
        <Link
          href="/work"
          className="inline-flex h-11 w-fit items-center rounded-lg border border-line px-5 text-[0.9rem] font-medium transition-colors duration-200 hover:bg-surface"
        >
          View case studies
        </Link>
      </div>
    </section>
  );
}
