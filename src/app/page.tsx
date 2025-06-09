"use client";
import { LandingPage } from "@baxsell/components/pages/landing-page";
import {
  BusinessStoreProvider,
  useBusinessStore,
} from "@baxsell/providers/business-strore-provider";

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
      <LandingPage />
    </BusinessStoreProvider>
  );
}
