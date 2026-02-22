import Link from "next/link";

export default function Impressum() {
  return (
    <main className="min-h-[85vh] bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Niklas Blum
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            E-Mail:{" "}
            <a
              href="mailto:niklas.blum97@gmail.com"
              className="underline hover:text-gray-900 dark:hover:text-white"
            >
              niklas.blum97@gmail.com
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Niklas Blum
            <br />
            E-Mail:{" "}
            <a
              href="mailto:niklas.blum97@gmail.com"
              className="underline hover:text-gray-900 dark:hover:text-white"
            >
              niklas.blum97@gmail.com
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Haftungsausschluss (Disclaimer)
          </h2>
          <h3 className="text-xl font-semibold mb-2">Haftung für Inhalte</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 des TMG bin ich als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>

          <h3 className="text-xl font-semibold mb-2">Haftung für Links</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Meine Website enthält Links zu externen Websites Dritter, auf deren
            Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden
            Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
            Seiten ist stets die jeweilige Anbieter oder Betreiber der Seiten
            verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
            Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Bei
            Bekanntwerden von Rechtsverletzungen werde ich derartige Links
            umgehend entfernen.
          </p>

          <h3 className="text-xl font-semibold mb-2">Urheberrecht</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des Autors oder Erstellers. Downloads und
            Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
            Gebrauch gestattet.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Datenschutz</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Informationen zum Datenschutz finden Sie in unserer{" "}
            <Link
              href="/datenschutz"
              className="underline hover:text-gray-900 dark:hover:text-white"
            >
              Datenschutzerklärung
            </Link>
            .
          </p>
        </section>

        {/* Back link */}
        <Link
          href="/"
          className="inline-block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition"
        >
          ← Zurück Zur Startseite
        </Link>
      </div>
    </main>
  );
}
