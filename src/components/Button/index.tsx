interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: "primary" | "secondary";
}

const primaryStyle =
  "w-full py-3 px-4 bg-gradient-to-r from-white to-[var(--secondary)] text-[var(--text-contrast)] font-medium rounded-lg hover:opacity-90 transition-opacity cursor-pointer hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200";
const secondaryStyle =
  "w-full py-3 px-4 bg-gradient-to-r from-white to-green-100 text-green-900 font-medium rounded-lg hover:opacity-90 transition-opacity cursor-pointer hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200";

export default function Button({
  children,
  mode = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={mode === "primary" ? primaryStyle : secondaryStyle}
    >
      {children}
    </button>
  );
}
