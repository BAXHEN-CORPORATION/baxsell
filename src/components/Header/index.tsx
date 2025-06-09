import Image from "next/image";

export default function Header() {
  return (
    <header className="py-4 px-6 flex justify-center bg-[var(--secondary)]">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Crismel Fotos Logo - Setúbal, Lisboa - Portugal"
          className="h-8"
          height={64}
          width={64}
        />
      </div>
    </header>
  );
}
