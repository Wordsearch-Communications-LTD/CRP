// components/CompanyTicker.jsx
"use client";
import React from "react";

/* ==== WP-driven utility maps (reuse your classes) ==== */
const BG_MAP = {
  "grad-blue-light": "bg-grad-blue-light",
  "grad-blue-1": "bg-grad-blue-1",
  "grad-blue-2": "bg-grad-blue-2",
  "grad-blue-3": "bg-grad-blue-3",
  "grad-green-lite": "bg-grad-green-lite",
  "grad-beige": "bg-grad-beige",
  "grad-dark-teal": "bg-grad-dark-teal",
  "grad-pink-lite": "bg-grad-pink-lite",
  "grad-red": "bg-grad-red",
  dark: "bg-dark",
  stone: "bg-stone",
  deep: "bg-deep",
  none: "bg-transparent",
};

const TEXT_MAP = {
  white: "text-white",
  dark: "text-[var(--dark-copy)]", // #262626 per Figma token
};

export default function CompanyTicker({
  heading = "You're In Good Company",
  bg = "stone",
  textColor = "dark",
  logos = [], // [{src:'/logos/stemcell.svg', alt:'STEMCELL'}, ...]
  speed = 35, // Figma feel; higher = faster
  pauseOnHover = true,
}) {
  return (
    <section className={`${BG_MAP[bg]} ${TEXT_MAP[textColor]} w-full`}>
      <div
        className="
          mx-auto max-w-[1600px]
          px-[16px] sm:px-[32px] md:px-[64px] lg:px-[96px] xl:px-[112px]
          py-[64px]
          flex flex-col items-center
          gap-[48px] md:gap-[64px]
        "
      >
        {/* === Heading: Archia Light, 48/32, 125%, 2% letter-spacing === */}
        <h2
          className="
            font-archia light text-center
            tracking-[0.02em]     /* ≈ 2% (0.96px @ 48) */
            leading-[1.25]        /* 125% */
            text-[32px] md:text-[40px] lg:text-[48px]
          "
        >
          {/* Support optional line breaks like the Figma two-line lockup */}
          {String(heading)
            .split("\n")
            .map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
        </h2>

        {/* === Logo ticker strip (marquee) === */}
        <div className="w-full overflow-hidden">
          <marquee
            behavior="scroll"
            direction="left"
            {...{ scrollamount: String(speed) }}
            onMouseOver={(e) => pauseOnHover && e.target.stop()}
            onMouseOut={(e) => pauseOnHover && e.target.start()}
          >
            {/* Inner row mimics the 112px-ish inter-logo spacing from Figma */}
            <div className="flex items-center gap-[64px] md:gap-[96px] lg:gap-[112px]">
              {logos.length === 0 ? (
                // graceful empty state (keeps layout stable)
                <span className="text-body-2 opacity-70">
                  Add logos via the <code>logos</code> prop
                </span>
              ) : (
                // Duplicate once to soften end-gap during the scroll loop
                [...logos, ...logos].map((logo, i) => (
                  <img
                    key={`${logo.src}-${i}`}
                    src={logo.src}
                    alt={logo.alt || "logo"}
                    className="
                      h-[28px] md:h-[36px] lg:h-[45px]
                      w-auto object-contain
                    "
                    loading="lazy"
                    draggable="false"
                  />
                ))
              )}
            </div>
          </marquee>
        </div>
      </div>
    </section>
  );
}
