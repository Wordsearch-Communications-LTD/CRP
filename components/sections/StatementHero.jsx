"use client";

import React from "react";
import VimeoCover from "../global/VimeoCover";
import RatioBox from "../global/RatioBox";

import ArrowRightIcon from "../icons/ArrowRightIcon";

export default function StatementHero({
  // Background
  bg = "bg-blue-mid",               // can be bg-teal-mid, bg-grad-blue-light, bg-img-*, etc.
  backgroundImage = null,           // "/assets/bg.jpg"
  vimeoId = null,

  // Text colours (use your token classes)
  textColor1 = "text-grad-red",     // maps to gradient
  textColor2 = "text-grad-red",

  // Text content
  line1 = "Fresh air. Green spaces.",
  line2 = "",

  // CTA (optional)
  cta = null,                       // { label: "FIND YOUR CAMPUS SPACE", href: "/campus" }
}) {
  const getEnhancedTextClass = (value = "") => {
    const parts = value.split(" ").filter(Boolean);
    let hasGradient = false;

    const mapped = parts.map((t) => {
      if (t.startsWith("text-grad-")) {
        hasGradient = true;
        return t.replace("text-grad-", "bg-grad-");
      }
      if (t.startsWith("bg-grad-")) {
        hasGradient = true;
        return t;
      }
      return t;
    });

    if (hasGradient) mapped.push("text-gradient");
    return mapped.join(" ");
  };

  return (
    <section className={`relative w-full overflow-hidden group ${bg}`}>
      {/* ===============================
            BACKGROUND LAYERS
      ================================== */}
      {backgroundImage && !vimeoId && (
        <div className="absolute inset-0 zoom-parent">
          <img
            src={backgroundImage}
            className="w-full h-full object-cover zoom-child"
          />
        </div>
      )}

      {vimeoId && (
        <div className="absolute inset-0">
          <VimeoCover
            url={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1&loop=1&background=1`}
          />
        </div>
      )}

      {/* Black overlay only if BG is video/img */}
      {(backgroundImage || vimeoId) && (
        <div className="absolute inset-0 bg-black/30"></div>
      )}

      {/* ===============================
            CONTENT WRAPPER
      ================================== */}
      <div
        className="
          relative z-10
          w-full h-full
          flex flex-col items-center justify-center
          text-center
          px-[8vw]
          py-[140px]
        "
      >
        {/* ============= Line 1 ============= */}
        <h2
          className={`
            text-section-title
            s-4 wide lh-normal
            font-light
            ${getEnhancedTextClass(textColor1)}
            max-w-[900px]
          `}
        >
          {line1}
        </h2>

        {/* ============= Line 2 ============= */}
        <h2
          className={`
            text-section-title
            s-4 wide lh-normal
            font-light
            mt-[12px]
            ${getEnhancedTextClass(textColor2)}
            max-w-[900px]
          `}
        >
          {line2}
        </h2>

        {/* ============= CTA ============= */}
        {cta && (
          <a
            href={cta.href}
            className="
              mt-[28px]
              inline-flex items-center gap-2
              text-body-4
              uppercase
              tracking-[0.16em]
              border-b-2 border-white
              text-white
              pb-[6px]
            "
          >
            <span>{cta.label}</span>
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        )}
      </div>
    </section>
  );
}
