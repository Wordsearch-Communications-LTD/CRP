// components/AvailabilityCards.tsx
"use client";

import Image from "next/image";
import React from "react";

/* --------------------------------------------------------
   THEME MAPPINGS (driven from WP options / props)
-------------------------------------------------------- */
const BG_MAP = {
  "grad-blue-light": "bg-grad-blue-light",
  "grad-blue-3": "bg-grad-blue-3",
  "grad-green-lite": "bg-grad-green-lite",
  "grad-beige": "bg-grad-beige",
  "dark": "bg-dark",
  "stone": "bg-stone",
  none: "bg-transparent",
}  ;

const TEXT_MAP = {
  white: "text-white",
  dark: "text-[var(--dark-copy)]",
}  ;

const BADGE_TONE = {
  blue: "bg-grad-blue-3",
  red: "bg-grad-red",
  green: "bg-grad-green-lite",
  beige: "bg-grad-beige",
}  ;
 
 
 

export default function AvailabilityCards({
  bg = "grad-green-lite",
  textColor = "dark",
  cards = [],
} ) {
  return (
    <section className={`${BG_MAP[bg]} ${TEXT_MAP[textColor]} w-full`}>
         <div
        className="
          mx-auto max-w-[1600px]
          px-[16px] sm:px-[32px] md:px-[64px] lg:px-[96px] xl:px-[112px]
          py-[64px] md:py-[96px] lg:py-[120px]
        "
      >
        {/* GRID — 2 columns on desktop, 1 on mobile; Figma gaps: 56 / 32 / 18 */}
          <div
          className="
            grid grid-cols-1 md:grid-cols-2
            gap-[18px] md:gap-[32px] lg:gap-[56px]
            items-stretch
          "
        >
          {cards.map((c) => (
            <article key={c.id} className="h-full flex flex-col">
              {/* Image 3:2 */}
              <div className="relative w-full aspect-[3/2] overflow-hidden zoom-parent">
                <Image
                  src={c.image.src}
                  alt={c.image.alt ?? c.title}
                  fill
                  className="object-cover zoom-child"
                  sizes="(min-width: 1024px) 720px, 100vw"
                  priority={false}
                />
              </div>

              {/* Card body */}
            <div className="bg-white text-[var(--dark-copy)] flex-1 flex flex-col">
                <div className="px-[16px] py-[24px] md:px-[24px] md:py-[32px] lg:px-[32px] lg:py-[40px]">
                  {/* Title — Archia Light, 48px desktop / 20px mobile, 125%, 2% tracking */}
                  <h3
                    className="
                      font-archia light text-center
                      tracking-[0.02em] lh-tight
                      text-[20px] md:text-[36px] lg:text-[48px]
                    "
                  >
                    {c.title}
                  </h3>

                  <div className="mt-[16px] md:mt-[18px] lg:mt-[24px] space-y-[16px]">
                    {c.rows.map((row, i) => (
                      <div key={i} className="space-y-[10px]">
                        {/* Badge — Archia Medium, uppercase, 14→12 px, 125%, 16% tracking */}
                        <span
                          className={`
                            inline-flex items-center justify-center text-white
                            ${BADGE_TONE[row.badge.tone]}
                            font-archia medium uppercase tracking-[0.16em] lh-tight
                            text-[12px] md:text-[14px]
                            rounded-[4px] px-[14px] py-[4px]
                          `}
                        >
                          {row.badge.label}
                        </span>

                        {/* Value — Silka Regular, 20→12 px, 150%, 4% tracking */}
                        <p
                          className="
                            font-silka regular tracking-[0.04em]
                            leading-[1.5]
                            text-[12px] md:text-[16px] lg:text-[20px]
                            text-[var(--dark-copy)]
                          "
                        >
                          {row.value}
                        </p>

                        {/* Divider (thin) */}
                        {i !== c.rows.length - 1 && (
                          <hr className="border-0 h-[1px] w-full bg-black/10 mt-[6px]" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* CTA — Archia Medium, uppercase, underline, arrow; 18→12 px */}
                  <a
                    href={c.href}
                    className="
                      mt-[20px] md:mt-[24px] lg:mt-[28px]
                      inline-flex items-center gap-[8px]
                      font-archia medium uppercase tracking-[0.16em] lh-tight
                      text-[12px] md:text-[14px] lg:text-[18px]
                      text-[var(--dark-copy)]
                      pb-[2px] border-b-2 border-[var(--dark-copy)]
                      hover:opacity-90 transition-opacity
                    "
                  >
                    Discover more
                    <span aria-hidden>›</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
