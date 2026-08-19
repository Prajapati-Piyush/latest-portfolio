/**
 * Single source of truth for every piece of copy on the site.
 *
 * Anything wrapped in `TODO:` is a placeholder — nothing here was invented.
 * Edit this file and the whole site updates; no component holds its own copy.
 */

export const site = {
  name: "Piyush",
  role: "Software Engineer",
  // TODO: replace with your real domain before deploying (used for OG tags + sitemap).
  url: "https://piyush.dev",
  positioning:
    "Software Engineer building reliable products, APIs and backend systems.",
  location: "TODO: City, Country",
  email: "TODO: your@email.com",
  links: {
    github: "TODO: https://github.com/your-handle",
    linkedin: "TODO: https://linkedin.com/in/your-handle",
    // Drop your PDF at public/resume.pdf, or point this at an external link.
    resume: "/resume.pdf",
  },
} as const;

export const hero = {
  headline: "I build production software across frontend, backend and asynchronous systems.",
  intro:
    "I'm a software engineer at Growve, where I work on web applications and the services behind them — HTTP APIs, PostgreSQL schemas, background workers and scheduled jobs. I care about systems that behave predictably under load and stay readable a year later.",
} as const;

export const snapshot = [
  { label: "Role", value: "Software Engineer", detail: "Growve Pvt Ltd" },
  { label: "Experience", value: "1+ year", detail: "Professional, production" },
  { label: "Focus", value: "Full-stack", detail: "Backend & systems leaning" },
  {
    label: "Core stack",
    value: "TypeScript",
    detail: "Next.js · Node · Fastify · PostgreSQL",
  },
] as const;

export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  role: string;
  tech: readonly string[];
  problem: string;
  solution: readonly string[];
  outcome: string;
  links?: { label: string; href: string }[];
  /** Set false while the case study is still a placeholder. */
  published: boolean;
};

/**
 * TODO: These are scaffolds, not descriptions of real work.
 * Replace every field with an actual project before publishing —
 * or delete the entry entirely. `published: false` keeps the detail
 * page out of the sitemap until it is real.
 */
export const projects: readonly Project[] = [
  {
    slug: "project-one",
    title: "TODO: Project name",
    summary:
      "TODO: One or two sentences on what this system does and who uses it.",
    year: "TODO: 2025",
    role: "TODO: e.g. Sole engineer / Backend",
    tech: ["Next.js", "Fastify", "PostgreSQL", "BullMQ", "Docker"],
    problem:
      "TODO: What was broken or missing before this existed? State it concretely — the constraint, the failure mode, the manual process it replaced.",
    solution: [
      "TODO: The key architectural decision and why you made it.",
      "TODO: How data moves through the system — request path, queue, worker, storage.",
      "TODO: A trade-off you accepted and what it cost you.",
    ],
    outcome:
      "TODO: What changed after shipping. Only claim what you can point at — no invented metrics.",
    published: false,
  },
  {
    slug: "project-two",
    title: "TODO: Project name",
    summary: "TODO: One or two sentences on scope and purpose.",
    year: "TODO: 2025",
    role: "TODO: Your role",
    tech: ["React", "Node.js", "PostgreSQL", "Schedulers"],
    problem: "TODO: The problem.",
    solution: ["TODO: The approach.", "TODO: Notable implementation detail."],
    outcome: "TODO: The result.",
    published: false,
  },
  {
    slug: "project-three",
    title: "TODO: Project name",
    summary: "TODO: One or two sentences on scope and purpose.",
    year: "TODO: 2024",
    role: "TODO: Your role",
    tech: ["Next.js", "TypeScript", "Docker"],
    problem: "TODO: The problem.",
    solution: ["TODO: The approach."],
    outcome: "TODO: The result.",
    published: false,
  },
];

export const experience = [
  {
    company: "Growve Pvt Ltd",
    role: "Software Engineer",
    // TODO: confirm your actual start date.
    period: "TODO: Month 2024 — Present",
    location: "TODO: City / Remote",
    summary:
      "Working on production web applications and the backend services that support them.",
    /**
     * TODO: Rewrite these against what you actually shipped.
     * Each bullet is scoped to the stack you named — keep them factual,
     * add the specific system or feature, and only add numbers you can verify.
     */
    bullets: [
      "Build and maintain features across the stack — React and Next.js on the client, Node.js and Fastify services behind them.",
      "Design and evolve PostgreSQL schemas and queries for the application's core data.",
      "Implement asynchronous work with BullMQ — background jobs, queue consumers and scheduled tasks that run outside the request path.",
      "Containerise services with Docker for consistent local and deployed environments.",
      "TODO: Add a bullet about a specific system you owned end to end.",
      "TODO: Add a bullet about reliability, debugging or performance work.",
    ],
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "Fastify",
      "PostgreSQL",
      "BullMQ",
      "Docker",
    ],
  },
] as const;

export const stack = [
  {
    group: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  { group: "Backend", items: ["Node.js", "Fastify", "REST APIs"] },
  { group: "Database", items: ["PostgreSQL", "SQL", "Schema design"] },
  {
    group: "Async & Infrastructure",
    items: ["BullMQ", "Workers", "Schedulers / Cron", "Redis", "Docker"],
  },
  { group: "Tools", items: ["Git", "GitHub", "Postman", "Linux"] },
] as const;

export const philosophy = [
  {
    title: "Boring systems win",
    body: "Predictable code beats clever code. I reach for the simplest structure that solves the problem, and leave the complexity budget for the parts that genuinely need it.",
  },
  {
    title: "Design the failure path",
    body: "Anything crossing a network will fail eventually. Retries, idempotency and timeouts belong in the first version of a job or endpoint, not a follow-up ticket.",
  },
  {
    title: "The database is the contract",
    body: "Most application bugs are data-model bugs wearing a disguise. I'd rather spend an extra hour on the schema than a week on the queries built over a bad one.",
  },
  {
    title: "Readable beats short",
    body: "Code is read far more often than it is written. I optimise for the engineer — often me — who opens the file six months from now with no context.",
  },
] as const;

export const about = {
  paragraphs: [
    "I'm a software engineer based in TODO: location. I started out on the frontend and drifted toward the systems underneath it — the APIs, the queues, and the jobs that run at 3am when nobody is watching.",
    "Right now most of my time goes to production work at Growve: shipping features, keeping services healthy, and getting better at the unglamorous parts of engineering — debugging, schema design, and writing code other people can maintain.",
    "TODO: One honest sentence about you outside of work.",
  ],
} as const;
