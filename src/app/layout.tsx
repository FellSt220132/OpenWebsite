import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "OpenTurret – Projekt",
  description: "Dokumentation des OpenTurret Projekts der OpenGroup",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-gray-900 text-gray-100 font-mono flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-gray-800/80 backdrop-blur-md shadow-lg border-b border-gray-700 fixed w-full z-50">
          <nav className="max-w-6xl mx-auto flex justify-center space-x-6 py-4">
            <a href="OpenWebsite/" className="text-gray-100 hover:text-cyan-400 transition-colors font-semibold tracking-wide">Home</a>
            <a href="OpenWebsite/project" className="text-gray-100 hover:text-cyan-400 transition-colors font-semibold tracking-wide">Projekt</a>
            <a href="OpenWebsite/tech" className="text-gray-100 hover:text-cyan-400 transition-colors font-semibold tracking-wide">Technik</a>
            <a href="OpenWebsite/requirements" className="text-gray-100 hover:text-cyan-400 transition-colors font-semibold tracking-wide">Anforderungen</a>
            <a href="OpenWebsite/development" className="text-gray-100 hover:text-cyan-400 transition-colors font-semibold tracking-wide">Entwicklung</a>
            <a href="OpenWebsite/team" className="text-gray-100 hover:text-cyan-400 transition-colors font-semibold tracking-wide">Team</a>
          </nav>
        </header>

        {/* Main content */}
        <main className="flex-1 pt-24 max-w-6xl mx-auto px-6 sm:px-16">{children}</main>

        {/* Footer */}
        <footer className="mt-12 py-6 text-center text-gray-400 border-t border-gray-700">
          © {new Date().getFullYear()} OpenTurret -- By Klier and Fellner
        </footer>
      </body>
    </html>
  );
}
