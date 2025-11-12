"use client";

import Link from "next/link";

export default function StandardTextBlock({
  bgClassName = "bg-grad-stone-lite",

  headingLine1 = "Join in, and feel",
  headingLine2 = "the difference",

  body = "",
  cta1,
  cta2,
}) {
  return (
    <section className={`w-full ${bgClassName}`}>
      <div className="section-padding">
        {/* Responsive padding for the section */}
        <div className="px-[10vw] md:px-[8vw] lg:pl-[5vw] lg:pr-[10vw]">

          {/* =======================================
              ✅ HEADING + BODY WRAPPER (Aligned)
          ======================================== */}
          <div
            className="
             
              md:ml-0
              sm:ml-0
            "
          >
            {/* ===== Heading ===== */}
            <h2 className="text-section-title s-4 wide lh-big text-[#805A44]">
              {headingLine1}
              <br />
              <span
                className="
                  s-4 wide lh-big 
                  font-light
                  bg-gradient-to-r from-[#805A44] to-[#CBA271]
                  bg-clip-text text-transparent
                 lg:pl-[7vw]
                "
              >
                {headingLine2}
              </span>
            </h2>

            {/* ===== Body Text ===== */}
            <div
              className="
                mt-[24px]
                max-w-[840px]
                md:max-w-[600px]
                sm:max-w-[280px]
                lg:pl-[7vw]
              "
            >
              <p className="text-body-1">{body}</p>
            </div>

            {/* ===== CTA Buttons ===== */}
            <div
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
                    text-body-4 
                    pb-[2px]
                    border-b-2 border-black
                    font-medium
                    link-black
                  "
                >
                  {cta1.label} →
                </Link>
              )}

              {cta2 && (
                <Link
                  href={cta2.href}
                  className="
                    text-body-4 
                    pb-[2px]
                    border-b-2 border-black
                    font-medium
                    link-black
                  "
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
