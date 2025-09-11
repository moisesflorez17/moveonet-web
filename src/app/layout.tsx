import type { Metadata } from "next";
import "./globals.css"; // 👈 IMPORTANTE

export const metadata: Metadata = {
  title: "Moveo Net SAS – Internet dedicado",
  description:
    "Redes GPON, Wi-Fi de alta densidad, radioenlaces y respaldo satelital.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      {/* sin fondo aquí; lo pone page.tsx */}
      <body className="antialiased">{children}</body>
    </html>
  );
}
