export default function RatioBox({ ratio = "16:9", className = "", children }) {
  const [w, h] = ratio.split(":").map(Number);
  const padding = (h / w) * 100;

  return (
    <div className={`relative w-full ${className}`} style={{ paddingBottom: `${padding}%` }}>
      <div className="absolute inset-0 ">{children}</div>
    </div>
  );
}
