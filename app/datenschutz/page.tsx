import Link from "next/link";

export default function Datenschutz() {
  return (
    <main className="min-h-[85vh] bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            1. Datenschutz auf einen Blick
          </h2>
          <h3 className="text-xl font-semibold mb-2">Allgemeine Hinweise</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Verantwortlicher</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Der Verantwortliche für die Datenverarbeitung auf dieser Website im
            Sinne der DSGVO ist:
            <br />
            <br />
            Niklas Blum
            <br />
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
            3. Dauer der Speicherung von Daten
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere
            Speicherdauer genannt wurde, werden Ihre personenbezogenen Daten bei
            uns gelöscht oder gesperrt, sobald der Zweck der Speicherung
            entfällt.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Ihre Rechte</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Sie haben das Recht:
          </p>
          <ul className="text-gray-600 dark:text-gray-300 leading-relaxed list-disc list-inside ml-4">
            <li>
              Auskunft über Ihre verarbeiteten Daten zu erhalten (Art. 15 DSGVO)
            </li>
            <li>Unrichtige Daten berichtigen zu lassen (Art. 16 DSGVO)</li>
            <li>
              Daten löschen zu lassen, soweit gesetzliche Aufbewahrungspflichten
              es zulassen (Art. 17 DSGVO)
            </li>
            <li>Die Verarbeitung einzuschränken (Art. 18 DSGVO)</li>
            <li>Der Verarbeitung zu widersprechen (Art. 21 DSGVO)</li>
            <li>Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)</li>
            <li>
              Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen (Art.
              77 DSGVO)
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            5. Erfassung allgemeiner Daten und Informationen
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Die Website erfasst mit jedem Aufruf durch einen Internetbrowser
            automatisch Informationen durch die Server-Logdateien. Diese
            Informationen sind:
          </p>
          <ul className="text-gray-600 dark:text-gray-300 leading-relaxed list-disc list-inside ml-4">
            <li>Die IP-Adresse des Benutzers</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Die aufgerufene Website/Datei</li>
            <li>Die Website, von welcher aus Sie uns erreichten (Referrer)</li>
            <li>Verwendeter Browser und Gerättyp</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
            Diese Daten werden nicht mit anderen Datenquellen zusammengeführt
            und werden nach spätestens 7 Tagen gelöscht.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Kontaktformular</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Falls vorhanden, werden bei der Nutzung des Kontaktformulars Ihre
            Angaben für die Beantwortung Ihrer Anfrage verarbeitet. Eine
            Weitergabe Ihrer Daten an Dritte findet nicht statt. Die Daten
            werden gelöscht, sobald sie für die Erreichung des Zweckes, für den
            sie erhoben wurden, nicht mehr erforderlich sind.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Diese Website verwendet keine Cookies zur Verfolgung oder
            Personalisierung.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Externe Links</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Diese Website enthält möglicherweise Links zu externen Websites. Wir
            haben keinen Einfluss auf den Inhalt dieser Websites und können
            daher keine Verantwortung für diese übernehmen. Der jeweilige
            Anbieter oder Betreiber ist allein verantwortlich für die Inhalte
            der verlinkten Seiten.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            9. Änderungen dieser Datenschutzerklärung
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
            sie stets den aktuellen rechtlichen Anforderungen entspricht. Bei
            einer erneuten Nutzung gilt dann die neue Datenschutzerklärung.
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
