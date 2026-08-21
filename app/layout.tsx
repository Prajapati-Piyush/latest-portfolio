import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site, seo, sameAs, stack, experience } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    // Full name in the default title so the site can rank for the name itself.
    default: seo.title,
    template: `%s — ${site.fullName}`,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  publisher: site.fullName,
  applicationName: `${site.fullName} Portfolio`,
  category: "technology",
  openGraph: {
    type: "profile",
    firstName: site.name,
    lastName: site.surname,
    locale: "en_US",
    url: site.url,
    siteName: `${site.fullName} — ${site.role}`,
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    // Paste the token from Search Console → Settings → Ownership verification,
    // or verify by DNS instead and delete this line.
    google: "N6YaxS1pbOtIo0ZwOosOidaTn_m6EcvCCQXOAhGxDUI",
  },
  alternates: { canonical: "/" },
  // Paste the token from Search Console → Settings → Ownership verification,
  // or verify by DNS instead and delete this line.
  // verification: { google: "your-google-site-verification-token" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfb" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1a19" },
  ],
};

/**
 * Runs before first paint so the theme is settled and there's no flash.
 * Stamped as an attribute because globals.css keys the whole palette off it.
 */
const themeBootScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","light")}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personId = `${site.url}/#person`;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: site.fullName,
    givenName: site.name,
    familyName: site.surname,
    jobTitle: site.role,
    description: seo.description,
    url: site.url,
    email: `mailto:${site.email}`,
    image: `${site.url}/opengraph-image`,
    // The profiles that prove this is the same person elsewhere on the web.
    sameAs: [...sameAs],
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    worksFor: {
      "@type": "Organization",
      name: experience[0].company,
    },
    knowsAbout: stack.flatMap((g) => [...g.items]),
  };

  const siteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: `${site.fullName} — ${site.role}`,
    description: seo.description,
    inLanguage: "en",
    publisher: { "@id": personId },
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-canvas"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="mx-auto max-w-[68rem] px-6">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, siteSchema]),
          }}
        />
      </body>
    </html>
  );
}
