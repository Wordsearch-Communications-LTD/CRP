"use client";
import React from "react";

const BG_MAP = {
  "grad-green-lite": "bg-grad-green-lite",
  "grad-beige": "bg-grad-beige",
  "grad-blue-1": "bg-grad-blue-1",
  "grad-blue-2": "bg-grad-blue-2",
  "grad-blue-3": "bg-grad-blue-3",
  "grad-dark-teal": "bg-grad-dark-teal",
  "grad-pink-lite": "bg-grad-pink-lite",
  "grad-red": "bg-grad-red",
  "grad-blue-light": "bg-grad-blue-light",
  "grad-orange-lite-linear": "bg-grad-orange-lite-linear",
  dark: "bg-dark",
  stone: "bg-stone",
  deep: "bg-deep",
  none: "bg-transparent",
}  

const TEXT_MAP = {
  white: "text-white",
  dark: "text-[var(--dark-copy)]",
  stone: "text-stone-700",
}  

 

export default function CompCtaBanner({
  bg = "grad-blue-3",
  textColor = "white",
  message = "For more information about the events:",
  ctaLabel = "Get in touch",
  href = "#",
  className = "",
} ) {
  return (
    <section className={`${BG_MAP[bg]} ${TEXT_MAP[textColor]} w-full ${className}`}>
      {/* follow your global container + paddings */}
      <div className="container py-[64px]">
        {/* stack centered */}
        <div className="mx-auto flex flex-col items-center justify-center text-center gap-[18px]">
          {/* ======= Message (Silka, 20/18/16, 150%, letter-spacing .8/.72/.64) ======= */}
          <p
            className="
              font-silka regular
              leading-[150%]
              text-[16px] md:text-[18px] lg:text-[20px]
              tracking-[0.64px] md:tracking-[0.72px] lg:tracking-[0.8px]
              text-current
            "
          >
            {message}
          </p>

          {/* ======= CTA group with underline (2.25px) hugging content ======= */}
          {href ? (
            <a
              href={href}
              className="
                inline-flex items-center justify-center gap-[18px]
                pb-[11.25px] border-b-[2.25px] border-current
                text-current group
              "
            >
              <span
                className="
                  font-archia medium uppercase
                  leading-[125%]
                  text-[14px] md:text-[14px] lg:text-[18px]
                  tracking-[2.24px] md:tracking-[2.24px] lg:tracking-[2.88px]
                "
              >
                {ctaLabel}
              </span>

              {/* right chevron uses currentColor; nudges on hover */}
              <svg
                className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
          ) : (
            <button
              type="button"
              className="
                inline-flex items-center justify-center gap-[18px]
                pb-[11.25px] border-b-[2.25px] border-current
                text-current group
              "
            >
              <span
                className="
                  font-archia medium uppercase
                  leading-[125%]
                  text-[14px] md:text-[14px] lg:text-[18px]
                  tracking-[2.24px] md:tracking-[2.24px] lg:tracking-[2.88px]
                "
              >
                {ctaLabel}
              </span>
              <svg
                className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
