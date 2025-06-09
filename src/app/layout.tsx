import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Header from "@baxsell/components/Header";
import Footer from "@baxsell/components/Footer";
import { Bus } from "lucide-react";
import { BusinessStoreProvider } from "@baxsell/providers/business-strore-provider";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  preload: true,
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "900", "100", "700", "300"],
  style: ["normal", "italic"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Crismel Fotos",
  keywords: [
    "fotografia",
    "fotografia de casamento",
    "fotografia de eventos",
    "fotografia de família",
    "fotografia de turismo",
    "fotografia de produtos",
    "fotografia de moda",
    "fotografia de retratos",
    "fotografia de newborn",
    "fotografia de gestantes",
    "fotografia de pets",
    "fotografia de esportes",
    "fotografia de natureza",
    "fotografia de paisagens",
    "fotografia de arquitetura",
    "fotografia de comida",
    "fotografia de viagens",
    "fotos setúbal",
    "fotos portugal",
    "fotos lisboa",
    "fotografia profissional",
    "fotografia setúbal",
    "fotografia portugal",
    "fotografia lisboa",
  ],
  description: "Crismel Fotos - Capturando momentos únicos com paixão e arte.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${lato.variable} antialiased`}
      >
        <BusinessStoreProvider>
          <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-[var(--secondary)] text-white">
            <Header />
            {children}
            <Footer />
          </div>
        </BusinessStoreProvider>
      </body>
    </html>
  );
}
