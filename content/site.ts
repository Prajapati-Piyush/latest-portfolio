/**
 * Single source of truth for every piece of copy on the site.
 *
 * Anything wrapped in `TODO:` is a placeholder — nothing here was invented.
 * Edit this file and the whole site updates; no component holds its own copy.
 */

export const site = {
  name: "Piyush",
  surname: "Prajapati",
  role: "Software Engineer",
  // TODO: replace with your real domain before deploying (used for OG tags + sitemap).
  url: "https://piyush.dev",
  positioning:
    "Software Engineer building scalable full-stack, backend, and AI-powered systems.",
  location: "Mumbai, India",
  email: "piyushprajapati0507@gmail.com",
  links: {
    github: "https://github.com/Prajapati-Piyush",
    linkedin: "https://www.linkedin.com/in/piyush-prajapati-b152982a8/",
    // Drop your PDF at public/resume.pdf, or point this at an external link.
    resume: "/resume.pdf",
  },
} as const;

export const hero = {
  headline: "Software Engineer building scalable full-stack, backend, and AI-powered systems.",
  intro:
    "I’m a software engineer focused on full-stack development, backend architecture, asynchronous systems, and Generative AI. I design and build scalable, reliable software with a focus on clean architecture, performance, maintainability, and solving complex engineering problems.",
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
    slug: "crm-logistics-platform",
    title: "CRM & Logistics Platform",
    summary:
      "A multi-tenant CRM ecosystem supporting multiple companies and organizations across seller operations, supplier workflows, order management, sourcing, and logistics fulfillment.",
    year: "2026",
    role: "Software Engineer",
    tech: [
      "Next.js",
      "Node.js",
      "Fastify",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Docker",
    ],
    problem:
      "The platform needed reliable, scalable workflows to manage multi-organization operations, cross-system orders, logistics fulfillment, and automated background processes.",
    solution: [
      "Built full-stack features and backend services using Next.js, Node.js, and Fastify.",

      "Worked on multi-tenant PostgreSQL architecture, supporting multiple companies and organizations with isolated business data.",

      "Developed seller and supplier workflows covering orders, inventory, sourcing, and fulfillment.",

      "Integrated Blue Dart APIs and webhooks through ShipNow for shipment and delivery workflows.",

      "Implemented Redis and BullMQ queues with background workers for asynchronous processing and notifications.",

      "Built a scheduled invoice-report workflow using cron jobs, workers, PDF generation, and automated email delivery.",

    ],
    outcome:
      "Contributed to production-grade CRM and logistics workflows while gaining hands-on experience in scalable backend architecture, asynchronous processing, third-party integrations, and automation.",
    published: true,
  },

  {
    slug: "preppilot-resume-ai",
    title: "PrepPilot — AI Interview Preparation Assistant",
    summary:
      "An AI-powered platform that analyzes resumes and job descriptions to generate personalized technical and HR interview preparation reports.",
    year: "2026",
    role: "Full-Stack Developer / AI Developer",
    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Gemini",
      "Tailwind CSS",
    ],
    problem:
      "Candidates often spend significant time manually analyzing job descriptions and researching potential interview questions without knowing which skills and topics are most relevant to their target role.",
    solution: [
      "Built a full-stack application that accepts resume PDFs and target job descriptions for analysis.",
      "Integrated Google Gemini to extract relevant skills, analyze job requirements, and generate personalized interview preparation content.",
      "Implemented authentication and persistent report storage using MongoDB so users can access previously generated preparation reports.",
    ],
    outcome:
      "Created an end-to-end GenAI application that combines document analysis, job matching, AI-generated interview preparation, authentication, and persistent user reports.",
    published: true,
  },

  {
    slug: "background-removal",
    title: "AI Background Remover",
    summary:
      "An AI-powered image processing application that automatically removes backgrounds from uploaded images and produces clean foreground assets.",
    year: "2026",
    role: "Full-Stack Developer / AI Developer",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "AI Image Processing",
    ],
    problem:
      "Removing image backgrounds manually can be time-consuming for users who need clean product, profile, or creative assets.",
    solution: [
      "Built an application that accepts user-uploaded images and processes them through an AI-powered background removal workflow.",
      "Designed the upload, processing, preview, and output flow to provide a simple experience from image submission to the final result.",
    ],
    outcome:
      "Built a practical AI-powered image processing application demonstrating full-stack development and hands-on experience integrating AI capabilities into user-facing products.",
    published: true,
  },
];

export const experience = [
  {
    company: "Growve Pvt Ltd",
    role: "Software Engineer",
    period: "September 2025 — Present",
    location: "Mumbai",

    summary:
      "Build and maintain production-grade full-stack applications, backend services, and scalable business workflows across CRM and logistics platforms.",

    bullets: [
      "Develop full-stack features using Next.js, React, Node.js, and Fastify across seller and supplier CRM workflows.",

      "Work with PostgreSQL and multi-tenant architecture to support multiple companies and organizations with isolated business data.",

      "Build shipment and fulfillment workflows through ShipNow, including Blue Dart API integrations and webhook-based event handling.",

      "Implement asynchronous processing with Redis and BullMQ, using queues and background workers for notifications, scheduled jobs, and business workflows.",

      "Develop automated backend workflows using cron schedulers, including invoice PDF generation and daily email delivery through background workers.",

      "Design and maintain REST APIs, database operations, and backend services with a focus on reliability, maintainability, and scalable architecture.",
    ],

    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Fastify",
      "PostgreSQL",
      "Redis",
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

  {
    group: "Backend",
    items: ["Node.js", "Fastify", "REST APIs"],
  },

  {
    group: "Database",
    items: ["PostgreSQL", "SQL", "Schema Design"],
  },

  {
    group: "AI & GenAI",
    items: [
      "LLM Integration",
      "AI API Integration",
      "RAG",
      "Embeddings",
    ],
  },

  {
    group: "Async & Infrastructure",
    items: ["BullMQ", "Redis", "Background Workers", "Schedulers / Cron"],
  },

  {
    group: "Tools",
    items: ["Git", "GitHub", "Postman", "Docker"],
  },
] as const;

export const philosophy = [
  {
    title: "Keep it simple",
    body: "I prefer clear, predictable solutions over unnecessary complexity. I focus on building systems that are easy to understand, maintain, and improve as the product grows.",
  },

  {
    title: "Build for reliability",
    body: "Failures are part of real-world software. I think about error handling, validation, retries, and edge cases early so applications remain dependable when things don't go as planned.",
  },

  {
    title: "Get the data model right",
    body: "A well-designed data model makes everything built on top of it easier. I pay close attention to schemas, relationships, queries, and data consistency before adding more application logic.",
  },

  {
    title: "Write code for people",
    body: "Good code should be easy to read and understand. I value meaningful names, clear structure, and maintainable code that another developer can confidently work with later.",
  },
] as const;

export const about = {
  paragraphs: [
    "I'm a software developer focused on building modern web applications and backend systems. I enjoy working across the stack — from building responsive interfaces with Next.js and React to designing APIs, databases, and background workflows.",
    
    "I'm particularly interested in backend engineering and GenAI applications, where I can work with APIs, asynchronous processing, data modeling, and AI-powered features. I care about writing clean, maintainable code and understanding how the pieces of a system work together.",
    
    "Outside of coding, I'm always exploring new technologies, building projects, and looking for better ways to turn ideas into reliable software.",
  ],
} as const;
