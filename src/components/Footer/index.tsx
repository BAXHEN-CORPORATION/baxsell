export default function Footer() {
  return (
    <footer className="py-4 px-6 flex justify-center bg-gradient-to-b from-white to-[var(--secondary)] text-[var(--text-contrast)] h-16">
      <div className="text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Baxhen Corporation. All rights reserved.
        </p>
        <p className="text-xs mt-1">Built with the blessing of heavens.</p>
      </div>
    </footer>
  );
}
