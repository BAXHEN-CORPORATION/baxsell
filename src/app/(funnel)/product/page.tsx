"use client";
import Button from "@baxsell/components/Button";
import { useLeadStore } from "@baxsell/providers/lead-store-provider";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useShallow } from "zustand/shallow";

export default function Product() {
  const router = useRouter();
  const updateProductDescription = useLeadStore(
    useShallow((state) => state.updateProductDescription)
  );
  const [productDescription, setProductDescription] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here

    updateProductDescription(productDescription);

    router.push("/budget-inquiry");
  };

  return (
    <main className="grid grid-rows-[100px_1fr_140px] items-center justify-items-center min-h-(--page-min-height) p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-2xl w-full text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-[var(--primary-light)] text-center mb-4">
          Qual história vamos
          <br /> transformar em imagens
          <br /> extraordinárias?
        </h1>
      </div>

      <form onSubmit={onSubmit} className="w-full max-w-2xl">
        <div className="mb-4">
          <textarea
            className="w-full p-4 rounded-lg bg-white text-gray-700 min-h-[120px] focus:outline-none"
            placeholder="Por favor, descreva quais memórias quer eternizar? Quais são os detalhes importantes que devemos saber?"
            value={productDescription}
            required
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>

        <Button type="submit">próximo</Button>
      </form>
    </main>
  );
}
