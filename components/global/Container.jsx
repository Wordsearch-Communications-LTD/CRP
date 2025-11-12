export default function Container({ className = "", children }) {
  return (
    <div
      className={`mx-auto w-full px-[var(--space-12)] max-w-[1440px] ${className}`}
    >
      {children}
    </div>
  );
}
