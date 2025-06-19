"use client";

import LeadButton from "@baxsell/components/LeadButton";
import { useLeadStore } from "@baxsell/providers/lead-store-provider";
import { LeadOption, selectClientTypes } from "@baxsell/stores/lead-store";
import React from "react";
import { useShallow } from "zustand/shallow";

export default function ClientType() {
  const clientTypes = useLeadStore(useShallow(selectClientTypes));
  const updateClientType = useLeadStore((state) => state.updateClientType);

  // Define client types data

  const handleSelection = (option: LeadOption) => {
    updateClientType(option);
  };
  return (
    <main className="flex flex-col items-center justify-items-center min-h-(--page-min-height) p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl md:text-5xl font-heading text-[var(--primary-light)] font-bold text-center mb-8">
        Você se encaixa em qual perfil de cliente?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
        {clientTypes.map((option) => (
          <LeadButton
            key={option.id}
            {...option}
            onClick={() => handleSelection(option)}
            href="/product"
          />
        ))}
      </div>
    </main>
  );
}
