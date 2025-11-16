"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const cx = (...a) => a.filter(Boolean).join(" ");

export default function MediaCarouselEmbla({
  slides = [],
  loop = true,
  className = "",
  /** put arrows in the side gutter (outside the image) */
  controlsOutside = true,
  /** add horizontal padding to the section (Figma shows 20px) */
  containerClass = "px-[64px]",
}) {
  const [emblaRef, embla] = useEmblaCarousel({ loop });
  const [idx, setIdx] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setIdx(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  const scrollPrev = () => embla && embla.scrollPrev();
  const scrollNext = () => embla && embla.scrollNext();

  return (
    <section className={cx("w-full", className)}>
      <div className={cx("mx-auto max-w-[1400px]", containerClass)}>
        {/* OUTER anchor: overflow visible so controls can sit outside the image */}
        <div className="relative">
          {/* INNER media box: ratio + clipped corners */}
          <div
            className="relative overflow-hidden rounded-xl  md:aspect-[2/1] aspect-[4/5]"
            // style={{ aspectRatio: "2 / 1" }}  // 2:1 everywhere
          >
            {/* Embla viewport */}
            <div ref={emblaRef} className="absolute inset-0 overflow-hidden">
              <div className="flex h-full">
                {slides.map((s, i) => (
                  <div key={i} className="relative flex-[0_0_100%] h-full">
                    {s.type === "image" && (
                      <div className="absolute inset-0 zoom-parent">
                        <Image
                          src={s.src}
                          alt={s.alt || ""}
                          fill
                          sizes="100vw"
                          className="object-cover zoom-child"
                          priority={i === 0}
                          unoptimized
                        />
                      </div>
                    )}
                    {s.type === "vimeo" && (
                      <div className="absolute inset-0">
                        {s.poster && (
                          <Image
                            src={s.poster}
                            alt=""
                            fill
                            sizes="100vw"
                            className="object-cover"
                            unoptimized
                          />
                        )}
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src={
                            s.idOrUrl?.startsWith?.("http")
                              ? s.idOrUrl
                              : `https://player.vimeo.com/video/${s.idOrUrl}?title=0&byline=0&portrait=0`
                          }
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Numeric indicator (inside, bottom-center; Archia 20px / 125% / 2%) */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-black/30 text-white">
              <span className="font-archia medium tracking-[0.02em] leading-[1.25] text-[20px]">
                {idx + 1} / {Math.max(slides.length, 1)}
              </span>
            </div>
          </div>

          {/* ARROWS — positioned on OUTER, so they can sit outside the inner image */}
   {/* PREV BUTTON */}
<button
  onClick={scrollPrev}
  aria-label="Previous slide"
  className={cx(
    "absolute top-1/2 -translate-y-1/2 z-20",
    // 🟩 responsive sizing
    "h-8 w-8 sm:h-9 sm:w-9 md:h-11 md:w-11 xl:h-12 xl:w-12",
    "rounded-full bg-transparent backdrop-blur flex items-center justify-center",
    "border border-black/10 hover:scale-[1.05] transition",
    // 🟩 responsive outside placement
    controlsOutside
      ? "-left-4 sm:-left-6 md:-left-8 lg:-left-10 xl:-left-12"
      : "left-2 sm:left-3 md:left-4"
  )}
>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-[18px] md:w-[18px] xl:h-5 xl:w-5"
  >
    <path
      d="M15 6 9 12l6 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
</button>

{/* NEXT BUTTON */}
<button
  onClick={scrollNext}
  aria-label="Next slide"
  className={cx(
    "absolute top-1/2 -translate-y-1/2 z-20",
    "h-8 w-8 sm:h-9 sm:w-9 md:h-13 md:w-13 xl:h-14 xl:w-14",
    "rounded-full  bg-transparent   flex items-center justify-center",
    "   hover:scale-[1.05] transition",
    controlsOutside
      ? "-right-4 sm:-right-6 md:-right-8 lg:-right-10 xl:-right-12"
      : "right-2 sm:right-3 md:right-4"
  )}
>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-[18px] md:w-[18px] xl:h-5 xl:w-5"
  >
    <path
      d="M9 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
</button>

        </div>
      </div>
    </section>
  );
}
