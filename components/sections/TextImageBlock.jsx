"use client";

import Image from "next/image";
import React from "react";
import ScrollReveal from "../global/ScrollReveal";

// --------------------------------------------------
// Background + Text Tokens (from your design system)
// --------------------------------------------------
const BG = {
  white: "bg-white",
  "grad-beige": "bg-grad-beige",
  "grad-blue-lite": "bg-grad-blue-lite-linear",
  "grad-green": "bg-grad-green-lite",
  none: "",
};

const TEXT = {
  dark: "text-[var(--dark-copy)]",
  light: "text-white",
};

// --------------------------------------------------
// Ratio wrapper (3:2, 4:3, etc.)
// --------------------------------------------------
function RatioBox({ ratio = "3:2", children }) {
  const [w, h] = ratio.split(":").map(Number);
  const paddingTop = (h / w) * 100 + "%";

  return (
    <div className="relative w-full">
      <div style={{ paddingTop }} />
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}

// --------------------------------------------------
// Main Section Component
// --------------------------------------------------
export default function TextImageBlock({
  bg = "white",
  text = "dark",
  ratio = "3:2",
  reverse = false,

  // Content
  heading = "Sometimes theres long text with short.. oh!",
  description =
    "Through charity partnerships and volunteering opportunities, campus occupiers can contribute to local causes and be part of wider social change.",

  // Media (image or video)
  image,
  videoId,
  videoPoster,
}) {
  const textDirection = reverse ? "left" : "right";

  return (
    <section className={`${BG[bg]} ${TEXT[text]} w-full`}>
      <div
        className="
        mx-auto max-w-[1600px]
        px-[16px] sm:px-[32px] md:px-[64px] lg:px-[96px]
        py-[48px] md:py-[64px]
      "
      >
        {/* GRID */}
        <div
          className={`
            grid items-center gap-[32px]
            md:grid-cols-2
            ${reverse ? "md:flex-row-reverse" : ""}
          `}
        >
          {/* ----------------------------------- */}
          {/* LEFT (or right) — IMAGE / VIDEO     */}
          {/* ----------------------------------- */}
          <div className={`${reverse ? "order-2 md:order-1" : "order-1"}`}>
            <RatioBox ratio={ratio}>
              {videoId ? (
                <iframe
                  src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
                  className="absolute inset-0 w-full h-full rounded-lg"
                  allow="autoplay; fullscreen; picture-in-picture"
                />
              ) : (
                <div className="absolute inset-0 rounded-lg overflow-hidden zoom-parent">
                  <Image
                    src={image}
                    alt="Block image"
                    fill
                    className="object-cover zoom-child"
                  />
                </div>
              )}
            </RatioBox>
          </div>

          {/* ----------------------------------- */}
          {/* RIGHT (or left) — TEXT              */}
          {/* ----------------------------------- */}
          <div
            className={`
            flex flex-col gap-[24px] 
            ${reverse ? "order-1 md:order-2" : "order-2"}
          `}
          >
            {/* HEADING */}
            <ScrollReveal direction={textDirection}>
              <h2
                className="
                  font-[Archia]
                  font-light
                  text-[#4A5ABD]
                  tracking-[0.02em]
                  leading-[1.25]
                  // Desktop
                  text-[48px] leading-[60px]
                  // Tablet
                  md:text-[32px] md:leading-[40px]
                  // Mobile
                  sm:text-[24px] sm:leading-[30px]
                "
              >
                {heading}
              </h2>
            </ScrollReveal>

            {/* DESCRIPTION */}
            <ScrollReveal direction={textDirection} delay={80}>
              <p
                className="
                font-[Silka]
                text-[#262626]
                tracking-[0.04em]
                // Desktop
                text-[20px] leading-[30px]
                // Tablet
                md:text-[18px] md:leading-[27px]
                // Mobile
                sm:text-[16px] sm:leading-[24px]
              "
              >
                {description}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
