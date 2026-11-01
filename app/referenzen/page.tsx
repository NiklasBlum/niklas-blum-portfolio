import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { REFERENCES } from "@/constants/references";

export const metadata: Metadata = {
  title: "Referenzen – ausgewählte Webprojekte",
  description:
    "Einblicke in ausgewählte Webprojekte und Kooperationen von Niklas Blum: Vereinswebsite und Community-Website mit transparent beschriebenem Projektbeitrag.",
  alternates: { canonical: "/referenzen" },
};

export default function ReferencesPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-16 text-gray-900 dark:bg-slate-950 dark:text-white sm:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 font-semibold text-blue-700 dark:text-blue-300">
          Ausgewählte Webprojekte
        </p>
        <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
          Referenzen und Kooperationen
        </h1>
        <p className="mb-12 max-w-3xl text-lg leading-8 text-gray-700 dark:text-gray-300">
          Hier finden Sie Einblicke in Websites, die ich für Organisationen
          entwickelt habe. Bei jedem Projekt beschreibe ich transparent den
          Kontext und meinen Beitrag.
        </p>

        <div className="grid gap-8">
          {REFERENCES.map((reference) => (
            <article
              key={reference.slug}
              className="overflow-hidden rounded-xl border border-gray-200 shadow-sm dark:border-gray-700 dark:bg-slate-900 md:grid md:grid-cols-2"
            >
              <div className="relative aspect-video md:aspect-auto">
                <Image
                  src={reference.image}
                  alt={reference.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-orange-700 dark:text-orange-300">
                  {reference.label}
                </p>
                <h2 className="mb-3 text-2xl font-bold">{reference.title}</h2>
                <p className="mb-5 leading-7 text-gray-700 dark:text-gray-300">
                  {reference.summary}
                </p>
                <Link
                  href={`/referenzen/${reference.slug}`}
                  className="font-semibold text-blue-700 underline-offset-4 hover:underline dark:text-blue-300"
                >
                  Projekt-Details ansehen
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
