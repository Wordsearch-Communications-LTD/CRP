"use client";
import React from "react";

import ScrollReveal from "../global/ScrollReveal";

const cx = (...a) => a.filter(Boolean).join(" ");

export default function FlexImageDualBlock({
  heading,
  description,
  smallImage,
  largeImage,
  bg = "white",
  textColor = "dark",
}) {
  const headingParts =
    typeof heading === "string"
      ? heading
          .split("\n")
          .map((part) => part.trim())
          .filter(Boolean)
      : [];
  const primaryHeading =
    headingParts.length > 0 ? headingParts[0] : heading ?? "";
  const secondaryHeading =
    headingParts.length > 1 ? headingParts.slice(1).join(" ") : undefined;

  return (
    <section
      className={cx(
        bg === "white" && "bg-white",
        bg === "peach" && "bg-[#F9E2D0]",
        "w-full"
      )}
    >
      <div className="max-w-[1920px] mx-auto px-4 md:px-0 py-[32px] md:py-[64px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] md:gap-[64px]">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-[32px]">

            {/* FIXED HEIGHT HEADING == MATCH RIGHT SMALL IMAGE */}
            <div className="flex items-end  md:pl-[5vw]  ">
             <div
            className="
             
              md:ml-0
              sm:ml-0
            "
          >
            {/* ===== Heading ===== */}
            <ScrollReveal direction="left">
              <h2 className="text-section-title s-4 wide lh-big text-[#805A44]">
                {primaryHeading}
                {secondaryHeading && (
                  <>
                    <br />
                    <span
                      className="
                         wide lh-big 
                        font-light
                        bg-gradient-to-r from-[#805A44] to-[#CBA271]
                        bg-clip-text text-transparent
                       lg:pl-[7vw]
                      "
                    >
                      {secondaryHeading}
                    </span>
                  </>
                )}
              </h2>
            </ScrollReveal>
            
            
          </div>
            </div>

            {/* LARGE IMAGE 4:3 */}
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden zoom-parent">
              <img src={largeImage} className="object-cover w-full h-full zoom-child" />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-[32px] items-center flex-col-reverse md:flex-col">

            {/* SMALL IMAGE 3:2 — FORCE SAME HEIGHT AS HEADING */}
            <div className="w-full overflow-hidden rounded-xl aspect-[3/2] md:h-[60%] lg:h-[50%] lg:py-[24px] items-center zoom-parent " 
            style={{justifyItems:'center'}}
            >
              <img
                src={smallImage}
                className="  h-full object-cover zoom-child"
                style={{ height: "100%" }}
              />
            </div>

            {/* DESCRIPTION — FORCE SAME HEIGHT AS 4:3 IMAGE */}
            <div className="flex items-center md:px-[5vw] lg:px-[10vw] xl:px-[130px]  ">
              <ScrollReveal direction="right">
                <p
                  className={cx(
                    "font-silka",
                    textColor === "dark" ? "text-[#262626]" : "text-white",
                    `
                      text-[16px] leading-[24px] tracking-[0.64px]
                      md:text-[18px] md:leading-[27px] md:tracking-[0.72px]
                      xl:text-[20px] xl:leading-[30px] xl:tracking-[0.80px]
                    `
                  )}
                >
                  {description}
                </p>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
