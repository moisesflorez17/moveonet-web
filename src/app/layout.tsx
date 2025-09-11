import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moveo Net SAS — Internet dedicado para eventos y hoteles",
  description:
    "Redes GPON, Wi-Fi de alta densidad, radioenlaces y respaldo satelital en Colombia.",
  metadataBase: new URL("https://moveonet-web.vercel.app"),
  openGraph: {
    title: "Moveo Net SAS — Internet dedicado",
    description:
      "Soluciones de conectividad para eventos, conciertos, hoteles y conjuntos residenciales.",
    url: "https://moveonet-web.vercel.app",
    siteName: "Moveo Net SAS",
    images: ["/og.jpg"], // súbela a /public/og.jpg (1200x630)
    locale: "es_CO",
    type: "website",
  },
  icons: { icon: "/favicon.ico" }, // súbelo a /public/favicon.ico
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
