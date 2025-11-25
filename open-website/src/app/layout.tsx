import "./globals.css";

import { ReactNode } from "react";

export const metadata = {
  title: "OpenTurret – Projekt",
  description: "Dokumentation über das OpenTurret Projekt",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body style={{ fontFamily: "sans-serif" }}>
        <header
          style={{
            padding: "1rem",
            background: "#eee",
            display: "flex",
            gap: "1.5rem",
            borderBottom: "1px solid #ccc",
          }}
        >
          <a href="./">Home</a>
          <a href="/project">Projekt</a>
          <a href="/tech">Technik</a>
          <a href="/requirements">Anforderungen</a>
          <a href="/development">Entwicklung</a>
          <a href="/team">Team</a>
        </header>

        <main>{children}</main>

        <footer
          style={{
            padding: "1rem",
            marginTop: "2rem",
            background: "#eee",
            borderTop: "1px solid #ccc",
          }}
        >
          © {new Date().getFullYear()} OpenTurret
        </footer>
      </body>
    </html>
  );
}
