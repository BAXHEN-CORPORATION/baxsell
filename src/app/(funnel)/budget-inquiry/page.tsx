"use client";
import React, { useState } from "react";
import Button from "@baxsell/components/Button";
import { useLeadStore } from "@baxsell/providers/lead-store-provider";
import { useRouter } from "next/navigation";
import { useShallow } from "zustand/shallow";

export default function BudgetInquiry() {
  const router = useRouter();
  const updateBudgetInquiry = useLeadStore(
    useShallow((state) => state.updateProductDescription)
  );
  const [budget, setBudget] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here

    updateBudgetInquiry(budget);

    router.push("/share-contact");
  };

  return (
    <main className="grid grid-rows-[100px_140px_1fr] items-center justify-items-center min-h-(--page-min-height) p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)] w-[50%] align-items-center m-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-[var(--primary-light)] text-center mb-2">
        Qual é o seu orçamento realista <br />
        para este projeto?
      </h1>

      <div className="mb-2 mt-8 text-center">
        <p className="text-[var(--primary-light)] font-bold mb-2 ">
          Observação:
        </p>
        <p className="text-[var(--primary-light)] mb-4">
          Não estamos aqui para fornecer estimativas genéricas ou orçamentos
          para ensaios aleatórios —
          <span className="font-bold">
            precisamos de um valor claro desde o início
          </span>{" "}
          para darmos continuidade.
        </p>

        <p className="text-[var(--primary-light)] mb-4">
          Acreditamos em entregar resultados de alta qualidade, e isso exige
          comprometimento com o investimento financeiro.
        </p>

        <p className="text-[var(--primary-light)] font-medium">
          Solicitações sem orçamento definido serão desconsideradas.
        </p>
      </div>

      <form onSubmit={onSubmit} className="w-full">
        <div className="bg-white rounded-lg p-4 mb-4">
          <div className="flex items-start">
            <span className="text-pink-500 mr-2">💬</span>
            <textarea
              rows={5}
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
              placeholder="O orçamento realista para este projeto é..."
              className="w-full bg-transparent outline-none text-gray-700"
            />
          </div>
        </div>

        <Button type="submit">próximo</Button>
      </form>
    </main>
  );
}
