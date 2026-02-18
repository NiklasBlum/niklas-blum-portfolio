import Link from "next/link";

export default function Impressum() {
  return (
    <main className="min-h-[85vh] bg-slate-800 text-white py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
          <p className="text-gray-300 leading-relaxed">
            Niklas Blum
            <br />
            Musterstraße 123
            <br />
            12345 Musterstadt
            <br />
            Deutschland
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
          <p className="text-gray-300 leading-relaxed">
            E-Mail:{" "}
            <a
              href="mailto:niklas.blum97@gmail.com"
              className="underline hover:text-white"
            >
              niklas.blum97@gmail.com
            </a>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Niklas Blum
            <br />
            Musterstraße 123
            <br />
            12345 Musterstadt
          </p>
        </section>

        {/* Back link */}
        <Link
          href="/"
          className="inline-block text-sm text-gray-400 hover:text-white transition"
        >
          ← Zurück Zur Startseite
        </Link>
      </div>
    </main>
  );
}
