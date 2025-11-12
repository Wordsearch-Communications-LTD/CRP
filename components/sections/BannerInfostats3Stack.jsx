"use client";
import React, { Fragment } from "react";

const BG_MAP = {
  "grad-blue-light": "bg-grad-blue-light",
  "grad-blue-3": "bg-grad-blue-3",
  "grad-beige": "bg-grad-beige",
  dark: "bg-dark",
  stone: "bg-stone",
  none: "bg-transparent",
};

const TEXT_MAP = {
  white: "text-white",
  dark: "text-[var(--dark-copy)]",
};

const STAT_NUMBER = "text-heading-3 text-gradient-blue lh-tight tighter";
const STAT_LABEL  = "text-body-2 lh-normal tracking-wide opacity-90";

export default function BannerInfostats3Stack({
  bg = "grad-blue-light",
  textColor = "dark",
  items = [],
}) {
  return (
    <section className={`${BG_MAP[bg]} ${TEXT_MAP[textColor]} w-full`}>
      <div
        className="
          mx-auto max-w-[1600px]
          px-[16px] sm:px-[32px] md:px-[64px] lg:px-[96px] xl:px-[112px]
          py-[64px] md:py-[96px] lg:py-[120px]
        "
      >
        {/* Row on md+, stacked on mobile */}
        <div className="flex flex-col md:flex-row items-stretch justify-center">
          {items.map((item, i) => (
            <Fragment key={item.id ?? i}>
              {/* vertical divider BETWEEN items (desktop only) */}
              {i > 0 && (
                <span
                  aria-hidden
                  className="
                    hidden md:block self-stretch w-px
                    bg-[rgba(38,52,121,0.25)]   /* subtle blue like Figma */
                    mx-[32px] lg:mx-[64px]
                  "
                />
              )}

              {/* stat block (no card bg) */}
              <div className="flex-1 flex flex-col items-center text-center gap-[8px]">
                <p className={STAT_NUMBER}>{item.stat}</p>
                <p className={STAT_LABEL}>{item.label}</p>

                {/* mobile divider UNDER each item except last */}
                {i < items.length - 1 && (
                  <span className="md:hidden w-[50%] mb-[24px] md:mt-[24px] h-px md:w-full bg-[rgba(38,52,121,0.14)]" />
                )}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
