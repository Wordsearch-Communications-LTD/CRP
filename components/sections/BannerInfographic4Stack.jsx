"use client";

import Image from "next/image";
import React from "react";

 

export default function BannerInfographic4Stack({
  items = [],
  sectionBgClass = "bg-grad-green-deep", // your green strip in Figma
  paddingClass = "section-padding",
  maxWidthClass = "container-max",
}) {
  if (!items?.length) return null;

  return (
    <section className={`w-full ${sectionBgClass}`}>
      <div className={`${paddingClass}`}>
        <div className={`${maxWidthClass} mx-auto`}>
          {/* 
            Grid rules from Figma:
            - lg→4xl: 4-up
            - md: 2×2
            - xs–sm: 1×N
          */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-4
              gap-x-[32px] gap-y-[24px]
            "
          >
            {items.map((it, idx) => {
              const size = it.iconSize ?? 40;
              const isLottie = it.icon?.endsWith(".json");
              const isSvg = it.icon?.endsWith(".svg");

              return (
                <article
                  key={`${it.title}-${idx}`}
                  className="
                    flex flex-col
                    pt-[2px] pb-[2px] 
                    gap-[10px]
                    text-white
                  "
                >
                  {/* Icon */}
                  <div className="shrink-0">
                    {/* PNG / SVG route; Lottie placeholder for future */}
                    {!isLottie ? (
                      <Image
                        src={it.icon}
                        alt={it.alt ?? it.title}
                        width={size}
                        height={size}
                        className="object-contain opacity-90"
                        priority={idx < 4}
                      />
                    ) : (
                      <div
                        data-lottie={it.icon}
                        className="w-[40px] h-[40px] opacity-90"
                        // Hook up lottie-web later if needed
                        aria-label={it.alt ?? it.title}
                        role="img"
                        title={it.alt ?? it.title}
                      />
                    )}
                  </div>

                  {/* Title — Archia / 18px / 125% / 2% tracking / 500 */}
                  <h3 className="infographic-title">
                    {it.title}
                  </h3>

                  {/* Body — Silka / 14px / 150% / 4% tracking / 400 */}
                  <p className="infographic-body">
                    {it.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
