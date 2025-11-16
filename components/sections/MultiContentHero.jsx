"use client";

import Image from "next/image";
import RatioBox from "../global/RatioBox";
import VimeoCover from "../global/VimeoCover";
import Link from "next/link";
import { bgClass, textGrad } from "../../utils/theme-utils";
import ScrollReveal from "../global/ScrollReveal";

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
  textAlign = "left",
  contentVariant = "split",
}) {
  const vimeoUrl = vimeoId
    ? `https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1&loop=1&background=1`
    : null;
// flex flex-col gap-4 px-[5vw] lg:px-0 relative xl:static xl:max-w-[540px]
// flex flex-col gap-4 px-[5vw] lg:px-0 absolute xl:left-0 lg:top-[-75px] top-[-38px] md:top-[-48px]
  const normalizedAlign = textAlign === "left" ? "left" : "right";
  const alignLeft = normalizedAlign === "left";
  const alignRight = !alignLeft;
  const normalizedVariant = contentVariant === "split" ? "split" : "single";
  const isSplitVariant = normalizedVariant === "split";
  const subtitleAlignment = alignLeft ? "text-left" : "text-left xl:text-right";
  const hasDescription = Boolean(desc);
  const hasCtas = Boolean(cta1 || cta2);
  const hasContent = hasDescription || hasCtas;
  const heroWidthClasses = isSplitVariant
    ? "xl:w-1/2"
    : alignLeft
    ? "xl:w-full"
    : "xl:w-1/2";
  const supportingWidthClasses = isSplitVariant ? "xl:w-1/2" : "xl:w-1/2";
  const heroOrderClasses = alignLeft
    ? "order-1 xl:order-1"
    : isSplitVariant
    ? "order-2 xl:order-2"
    : "order-1 xl:order-1";
  const supportingOrderClasses = alignLeft
    ? "order-2 xl:order-2"
    : isSplitVariant
    ? "order-1 xl:order-1"
    : "order-2 xl:order-2";

  const renderContentBlock = ({
    extraClasses = "",
    showDescription = true,
    showCtas = true,
    ctaClassName = "",
    direction = "left",
  } = {}) => {
    const descriptionNode =
      showDescription && hasDescription ? (
        <ScrollReveal direction={direction}>
          <p className="text-body-2 black text-black whitespace-pre-line">
            {desc}
          </p>
        </ScrollReveal>
      ) : null;

    const ctaNode =
      showCtas && hasCtas ? (
        <ScrollReveal direction={direction} delay={80}>
          <div className={`flex flex-wrap gap-6 ${ctaClassName}`}>
            {cta1 && (
              <Link
                href={cta1.href}
                className="text-body-4 pb-1 border-b-2"
                style={{ color: "#4A5ABD", borderColor: "#4A5ABD" }}
              >
                {cta1.label} -
              </Link>
            )}

            {cta2 && (
              <Link
                href={cta2.href}
                className="text-body-4 pb-1 border-b-2"
                style={{ color: "#4A5ABD", borderColor: "#4A5ABD" }}
              >
                {cta2.label} -
              </Link>
            )}
          </div>
        </ScrollReveal>
      ) : null;

    if (!descriptionNode && !ctaNode) {
      return null;
    }

    return (
      <div
        className={`w-full flex flex-col gap-8 pt-6 md:pt-8 pb-12 ${extraClasses}`}
      >
        {descriptionNode}
        {ctaNode}
      </div>
    );
  };
  const leftColumnContent =
    !isSplitVariant && alignLeft
      ? renderContentBlock({
          extraClasses:
            "px-[20px] lg:px-0 mt-8 md:mt-12 xl:mt-0 xl:pt-[124px]",
          direction: "left",
        })
      : null;

  const heroSplitCtas = isSplitVariant
    ? renderContentBlock({
        extraClasses:
          "hidden xl:flex px-[20px] lg:px-0 mt-6 md:mt-10 md:pt-12 xl:pt-[124px] pb-12",
        showDescription: false,
        direction: alignLeft ? "left" : "right",
      })
    : null;

  const rightColumnContent =
    (alignRight || isSplitVariant) && hasContent
      ? renderContentBlock({
          extraClasses: isSplitVariant
            ? "px-[20px] lg:px-0 xl:px-[4vw] xl:pt-10 pb-0"
            : "px-[20px] lg:px-0 xl:pt-0",
          showCtas: true,
          ctaClassName: isSplitVariant ? "xl:hidden" : "",
          direction: alignLeft ? "right" : "left",
        })
      : null;

  return (
    <section className={`relative w-full ${bgClass(bg)}`}>
      {/* Section 1 - mobile video */}
      <div className="block md:hidden">
        <RatioBox ratio={ratioMobile}>
          {imageUrl && !localVideo && !vimeoId && (
            <div className="absolute inset-0 zoom-parent">
              <Image src={imageUrl} alt="" fill className="object-cover zoom-child" />
            </div>
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

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.55)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[rgba(0,0,0,0.25)]" />
          </div>

          
        </RatioBox>
      </div>

      {/* Section 1 - desktop / tablet video */}
      <div className="hidden md:block">
        <RatioBox ratio={ratioDesktop}>
          {imageUrl && !localVideo && !vimeoId && (
            <div className="absolute inset-0 zoom-parent">
              <Image src={imageUrl} alt="" fill className="object-cover zoom-child" />
            </div>
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

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.55)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[rgba(0,0,0,0.25)]" />
          </div>
        </RatioBox>
      </div>

      <div className={`w-full px-[0px] lg:px-0 ${isSplitVariant?"lg:pl-[5vw]":"lg:pl-[10vw]"}  flex flex-col xl:flex-row gap-10 relative pb-[64px]`}>
        <div
          className={`relative w-full ${heroWidthClasses} ${heroOrderClasses}`}
        >
          <div
            className={`flex flex-col gap-4 px-[20px] lg:px-0 ${
              isSplitVariant
                ? "absolute lg:top-[-75px] top-[-38px] md:top-[-48px] "
                : "absolute xl:left-0 lg:top-[-75px] top-[-38px] md:top-[-48px]"
            }`}
          >
            {title && (
              <ScrollReveal direction={alignLeft ? "left" : "right"}>
                <h2 className="text-hero-title">{title}</h2>
              </ScrollReveal>
            )}

            {subtitle && (
              <ScrollReveal
                direction={alignLeft ? "left" : "right"}
                delay={80}
              >
                <h3
                  className={`text-hero-subtitle ${
                    isSplitVariant ? "xl:pl-[5vw]" : "xl:pl-[5vw]"
                  } w-full ${subtitleAlignment} ${textGrad(subtitleGradient)}`}
                >
                  {subtitle}
                </h3>
              </ScrollReveal>
            )}
          </div>

          {leftColumnContent && (
            <div className="xl:pl-[5vw] w-full xl:w-1/2">
              {leftColumnContent}
            </div>
          )}
          {heroSplitCtas && (
            <div className="xl:pl-[5vw]">{heroSplitCtas}</div>
          )}
       
        </div>

        {rightColumnContent && (
          <div
            className={`w-full ${supportingWidthClasses} ${supportingOrderClasses} ${
              isSplitVariant ? "xl:pt-0" : "xl:pt-[48px]"
            } md:max-w-[600px] lg:max-w-[500px] xl:max-w-[575px]`}
          >
            {rightColumnContent}
          </div>
        )}
      </div>
    </section>
  );
}
