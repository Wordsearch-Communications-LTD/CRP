"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const BG_MAP= {
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
  none: "bg-transparent",
};

const TEXT_MAP  = {
  white: "text-white",
  dark: "text-[var(--dark-copy)]",
};

const ratio32 = "relative w-full overflow-hidden [aspect-ratio:3/2] rounded-[8px]";

const underline =
  "after:block after:h-[2px] after:w-[96px] after:bg-current after:opacity-80 after:mt-2";

const sectionPad =
  "px-[32px] md:px-[64px] lg:px-[96px] xl:px-[112px] pt-[64px] pb-[24px]";

export default function SliderEvents({
  heading = "What’s on",
  items,
  bg = "grad-blue-2",
  textColor = "white",
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
   <section
  className={`${BG_MAP[bg]} ${TEXT_MAP[textColor]}
              px-5 sm:px-6 md:px-10 lg:px-[96px] xl:px-[112px]
              pt-[48px] md:pt-[64px]
              pb-[64px]`}
>
  <div className="mx-auto max-w-[1600px]">
   <h2 class="text-section-title s-4 text-white mb-[48px]">
      {heading}
    </h2>

    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 sm:gap-8 md:gap-[32px] mb-[40px]">

          {items.map((card) => (
            <article
              key={card.id}
              className="
                flex-shrink-0
                w-full
                sm:w-[85%]
                md:w-[32%] lg:w-[31%] xl:w-[30.5%]
                flex flex-col
                pb-10
                border-b border-white
              "
            >
              <div className="relative w-full overflow-hidden [aspect-ratio:3/2] rounded-[8px] zoom-parent">
                <img src={card.media.src} className="absolute inset-0 w-full h-full object-cover zoom-child"/>
              </div>

              <div className="pt-[24px] md:pt-[32px] flex flex-col">
          <h3 class="text-section-title s-2 light wide text-white underline-event-title">
                  {card.title}
                </h3>

                <p className="mt-[12px] md:mt-[16px] text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] font-silka opacity-90">
                  {card.excerpt}
                </p>
              </div>
            </article>
          ))}

            </div>
          </div>

          {/* Bottom arrows */}
          <div className=" flex md:justify-end justify-center gap-[32px]">
            <button
              onClick={scrollPrev}
              className="h-[40px] w-[40px] border border-white/40 rounded-full grid place-items-center hover:border-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 18l-6-6 6-6" strokeWidth="2" />
              </svg>
            </button>

            <button
              onClick={scrollNext}
              className="h-[40px] w-[40px] border border-white/40 rounded-full grid place-items-center hover:border-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 6l6 6-6 6" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
