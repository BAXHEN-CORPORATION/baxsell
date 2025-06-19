import Footer from "@baxsell/components/Footer";
import Header from "@baxsell/components/Header";
import { BusinessStoreProvider } from "@baxsell/providers/business-store-provider";
import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LeadStoreProvider } from "@baxsell/providers/lead-store-provider";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  preload: true,
  subsets: ["latin", "latin-ext"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "900", "100", "700", "300"],
  style: ["normal", "italic"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  preload: true,
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Cris Mel Fotografia",
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
    "fotografos setúbal",
    "fotografos lisboa",
    "fotografos de casamentos",
    "fotografos de estúdio",
    "fotografos de newborn",
    "fotografos de grávida",
  ],
  description:
    "Cris Mel Fotografia - Fotografo de Casamentos, Estúdios, Newborn e Grávida - Fotógrafos de Setúbal, Lisboa e Região, Portugal",
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
          <LeadStoreProvider>
            <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-[var(--secondary)] text-white">
              <Header />
              {children}
              <Footer />
            </div>
          </LeadStoreProvider>
        </BusinessStoreProvider>
      </body>
    </html>
  );
}
