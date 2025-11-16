"use client";

import RatioBox from "@/components/global/RatioBox";
import VimeoCover from "@/components/global/VimeoCover";
import { VideoElement } from "./VideoElement";
import ScrollReveal from "../global/ScrollReveal";
 

export default function SectionNatureHero({
  label,
  title,
  subtitle,
  vimeoId = null,
  localVideo = null,
  imageUrl = null,
  desc = "",
  // Optional overrides
  labelColor = "var(--white)",
  titleColor = "var(--white)",
  subtitleGradient = "linear-gradient(90deg,#D94C6F 0%, #610F4A 100%)",
  backgroundGradient = "var(--grad-pink-lite)",
}) {
  /** Choose background in priority order */
  let Background = null;

  if (vimeoId) {
    const url = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&loop=1&muted=1&background=1`;
    Background = <VimeoCover url={url} />;
  } else if (localVideo) {
    Background = <VideoElement src={localVideo} />;
  } else if (imageUrl) {
    Background = (
      <div className="absolute inset-0 zoom-parent">
        <img
          src={imageUrl}
          className="w-full h-full object-cover zoom-child"
          alt=""
        />
      </div>
    );
  } else {
    Background = <div className="absolute inset-0 bg-black" />;
  }

  return (
    <section className="w-full">

      {/*   Responsive background */}
      <div className="relative">
        {/* Mobile 4:3 */}
        <div className="block sm:hidden">
          <RatioBox ratio="4:3">{Background}</RatioBox>
        </div>

        {/* Tablet + Desktop 2:1 */}
        <div className="hidden sm:block">
          <RatioBox ratio="2:1">{Background}</RatioBox>
        </div>

        {/*   Text position — left 10vw, bottom spacing */}
        <div
          className="absolute pointer-events-none left-[6vw] md:left-[10vw]"
          style={{
            
            // bottom: "clamp(1rem, 3vw, 3.5rem)",
              bottom: "8px",
          }}
        >
          {/*   LABEL */}
          <ScrollReveal direction="left">
            <div
              className="text-label"
              style={{ color: labelColor }}
            >
              {label}
            </div>
          </ScrollReveal>

          {/*   TITLE */}
          <ScrollReveal direction="left" delay={80}>
            <h1
              className="text-hero-title mt-[0.75rem]"
              style={{ color: titleColor }}
            >
              {title}
            </h1>
          </ScrollReveal>
        </div>
      </div>

      {/*   Subtitle Strip (Figma exact pink-lavender gradient) */}
      <div
        className="w-full pb-[clamp(1.5rem,2.5vw,3rem)]"
        style={{ background: backgroundGradient }}
      >
        <div className="container px-0">
          <div className="ml-[3vw] md:ml-[13vw]"  >
            <ScrollReveal direction="left">
              <h2
                className="text-hero-subtitle"
                style={{
                  background: subtitleGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {subtitle}
                
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={80}>
              <p className="text-body-2 black text-black whitespace-pre-line max-w-[80%] md:max-w-[44%] mt-8  md:mt-18">
            {desc}
          </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
