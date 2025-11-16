"use client";

import Link from "next/link";

import ArrowRightIcon from "../icons/ArrowRightIcon";
import ScrollReveal from "../global/ScrollReveal";

export default function TwoColumnContent({
  bgClassName = "bg-grad-stone-lite",

  headingLine1 = "Join in, and feel",
  headingLine2 = "the difference",

  body = "",

  cta1,
  cta2,

  rightType = "none", // "none" | "text" | "image" | "video"
  rightImage = null,
  rightVideo = null,
  rightText = "",
}) {
  return (
    <section className={`w-full ${bgClassName}`}>
      <div className="section-padding">
        <div className="px-[20px] md:px-[8vw] lg:pl-[5vw] lg:pr-[0vw]">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-start">

            {/* ======================================================
                  LEFT COLUMN — EXACT SAME AS StandardTextBlock
               ====================================================== */}
            <div className="max-w-[864px]">

              {/* === Heading === */}
              <ScrollReveal direction="left">
                <h2 className="text-section-title s-4 wide lh-big text-[#805A44]">
                  {headingLine1}
                  <br />
                  <span
                    className="
                      s-4 wide lh-big font-light
                      bg-gradient-to-r from-[#805A44] to-[#CBA271]
                      bg-clip-text text-transparent
                      lg:pl-[7vw]
                    "
                  >
                    {headingLine2}
                  </span>
                </h2>
              </ScrollReveal>

              {/* === Body === */}
              <ScrollReveal
                direction="left"
                className="
                  mt-[24px]
                  max-w-[840px]
                  md:max-w-[600px]
                  sm:max-w-[280px]
                  lg:pl-[7vw]
                "
              >
                <p className="text-body-2 text-black">
                  {body}
                </p>
              </ScrollReveal>

              {/* === CTA Buttons === */}
              <ScrollReveal
                direction="left"
                className="
                  mt-[32px]
                  flex flex-wrap items-center 
                  gap-x-[32px] 
                  gap-y-[16px]
                  lg:pl-[7vw]
                "
              >
                {cta1 && (
                  <Link
                    href={cta1.href}
                    className="
                      inline-flex items-center gap-2
                      text-body-4 
                      pb-[2px]
                      border-b-2 border-black
                      font-medium
                      link-black
                    "
                  >
                    <span>{cta1.label}</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                )}

                {cta2 && (
                  <Link
                    href={cta2.href}
                    className="
                      inline-flex items-center gap-2
                      text-body-4 
                      pb-[2px]
                      border-b-2 border-black
                      font-medium
                      link-black
                    "
                  >
                    <span>{cta2.label}</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                )}
              </ScrollReveal>
            </div>

            {/* ======================================================
                  RIGHT COLUMN — Dynamic (text / image / video)
               ====================================================== */}
            <div className="w-full flex ">

              {/* NONE */}
              {rightType === "none" && <div className="hidden lg:block"></div>}

              {/* TEXT BLOCK */}
              {rightType === "text" && (
                <ScrollReveal direction="right" className="max-w-[600px]">
                  <p className="text-body-2 text-black">{rightText}</p>
                </ScrollReveal>
              )}

              {/* IMAGE — 3:2 ratio */}
              {rightType === "image" && rightImage && (
                <div className="w-full aspect-[3/2] rounded-[12px] overflow-hidden zoom-parent">
                  <img
                    src={rightImage}
                    alt=""
                    className="w-full h-full object-cover zoom-child"
                  />
                </div>
              )}

              {/* VIDEO — 3:2 ratio */}
              {rightType === "video" && rightVideo && (
                <div className="w-full  aspect-[3/2] rounded-[12px] overflow-hidden">
                  <video
                    src={rightVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
