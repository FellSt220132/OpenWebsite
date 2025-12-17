export default function RequirementsPage() {
    {/* Why would YOU care about Requirements? */ }
    return (
        <main className="space-y-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-cyan-400 text-center">
                Anforderungen
            </h1>

            <div className="space-y-6">

                {/* Functional Requirements */}
                <section className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 shadow-lg">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">
                        Funktionale Anforderungen
                    </h2>
                    <p className="text-gray-200 leading-relaxed">
                        Die funktionalen Anforderungen verlangen:

                        Eine Objekterkennung mit 80% oder mehr Sicherheit bei optimalem Licht
                        Konfigurierbare Zielauswahl
                        Bewegung in Richtung Ziel mit weniger als 500ms Latenz
                        Lenken, Schussbefehl und Zielwahl müssen möglich sein
                        Schüsse müssen freigegeben werden
                        Notaus vorhanden
                        Verbindung Laptop / Controller
                    </p>
                </section>

                {/* Non-functional Requirements */}
                <section className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 shadow-lg">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">
                        Nicht-funktionale Anforderungen
                    </h2>
                    <p className="text-gray-200 leading-relaxed">
                        Die nicht funktionalen Anforderungen verlangen:

                        Bewältigung des TdoT mit mehr als 90% Uptime
                        Funktionalität bei normalen Temperaturen (0-40 Grad Celsius)
                        Keine Speicherung von Bildern
                        Progress Report und Versionsverwaltung für Wartbarkeit
                        Ggf. Lautsprecher - PC Verwendbar
                        Ggf. Markierte Gefahrzonen
                        Ggf. Laser
                    </p>
                </section>
            </div>
        </main>
    );
}
