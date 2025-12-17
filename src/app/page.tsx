export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero */}
      <section className="bg-linear-to-r from-cyan-600 via-blue-500 to-purple-600 text-gray-100 py-32 px-6 rounded-b-3xl shadow-lg relative">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-center drop-shadow-lg">
          OpenTurret – Real Life Aimbot
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-center max-w-2xl mx-auto drop-shadow-md">
          Willkommen! Dies ist die offizielle Projektseite für{" "}
          <span className="text-cyan-300 font-bold">OpenTurret</span>, ein Geschützturm mit
          Objekterkennung, Tracking und Controller-Steuerung.
        </p>
      </section>

      {/* Sections */}
      <section className="mt-16 grid gap-12">
        <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-cyan-400 mb-4">Preview</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li className="hover:text-cyan-300 transition-colors cursor-pointer">Beschreibung des Projekts</li>
            <li className="hover:text-cyan-300 transition-colors cursor-pointer">Technische Architektur</li>
            <li className="hover:text-cyan-300 transition-colors cursor-pointer">Anforderungen & Konzepte</li>
            <li className="hover:text-cyan-300 transition-colors cursor-pointer">Entwicklungsverlauf</li>
            <li className="hover:text-cyan-300 transition-colors cursor-pointer">Team</li>
          </ul>
        </div>

        {/* OpenTurret ist goated */}
        <p className="text-gray-300 text-lg sm:text-xl text-center">
          Nutze die Navigation oben, um mehr über <span className="text-cyan-300 font-semibold">OpenTurret</span> zu erfahren.
        </p>
      </section>
    </main>
  );
}
