import { CheckCircle } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="grid items-center justify-items-center min-h-(--page-min-height) p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)] align-items-center">
      {/* Content */}
      <div className="flex flex-col items-center justify-center text-center px-4">
        {/* Check Icon */}
        <div className="mb-6 bg-green-500/20 p-3 rounded-lg">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>

        {/* Thank You Message */}
        <h1 className="text-5xl font-bold mb-4 font-heading font-heading text-[var(--primary-light)]">
          Obrigado(a)!
        </h1>
        <p className="text-lg font-body text-[var(--primary-light)]">
          Retornaremos o contato dentro das próximas 48 horas.
        </p>
      </div>
    </div>
  );
}
