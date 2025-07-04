"use client";
import { useLeadStore } from "@baxsell/providers/lead-store-provider";
import { Check, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useShallow } from "zustand/shallow";

export default function Share() {
  const router = useRouter();
  const updateShareContact = useLeadStore(
    useShallow((state) => state.updateShareContact)
  );

  const [selectedOption, setSelectedOption] = React.useState<"yes" | "no" | "">(
    ""
  );

  const onOptionSelect = (option: "yes" | "no") => {
    setSelectedOption(option);
    updateShareContact(option);
    router.push("/contact");
  };

  return (
    <div className="flex- flex-col items-center justify-items-center min-h-(--page-min-height) p-10 pb-20 gap-8 sm:p-14 font-[family-name:var(--font-geist-sans)] w-full md:w-[80%] lg:w-[70%] xl:w-[65%] 2xl:w-[60%] align-items-center m-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-[var(--primary-light)] text-center mb-8">
        Se não conseguirmos assumir o seu projeto, <br /> podemos compartilhá-lo
        com nossa <br /> rede de fotográfos especialistas?
      </h1>

      <p className="text-sm md:text-base max-w-2xl text-[var(--primary-light)] text-center mb-8">
        É um grupo selecionado, e vamos te ajudar a encontrar a pessoa certa —
        gratuitamente, como forma de apoiar novos talentos.
      </p>

      <div className="mb-auto">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Yes Option */}
          <button
            className={`w-64 h-44 rounded-lg flex flex-col items-center justify-center transition-all cursor-pointer hover:scale-105 ${
              selectedOption === "yes" ? "ring-2 ring-green-500" : ""
            } bg-green-50 bg-opacity-10`}
            onClick={() => onOptionSelect("yes")}
          >
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-6">
              <Check className="w-8 h-8 text-white" />
            </div>
            <p className="text-purple-600 font-semibold">
              Por favor, compartilhem.
            </p>
          </button>

          {/* No Option */}
          <button
            className={`w-64 h-44 rounded-lg flex flex-col items-center justify-center transition-all cursor-pointer hover:scale-105 ${
              selectedOption === "no" ? "ring-2 ring-red-500" : ""
            } bg-red-50 bg-opacity-10`}
            onClick={() => onOptionSelect("no")}
          >
            <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center mb-6">
              <X className="w-8 h-8 text-white" />
            </div>
            <p className="text-purple-600 font-semibold">Não compartilhem.</p>
          </button>
        </div>
        <p className="text-sm text-[var(--text-contrast)] mt-4 text-center">
          Você pode esperar as primeiras respostas em aproximadamente 24 horas.
        </p>
      </div>
    </div>
  );
}
