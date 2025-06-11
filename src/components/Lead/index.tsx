"use client";

import { useLeadStore } from "@baxsell/providers/lead-store-provider";
import { LeadOption, selectLeadGoals } from "@baxsell/stores/lead-store";
import { Goal as GoalType } from "lucide-react";
import { useShallow } from "zustand/shallow";
import LeadButton from "../LeadButton";

interface LeadProps {
  onClick: (goal: LeadOption) => void;
}

export default function Lead({ onClick }: LeadProps) {
  const goals = useLeadStore(useShallow(selectLeadGoals));

  return (
    <div>
      {/* Ready to Scale Section */}
      <div className="text-center mt-16 h-[88vh]">
        <div className="flex justify-center mb-4">
          <GoalType className="text-[var(--primary-light)]" size={32} />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-16 font-heading text-[var(--primary-light)]">
          Vamos planejar o seu ensaio?
        </h2>

        <p className="mb-8 font-body text-[var(--text-contrast)]">
          Preencha as informações abaixo para começarmos a criar algo especial:
        </p>

        <h3 className="text-2xl md:text-5xl font-bold mb-4 font-heading text-[var(--primary-light)]">
          Qual é o principal objetivo do seu ensaio fotográfico?
        </h3>
        <p className="font-body text-[var(--text-contrast)] mb-8">
          Por favor escolha um.
        </p>

        {/* Goal Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {goals.map((goal) => (
            <LeadButton
              key={goal.id}
              {...goal}
              onClick={() => onClick(goal)}
              href="/client-type"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
