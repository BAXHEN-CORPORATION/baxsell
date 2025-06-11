"use client";
import { LandingPage } from "@baxsell/components/pages/landing-page";
import { BusinessStoreProvider } from "@baxsell/providers/business-store-provider";
import {
  LeadStoreProvider,
  useLeadStore,
} from "@baxsell/providers/lead-store-provider";
import { LeadOption } from "@baxsell/stores/lead-store";

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
  const updateGoal = useLeadStore((state) => state.updateGoal);

  const onGoalClick = (goal: LeadOption) => {
    // Update the selected goal in the store
    updateGoal(goal);
  };
  return (
    <BusinessStoreProvider>
      <LeadStoreProvider>
        <LandingPage onGoalClick={onGoalClick} />
      </LeadStoreProvider>
    </BusinessStoreProvider>
  );
}
