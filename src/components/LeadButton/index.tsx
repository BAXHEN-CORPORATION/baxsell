import Link from "next/link";

interface LeadButtonProps {
  onClick?: () => void;
  emoji?: string;
  description?: string;
  href?: URL | string;
}

export default function LeadButton({
  onClick,
  emoji = "",
  description = "",
  href = "#",
}: LeadButtonProps) {
  return (
    <Link
      role="button"
      href={href}
      className={` bg-[var(--secondary-light)] text-[var(--text-contrast)] flex items-center p-4 rounded-lg border border-[var(--text-contrast)] hover:bg-[var(--secondary)] transition-colors text-left cursor-pointer `}
      onClick={onClick}
    >
      <span className="mr-3 text-xl">{emoji}</span>
      <span>{description}</span>
    </Link>
  );
}
