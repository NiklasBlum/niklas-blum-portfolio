import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { REFERENCES } from "@/constants/references";
import { absoluteUrl } from "@/constants/site";

interface ReferencePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return REFERENCES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ReferencePageProps): Promise<Metadata> {
  const { slug } = await params;
  const reference = REFERENCES.find((item) => item.slug === slug);

  if (!reference) {
    return {};
  }

  return {
    title: reference.title,
    description: reference.metaDescription,
    alternates: { canonical: `/referenzen/${reference.slug}` },
    openGraph: {
      title: reference.title,
      description: reference.metaDescription,
      url: absoluteUrl(`/referenzen/${reference.slug}`),
      images: [{ url: reference.image, alt: reference.imageAlt }],
      type: "article",
    },
  };
}

export default async function ReferenceDetailPage({
  params,
}: ReferencePageProps) {
  const { slug } = await params;
  const reference = REFERENCES.find((item) => item.slug === slug);

  if (!reference) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-4 py-16 text-gray-900 dark:bg-slate-950 dark:text-white sm:px-6 md:py-24">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/referenzen"
          className="mb-8 inline-block font-medium text-blue-700 hover:underline dark:text-blue-300"
        >
          ← Alle Referenzen
        </Link>
        <p className="mb-3 font-semibold uppercase tracking-wide text-orange-700 dark:text-orange-300">
          {reference.label}
        </p>
        <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
          {reference.title}
        </h1>
        <p className="mb-10 text-lg leading-8 text-gray-700 dark:text-gray-300">
          {reference.summary}
        </p>
        <div className="relative mb-12 aspect-video overflow-hidden rounded-xl">
          <Image
            src={reference.image}
            alt={reference.imageAlt}
            fill
            priority
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold">Projektkontext</h2>
          <p className="leading-8 text-gray-700 dark:text-gray-300">
            {reference.context}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold">Mein Beitrag</h2>
          <p className="leading-8 text-gray-700 dark:text-gray-300">
            {reference.contribution}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold">Umfang der Website</h2>
          <ul className="list-disc space-y-2 pl-6 leading-8 text-gray-700 dark:text-gray-300">
            {reference.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>

        <a
          href={reference.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Website besuchen
        </a>
        <p className="mt-10 border-t border-gray-200 pt-6 text-gray-600 dark:border-gray-700 dark:text-gray-400">
          Sie planen ein ähnliches Vorhaben?{" "}
          <Link
            href="/#contact"
            className="font-semibold text-blue-700 underline dark:text-blue-300"
          >
            Sprechen Sie mich an.
          </Link>
        </p>
      </article>
    </main>
  );
}
