"use client";

export default function FlexStatementBanner({
  bg = "bg-teal-mid",           // ✅ solid or gradient background class
  textColor1 = "text-grad-red", // ✅ gradient or solid text color classes
  textColor2 = "text-grad-red",
  line1 = "Fresh air. Green spaces.",
  line2 = "",
}) {
  // Ensure gradient text when a gradient background class is supplied in text props.
  // Supports both `bg-grad-*` and the shorthand `text-grad-*` (mapped to `bg-grad-*`).
  const enhanceTextClass = (value = "") => {
    const tokens = String(value).split(/\s+/).filter(Boolean);
    let hasGradientBg = false;
    const mapped = tokens.map((t) => {
      if (t.startsWith("text-grad-")) {
        hasGradientBg = true;
        return t.replace(/^text-grad-/, "bg-grad-");
      }
      if (t.startsWith("bg-grad-")) {
        hasGradientBg = true;
        return t;
      }
      return t;
    });
    if (hasGradientBg) mapped.push("text-gradient");
    return Array.from(new Set(mapped)).join(" ");
  };
  return (
    <section className={`w-full ${bg}`}>
      <div
        className="
          w-full 
          flex flex-col lg:items-center lg:justify-center 
          text-start
          py-[120px] 
          px-[10vw]
        "
      >
        {/* ================================
            ✅ LINE 1 — Archia / 64px / 125%
        ================================= */}
        <h2
          className={`
         s-6 light lh-normal wide 
            leading-[1.25] 
            tracking-[0.02em]
            font-light
            ${enhanceTextClass(textColor1)}
            max-w-[900px]
            lg:mr-[12rem]
          `}
        >
          {line1}
        </h2>

        {/* ================================
            ✅ LINE 2 — Same style / spacing
        ================================= */}
        <h2
          className={`
              s-6 light lh-normal wide

            leading-[1.25] 
            tracking-[0.02em]
            font-light
            mt-[8px]
            ${enhanceTextClass(textColor2)}
            max-w-[900px]
           lg:ml-[28rem]
          `}
        >
          {line2}
        </h2>
      </div>
    </section>
  );
}
