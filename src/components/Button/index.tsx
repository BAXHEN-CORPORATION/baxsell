export default function Button({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="w-full py-3 px-4 bg-gradient-to-r from-white to-[var(--secondary)] text-[var(--text-contrast)] font-medium rounded-lg hover:opacity-90 transition-opacity cursor-pointer hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
    >
      {children}
    </button>
  );
}
