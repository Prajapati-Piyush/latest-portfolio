import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col justify-center py-24">
      <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-accent">404</p>
      <h1 className="mt-5 text-[2rem] font-medium tracking-[-0.03em]">Page not found</h1>
      <p className="mt-4 max-w-[46ch] text-[1.0125rem] leading-relaxed text-muted">
        That URL doesn&apos;t resolve to anything. It may have moved, or never existed.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 w-fit items-center rounded-lg border border-line px-5 text-[0.9rem] font-medium transition-colors duration-200 hover:bg-surface"
      >
        Back home
      </Link>
    </section>
  );
}
