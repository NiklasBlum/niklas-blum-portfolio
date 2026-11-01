import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webentwicklung – Leistungen",
  description:
    "React- und Next.js-Entwicklung, CMS-Websites und technische Website-Optimierung für Vereine, Unternehmen und Einzelpersonen.",
  alternates: { canonical: "/leistungen" },
};

const services = [
  {
    href: "/leistungen/nextjs-entwicklung",
    title: "React- und Next.js-Entwicklung",
    description:
      "Webanwendungen entwickeln, bestehende Projekte erweitern und APIs anbinden.",
  },
  {
    href: "/leistungen/cms-websites",
    title: "Websites mit CMS",
    description:
      "Responsive Websites, deren Inhalte Ihr Team eigenständig aktualisieren kann.",
  },
  {
    href: "/leistungen/website-optimierung",
    title: "Website-Optimierung & Weiterentwicklung",
    description:
      "Bestehende Seiten gezielt bei Performance, Bedienbarkeit und technischer Qualität verbessern.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-16 text-gray-900 dark:bg-slate-950 dark:text-white sm:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 font-semibold text-blue-700 dark:text-blue-300">
          Webentwicklung · React · Next.js
        </p>
        <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
          Webentwicklung für Vereine, Unternehmen und Einzelpersonen
        </h1>
        <p className="mb-12 max-w-3xl text-lg leading-8 text-gray-700 dark:text-gray-300">
          Als Freelance Webentwickler unterstütze ich Vereine, Unternehmen und
          Einzelpersonen bei React- und Next.js-Projekten – von der neuen
          CMS-Website bis zur Weiterentwicklung einer bestehenden Anwendung. Sie
          stimmen sich direkt mit mir ab und erhalten eine technische Lösung,
          die sich an Ihrem konkreten Bedarf orientiert.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.href}
              className="rounded-xl border border-gray-200 p-6 shadow-sm dark:border-gray-700 dark:bg-slate-900"
            >
              <h2 className="mb-3 text-xl font-bold">{service.title}</h2>
              <p className="mb-5 leading-7 text-gray-700 dark:text-gray-300">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="font-semibold text-blue-700 underline-offset-4 hover:underline dark:text-blue-300"
              >
                Mehr erfahren
              </Link>
            </article>
          ))}
        </div>

        <section className="mt-16 border-t border-gray-200 pt-10 dark:border-gray-700">
          <h2 className="mb-4 text-2xl font-bold">
            Persönliche und flexible Zusammenarbeit
          </h2>
          <p className="max-w-3xl leading-8 text-gray-700 dark:text-gray-300">
            Ich unterstütze Kundinnen und Kunden unabhängig vom Standort.
            Abstimmungen und Umsetzung erfolgen flexibel und bei Bedarf remote.
            Vor dem Start klären wir Ziele, Umfang und technische
            Rahmenbedingungen transparent.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/referenzen"
              className="rounded-lg border border-gray-300 px-5 py-3 font-semibold hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-slate-900"
            >
              Referenzen ansehen
            </Link>
            <Link
              href="/#contact"
              className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Projekt besprechen
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
