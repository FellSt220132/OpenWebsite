export default function RequirementsPage() {
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
                        Lorem ipsum dolor amet...
                        Aus FA hinauskopieren
                    </p>
                </section>

                {/* Non-functional Requirements */}
                <section className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 shadow-lg">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">
                        Nicht-funktionale Anforderungen
                    </h2>
                    <p className="text-gray-200 leading-relaxed">
                        Lorem Ipsum dolor amet...
                        Aus NFA hinauskopieren
                    </p>
                </section>
            </div>
        </main>
    );
}
