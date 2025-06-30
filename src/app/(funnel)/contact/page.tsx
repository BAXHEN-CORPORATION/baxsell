"use client";
import CountryList from "country-list-with-dial-code-and-flag";
import { Link, Mail, Phone, User } from "lucide-react";
import React, { ChangeEvent, FormEvent } from "react";

import Button from "@baxsell/components/Button";
import { useLeadStore } from "@baxsell/providers/lead-store-provider";
import { selectLeadInfo } from "@baxsell/stores/lead-store";
import { useShallow } from "zustand/shallow";
import { useSendRequest } from "@baxsell/hooks/use-send-request";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  const { sendRequest } = useSendRequest();
  const leadInfo = useLeadStore(useShallow(selectLeadInfo));
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    website: "",
    phone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData, leadInfo);

    if (
      !leadInfo.goalSelected ||
      !leadInfo.clientTypeSelected ||
      !leadInfo.productDescription ||
      !leadInfo.shareContact ||
      !leadInfo.budget
    ) {
      console.error("Lead information is incomplete:", leadInfo);
      return;
    }

    const resp = await sendRequest({
      name: formData.name,
      email: formData.email,
      ig_website: formData.website,
      phone: formData.phone,
      goal: leadInfo.goalSelected.description,
      clientType: leadInfo.clientTypeSelected.description,
      productDescription: leadInfo.productDescription,
      budget: leadInfo.budget,
      shareContact: leadInfo.shareContact,
    });

    if (!resp) {
      console.error("Failed to send request");
      return;
    }

    router.push("/thank-you");
  };

  React.useEffect(() => {
    const counties = CountryList.findOneByCountryCode("en-US");
    //@ts-expect-error it's a workaround for the missing type definition on different browsers
    const userLang = navigator.language || navigator.userLanguage!;
    console.log(Intl.DateTimeFormat().resolvedOptions().locale);
    console.log("Available countries:", counties);
    console.log("User language:", userLang);
    // abordagem para brasileiro ou portugues de acordo com o navegador
    // redirect to begin of funnel if user goes trhou link directly
  }, []);

  return (
    <main className="flex flex-col items-center justify-items-center min-h-(--page-min-height) p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)] w-[80%] align-items-center m-auto">
      <h1 className="text-4xl md:text-5xl font-heading text-[var(--primary-light)] font-bold text-center mb-8">
        Como podemos entrar em contato consigo?
      </h1>

      <form
        onSubmit={onSubmit}
        className="space-y-4 min-w-[300px] max-w-[500px] w-full"
      >
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome completo"
            className="w-full p-4 pl-12 rounded-lg bg-white text-black placeholder-gray-500"
            required
          />
          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-800 h-5 w-5" />
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Seu e-mail"
            className="w-full p-4 pl-12 rounded-lg bg-white text-black placeholder-gray-500"
            required
          />
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-800 h-5 w-5" />
        </div>

        <div className="relative">
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Instagram / Website"
            className="w-full p-4 pl-12 rounded-lg bg-white text-black placeholder-gray-500"
          />
          <Link className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-800 h-5 w-5" />
        </div>

        <div className="relative">
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Telemóvel"
              className="w-full p-4 pl-12 rounded-lg bg-white text-black placeholder-gray-500"
            />
            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-800 h-5 w-5" />
          </div>
        </div>

        <Button mode="secondary">Enviar Solicitação de Colaboração</Button>
      </form>

      <p className="text-sm text-[var(--text-contrast)] mt-4 text-center">
        Certifique-se de que suas{" "}
        <span className="font-bold">informações de contato</span> estão{" "}
        <span className="font-bold">corretas</span>. Devido à alta demanda, não
        conseguiremos verificar ou corrigir erros de digitação e talvez não
        consigamos entrar em contato.
      </p>
    </main>
  );
}
