import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import { absoluteUrl, SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: {
    default: "Niklas Blum – Freelance Webentwickler für React & Next.js",
    template: "%s | Niklas Blum",
  },
  description:
    "Freelance Webentwickler für Vereine, Unternehmen und Einzelpersonen. Moderne Websites und Webanwendungen mit React, Next.js und TypeScript – direkt, persönlich und zuverlässig.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: absoluteUrl("/"),
    siteName: "Niklas Blum",
    title: "Niklas Blum – Freelance Webentwickler für React & Next.js",
    description:
      "Websites und Webanwendungen für Vereine, Unternehmen und Einzelpersonen.",
    images: [{ url: "/Headshot.webp", alt: "Niklas Blum, Webentwickler" }],
  },
  twitter: {
    card: "summary",
    title: "Niklas Blum – Freelance Webentwickler für React & Next.js",
    description:
      "Websites und Webanwendungen für Vereine, Unternehmen und Einzelpersonen.",
    images: ["/Headshot.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem("theme");
                  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  const theme = saved === "dark" ? "dark" : saved === "light" ? "light" : prefersDark ? "dark" : "light";
                  document.documentElement.classList.toggle("dark", theme === "dark");
                  document.documentElement.setAttribute("data-theme", theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          {children}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Niklas Blum",
                url: absoluteUrl("/"),
                image: absoluteUrl("/Headshot.webp"),
                jobTitle: "Freelance Webentwickler",
                email: "mailto:niklas.blum97@gmail.com",
                knowsAbout: [
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Webentwicklung",
                  "Sanity CMS",
                ],
                sameAs: [
                  "https://www.linkedin.com/in/niklas-blum/",
                  "https://github.com/NiklasBlum",
                ],
              }),
            }}
          />
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
