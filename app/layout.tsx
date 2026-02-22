import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

export const metadata: Metadata = {
  title: "Portfolio - Niklas Blum",
  description:
    "Persönliches Portfolio von Niklas Blum, Frontend-Webentwickler.",
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
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
