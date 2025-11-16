"use client";

import ScrollReveal from "../global/ScrollReveal";

export default function FlexStatementBanner({
  bg = "bg-teal-mid",           //   solid or gradient background class
  textColor1 = "text-grad-red", //   gradient or solid text color classes
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
          md:py-[120px] 
          py-[64px] 
          md:px-[10vw]
          px-[5vw]
        "
      >
        {/* ================================
              LINE 1 — Archia / 64px / 125%
        ================================= */}
        <ScrollReveal direction="left">
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
        </ScrollReveal>

        {/* ================================
              LINE 2 — Same style / spacing
        ================================= */}
        <ScrollReveal direction="right">
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
        </ScrollReveal>
      </div>
    </section>
  );
}
