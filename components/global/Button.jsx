export default function Button({
  children,
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary:
      "bg-[var(--Neon)] border-2 border-[var(--Neon)] text-dark px-6 py-2 rounded-full uppercase tracking-[3.2px] font-archia font-medium",
    secondary:
      "bg-grad-blue-3 text-white px-6 py-2 rounded-full uppercase tracking-[3.2px] font-archia font-medium",
  };

  return <button className={`${styles[variant]} ${className}`}>{children}</button>;
}
