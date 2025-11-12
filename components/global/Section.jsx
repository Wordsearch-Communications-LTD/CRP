export default function Section({
  className = "",
  children,
  padding = "py-[var(--space-80)]",
  background = "",
}) {
  return (
    <section className={`${padding} ${background} ${className}`}>
      {children}
    </section>
  );
}
