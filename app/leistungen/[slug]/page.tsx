import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICE_PAGES } from "@/constants/service-pages";
import { absoluteUrl } from "@/constants/site";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICE_PAGES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_PAGES.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/leistungen/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: absoluteUrl(`/leistungen/${service.slug}`),
      type: "article",
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICE_PAGES.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "Person",
      name: "Niklas Blum",
      url: absoluteUrl("/"),
    },
  };

  return (
    <main className="min-h-screen bg-white px-4 py-16 text-gray-900 dark:bg-slate-950 dark:text-white sm:px-6 md:py-24">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/leistungen"
          className="mb-8 inline-block font-medium text-blue-700 hover:underline dark:text-blue-300"
        >
          ← Alle Leistungen
        </Link>
        <p className="mb-3 font-semibold text-blue-700 dark:text-blue-300">
          Freelance Webentwicklung · Zusammenarbeit auch remote
        </p>
        <h1 className="mb-6 text-4xl font-bold sm:text-5xl">{service.title}</h1>
        <p className="mb-12 text-lg leading-8 text-gray-700 dark:text-gray-300">
          {service.intro}
        </p>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Worum es bei Ihrem Projekt geht</h2>
          <p className="leading-8 text-gray-700 dark:text-gray-300">
            {service.challenge}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">So gehe ich vor</h2>
          <ol className="list-decimal space-y-3 pl-6 leading-8 text-gray-700 dark:text-gray-300">
            {service.approach.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Wobei ich unterstützen kann</h2>
          <ul className="list-disc space-y-3 pl-6 leading-8 text-gray-700 dark:text-gray-300">
            {service.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-5 text-2xl font-bold">Häufige Fragen</h2>
          <div className="space-y-6">
            {service.questions.map(({ question, answer }) => (
              <div key={question}>
                <h3 className="mb-2 text-lg font-semibold">{question}</h3>
                <p className="leading-7 text-gray-700 dark:text-gray-300">
                  {answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl bg-gray-100 p-6 dark:bg-slate-900 sm:p-8">
          <h2 className="mb-3 text-2xl font-bold">
            Sie planen ein passendes Projekt?
          </h2>
          <p className="mb-5 leading-7 text-gray-700 dark:text-gray-300">
            Beschreiben Sie mir kurz Ihr Vorhaben. Gemeinsam klären wir, welcher
            nächste Schritt sinnvoll ist.
          </p>
          <Link
            href="/#contact"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Projekt besprechen
          </Link>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </main>
  );
}
