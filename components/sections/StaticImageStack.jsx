// components/StaticImageStack.tsx
"use client";

import Image from "next/image";

 
  

const BG_MAP  = {
  "grad-blue-light": "bg-grad-blue-light",
  "grad-blue-3": "bg-grad-blue-3",
  "grad-green-lite": "bg-grad-green-lite",
  "grad-beige": "bg-grad-beige",
  dark: "bg-dark",
  stone: "bg-stone",
  none: "bg-transparent",
};

const TEXT_MAP  = {
  white: "text-white",
  dark: "text-[var(--dark-copy)]",
};

const TONE_BG  = {
  blue: "bg-grad-blue-3",
  red: "bg-grad-red",
  green: "bg-grad-green-lite",
  beige: "bg-grad-beige",
};

 
 

export default function StaticImageStack({
  bg = "grad-green-lite",
  textColor = "dark",
  items,
  cta,
} ) {
  return (
    <section className={`${BG_MAP[bg]} ${TEXT_MAP[textColor]} w-full`}>
      <div
        className="
          mx-auto max-w-[1600px]
           
          py-[64px] md:py-[64px]
        "
      >
        {/* GRID: 1 / 2 / 3 with Figma gaps: 12 / 32 / 64 */}
        <div
          className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-[12px] md:gap-[32px] lg:gap-[64px] relative
          "
        >
          {items.map((it) => (
            <figure key={it.id} className="relative w-full aspect-[4/3] overflow-hidden zoom-parent">
              <Image
  src={it.image.src}
  alt={it.image.alt ?? ""}
  fill
  className="object-cover z-0 zoom-child"   //   Image behind
  sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
  priority={false}
/>

{it.badge && (
  <figcaption
    style={{ transform: "translate(-50%, 50%)" }}
    className={`
      absolute left-1/2 bottom-0 z-10    //   Bring badge in front
      inline-flex items-center justify-center text-white
      ${TONE_BG[it.badge.tone]}
      font-archia medium uppercase tracking-[0.16em] lh-tight
      text-[12px] md:text-[16px] lg:text-[22px]
      rounded-[4px] px-[14px] py-[4px]
      shadow-[0_1px_2px_rgba(0,0,0,0.12)]
    `}
  >
    {it.badge.label}
  </figcaption>
)}

 

            </figure>
          ))}
        </div>

        {/* CTA under grid (centered). Gradient background via tone */}
        {cta && (
          <div className="mt-[32px] md:mt-[48px] flex justify-center">
            <a
              href={cta.href}
              className={`
                ${TONE_BG[cta.tone ?? "blue"]} text-white
                font-archia medium uppercase tracking-[0.16em] lh-tight
                text-[14px] md:text-[16px] lg:text-[18px]
                px-[20px] md:px-[28px] lg:px-[36px]
                py-[10px] md:py-[12px] lg:py-[14px]
                rounded-[6px]
                hover:opacity-90 transition-opacity
              `}
            >
              {cta.label}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
