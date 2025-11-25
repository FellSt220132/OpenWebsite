export default function TeamPage() {
    const team = [
        { name: "Stefan Fellner", roles: ["Software", "Web Dev", "UI Design"] },
        { name: "David Klier", roles: ["Hardware", "Firmware", "C++"] },
    ];

    return (
        <main className="space-y-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-cyan-400 text-center mb-8">Team</h1>

            <div className="grid sm:grid-cols-2 gap-8">
                {team.map((member) => (
                    <div key={member.name} className="relative bg-gray-800/50 backdrop-blur-md rounded-3xl p-6 flex flex-col items-center shadow-lg hover:shadow-cyan-500/50 transition-shadow">
                        <div className="w-24 h-24 bg-cyan-400 rounded-full mb-4 flex items-center justify-center text-gray-900 text-lg font-bold text-shadow-lg">
                            {member.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <h2 className="text-xl font-semibold text-gray-100 mb-2">{member.name}</h2>
                        <ul className="text-gray-200 space-y-1">
                            {member.roles.map((r) => (
                                <li key={r} className="hover:text-cyan-300 transition-colors">{r}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </main>
    );
}
