"use client";
import { LandingPage } from "@baxsell/components/pages/landing-page";
import { BusinessStoreProvider } from "@baxsell/providers/business-store-provider";
import { LeadStoreProvider } from "@baxsell/providers/lead-store-provider";

// foto turismo --
// foto familiar
// foto casamento
// foto grávida
// foto eventos corporativos

// corrida
// new born

//client type

// Pessoa
// Empresa

// Familias
// Empresas

//product
// Qual é a experiêcia ue você quer eternalizar

// seu momento real eternizado com verdade.

//logo iniciais CSC

export default function Landing() {
  return (
    <BusinessStoreProvider>
      <LeadStoreProvider>
        <LandingPage />
      </LeadStoreProvider>
    </BusinessStoreProvider>
  );
}
