# Piyush — Portfolio

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run typecheck
```

## Fill this in before deploying

All copy lives in **one file**: [`content/site.ts`](content/site.ts). Nothing
is hard-coded in components. Every value that I could not verify is marked with
`TODO:` — the UI renders those inertly (placeholder links resolve to `#contact`
instead of 404ing) so an unfinished site never looks broken.

Search the repo for `TODO:` and work through it:

- [ ] `site.url` — your real domain (drives OG tags, canonical URLs, sitemap)
- [ ] `site.email`, `site.links.github`, `site.links.linkedin`, `site.location`
- [ ] `public/resume.pdf` — drop your PDF in, or repoint `site.links.resume`
- [ ] `projects[]` — **replace or delete every entry.** These are empty scaffolds,
      not real projects. Flip `published: true` once an entry is real; that's what
      puts its case study into the sitemap and lets search engines index it.
- [ ] `experience[0].period` / `.location` and the two `TODO:` bullets
- [ ] `about.paragraphs` — the location and the last sentence

## Architecture

```
app/
  layout.tsx            fonts, metadata, JSON-LD, no-flash theme boot
  page.tsx              composes the section components
  work/[slug]/page.tsx  statically generated case studies
  opengraph-image.tsx   OG card generated from content/site.ts
  sitemap.ts robots.ts icon.tsx
components/             one file per section + Section/Reveal primitives
content/site.ts         all copy
lib/links.ts            placeholder-safe href handling
```

Sections are data-driven: adding a stack group or an experience entry means
editing an array, not a component.

## Notes

- **Theme** — `data-theme` on `<html>` is the single source of truth for the
  palette; an inline script stamps it before first paint, so there is no flash.
- **Motion** — Framer Motion is used only for section reveals. `useReducedMotion`
  drops it to plain elements, and `prefers-reduced-motion` also kills the hero
  diagram's CSS animation.
- **Dependencies** — runtime deps are `next`, `react`, `react-dom`,
  `framer-motion`, `geist`. That's the whole list.
- Everything prerenders to static HTML; there are no client-side data fetches.
# latest-portfolio
# latest-portfolio
