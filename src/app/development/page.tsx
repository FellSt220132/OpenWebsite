export default function DevPage() {
    const updates = [
        { version: "v0.0", date: "16.09.2025", desc: "Projektstart" },
        { version: "v0.5", date: "29.10.2025", desc: "Erste Demo Version" },
        { version: "v0.6", date: "2.12.2025", desc: "Neues Befehlssystem" },
        { version: "v0.9", date: "16.12.2025", desc: "TdoT Version, prä Abschussmechanik" },
    ];

    return (
        <main className="space-y-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-cyan-400 text-center">Entwicklung</h1>

            <div className="border-l-4 border-cyan-400 pl-6 space-y-6">
                {updates.map((u) => (
                    <div key={u.version} className="bg-gray-800/50 backdrop-blur-md rounded-xl p-4 shadow-lg hover:shadow-cyan-500/40 transition-shadow">
                        <h2 className="font-semibold text-cyan-300">{u.version} – {u.date}</h2>
                        <p className="text-gray-200">{u.desc}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
