 "use client";

import Image from "next/image";
import RatioBox from "../global/RatioBox";
import VimeoCover from "../global/VimeoCover";
import Link from "next/link";
import { bgClass, textGrad } from "../../utils/theme-utils";

export default function MultiContentHero({
  ratioDesktop = "5:2",
  ratioMobile = "4:3",

  vimeoId,
  localVideo,
  imageUrl,

  bg = "grad-blue-light",

  label,
  title,
  subtitle,
  subtitleGradient,

  desc,
  cta1,
  cta2,
}) {
  const vimeoUrl = vimeoId
    ? `https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1&loop=1&background=1`
    : null;

  return (
    <section className={`relative w-full ${bgClass(bg)}`}>

      {/* =============================
          ✅ SECTION 1 — FULL VIDEO
      ============================== */}
      <div className="block md:hidden">
        <RatioBox ratio={ratioMobile}>
          {imageUrl && !localVideo && !vimeoId && (
            <Image src={imageUrl} alt="" fill className="object-cover" />
          )}

          {vimeoId && <VimeoCover url={vimeoUrl} />}

          {localVideo && !vimeoId && (
            <video
              src={localVideo}
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-1/2 left-1/2 w-[200%] h-[200%] object-cover -translate-x-1/2 -translate-y-1/2"
            />
          )}

          {/* top & bottom gradients */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.55)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[rgba(0,0,0,0.25)]" />
          </div>

          {/* ✅ Mobile text over video */}
          <div className="absolute left-[10vw] bottom-[1%] max-w-[80%] flex flex-col gap-3">
            {label && <span className="text-label">{label}</span>}
            {title && <h2 className="text-hero-title">{title}</h2>}
          </div>
        </RatioBox>
      </div>

      {/* ✅ Desktop / Tablet video */}
      <div className="hidden md:block">
        <RatioBox ratio={ratioDesktop}>
          {imageUrl && !localVideo && !vimeoId && (
            <Image src={imageUrl} alt="" fill className="object-cover" />
          )}

          {vimeoId && <VimeoCover url={vimeoUrl} />}

          {localVideo && !vimeoId && (
            <video
              src={localVideo}
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-1/2 left-1/2 w-[200%] h-[200%] object-cover -translate-x-1/2 -translate-y-1/2"
            />
          )}

          {/* Gradients */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.55)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[rgba(0,0,0,0.25)]" />
          </div>

          {/* ✅ Bottom aligned text EXACT LIKE FIGMA */}
          <div className="absolute left-[10vw] bottom-[1%] max-w-[50vw] flex flex-col gap-4">

            {label && <span className="text-label">{label}</span>}

            {title && <h2 className="text-hero-title">{title}</h2>}
          </div>
        </RatioBox>
      </div>

      {/* ======================================
          ✅ SECTION 2 — 50/50 FLEX LAYOUT
      ======================================= */}
      {/* ======================================
    ✅ SECTION 2 — Text Block Under Video
======================================= */}
<div
  className="
    w-full px-[10vw] 
    flex flex-col lg:flex-col xl:flex-row
    gap-[0px] xl:gap-0
  
  "
>
  {/* LEFT COLUMN — Subtitle */}
  <div className="w-full xl:w-1/2 order-1 xl:order-1">
    <h3
      className={`
        text-hero-subtitle 
        w-full 
        text-left xl:text-right
        ${textGrad(subtitleGradient)}
      `}
    >
      {subtitle}
    </h3>
  </div>

  {/* RIGHT COLUMN — Description */}
  <div className="w-full xl:w-1/2 order-2 xl:order-2   xl:pt-[48px] pb-[64px]">
    <div className="
      w-full 
      flex flex-col gap-8 
      pt-[24px] xl:pt-[0]
      xl:pl-[180px]
    ">
      <p className="text-body-1">
        {desc}
      </p>

      <div className="flex gap-10">
        {cta1 && (
         <Link
  href={cta1.href}
  className="text-body-4 pb-1 border-b-2"
  style={{ color: "#4A5ABD", borderColor: "#4A5ABD" }}
>
  {cta1.label} →
</Link>

        )}

        {cta2 && (
        <Link
  href={cta2.href}
  className="text-body-4 pb-1 border-b-2"
  style={{ color: "#4A5ABD", borderColor: "#4A5ABD" }}
>
  {cta2.label} →
</Link>
        )}
      </div>

    </div>
  </div>

</div>


    </section>
  );
}
