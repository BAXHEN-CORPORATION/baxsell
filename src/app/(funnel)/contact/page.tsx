"use client";
import CountryList from "country-list-with-dial-code-and-flag";
import { Link, Mail, Phone, User } from "lucide-react";
import React, { ChangeEvent } from "react";

import Button from "@baxsell/components/Button";
import { useLeadStore } from "@baxsell/providers/lead-store-provider";
import { selectLeadInfo } from "@baxsell/stores/lead-store";
import { useShallow } from "zustand/shallow";

export default function Contact() {
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

  const onSubmit = () => {
    console.log("Form submitted with data:", formData, leadInfo);
  };

  React.useEffect(() => {
    const counties = CountryList.findOneByCountryCode("en-US");
    console.log(Intl.DateTimeFormat().resolvedOptions().locale);
    console.log("Available countries:", counties);
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
