import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moveo Net SAS — Internet dedicado",
  description: "Redes GPON, Wi-Fi de alta densidad, radioenlaces y respaldo satelital.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className + " bg-black text-white"}>
        {children}
      </body>
    </html>
  );
}