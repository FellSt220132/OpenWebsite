"use client"
import { useState } from "react";

export default function TechPage() {
    {/* Imagine Reading the Code of a Website */ }
    const sections = [
        { title: "Hardware", content: "Steppermotoren, Kamera, Microcontroller, (empfohlen) modifizierte custom Nerf Waffe" },
        { title: "Firmware", content: "Embedded Code, steuert Motoren und Waffe (wenn vorhanden) an " },
        { title: "Software", content: "Objekterkennung und -verfolgung, Eingriffe von User immer möglich" },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <main className="space-y-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-cyan-400 text-center mb-8">Technik & Architektur</h1>

            <div className="space-y-4">
                {sections.map((sec, i) => (
                    <div key={sec.title} className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-4 shadow-lg cursor-pointer hover:shadow-cyan-500/40 transition-shadow"
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    >
                        <h2 className="text-xl font-semibold text-cyan-300">{sec.title}</h2>
                        {openIndex === i && <p className="text-gray-200 mt-2">{sec.content}</p>}
                    </div>
                ))}
            </div>
        </main>
    );
}
