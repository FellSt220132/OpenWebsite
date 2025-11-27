export default function ProjectPage() {
    const features = [
        { title: "Objekterkennung", desc: "Erkennt Objekte mithilfe der TFLite Python Bibliothek und wandelt erkanntes Bild in Befehle für Microcontroller um" },
        { title: "Steuerung", desc: "Steuerung per Controller (--> Pygame Bibliothek) und Tastatur möglich. UI wird auch in Python generiert" },
        { title: "Trackingsystem", desc: "Von der Python Datei ausgegebenen Koordinaten und Befehle werden indirekt an Stepper Motoren weitergegeben" },
    ];

    return (
        <main className="grid gap-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-cyan-400 text-center">Projektbeschreibung</h1>
            <p className="text-gray-300 text-lg sm:text-xl text-center max-w-2xl mx-auto mb-8">
                Softwarekomponenten unseres Projekts
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
                {features.map((f) => (
                    <div key={f.title} className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 hover:scale-105 transition-transform shadow-lg cursor-pointer">
                        <h2 className="text-2xl font-semibold text-cyan-300 mb-2">{f.title}</h2>
                        <p className="text-gray-200">{f.desc}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
