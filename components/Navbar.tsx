"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";
import { isPlaceholder, resolveHref } from "@/lib/links";

const sections = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  // Lock the page behind the mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const external = [
    { label: "GitHub", href: site.links.github },
    { label: "LinkedIn", href: site.links.linkedin },
    { label: "Résumé", href: site.links.resume },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-canvas/80 backdrop-blur-md"
          : "border-transparent bg-canvas"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[68rem] items-center justify-between px-6"
      >
        <Link
          href="/"
          className="text-[0.95rem] font-medium tracking-tight transition-opacity duration-200 hover:opacity-70"
        >
          {site.name}
          <span className="ml-2 text-accent">{site.surname}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={active === s.id ? "true" : undefined}
              className={`rounded-md px-3 py-2 text-[0.875rem] transition-colors duration-200 hover:text-ink ${
                active === s.id ? "text-ink" : "text-muted"
              }`}
            >
              {s.label}
            </a>
          ))}

          <span aria-hidden="true" className="mx-3 h-4 w-px bg-line" />

          {external.map((l) => (
            <a
              key={l.label}
              href={resolveHref(l.href)}
              target={l.href.startsWith("/") ? undefined : "_blank"}
              rel="noreferrer noopener"
              title={isPlaceholder(l.href) ? "Placeholder — set in content/site.ts" : undefined}
              className="rounded-md px-3 py-2 text-[0.875rem] text-muted transition-colors duration-200 hover:text-ink"
            >
              {l.label}
            </a>
          ))}

          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-9 place-items-center rounded-md text-muted transition-colors hover:bg-surface hover:text-ink"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-[18px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            >
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-line bg-canvas px-6 pb-8 pt-4 md:hidden"
        >
          <ul className="flex flex-col">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3.5 text-lg tracking-tight"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.8rem] text-muted">
            {external.map((l) => (
              <li key={l.label}>
                <a
                  href={resolveHref(l.href)}
                  target={l.href.startsWith("/") ? undefined : "_blank"}
                  rel="noreferrer noopener"
                >
                  {l.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
