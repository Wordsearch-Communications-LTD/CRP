// components/AgentContacts.jsx
"use client";
import Image from "next/image";

/* -------- gradient + text maps (tie these to your tokens) -------- */
const BG = {
  "grad-blue-lite": "bg-grad-blue-lite-linear",
  "grad-blue-3": "bg-grad-blue-3",
  "grad-green-lite": "bg-grad-green-lite",
  "grad-beige": "bg-grad-beige",
  white: "bg-white",
  none: "bg-transparent",
};
const TEXT = { dark: "text-[var(--dark-copy)]", light: "text-white" };

/**
 * Props
 * - bg:           one of BG keys (fallback "grad-blue-lite")
 * - text:         "dark" | "light"
 * - bgImage:      optional url for section background image
 * - overlayBg:    optional gradient key from BG to overlay on top of bgImage
 * - developer:    { eyebrow, logo:{src,alt,width?,height?} }
 * - headlineRight: string  (the “Get in touch…” line)
 * - agencies:     [{ logo:{...}, people:[{name,role?,phone?,email?}, ...] }, ...]  // ideally 3 items
 */
export default function AgentContacts({
  bg = "grad-blue-lite",
  text = "dark",
  bgImage,                // e.g. "/images/contacts-bg.jpg"
  overlayBg,              // e.g. "grad-blue-lite" to tint the photo
  developer = {
    eyebrow: "A development by",
    logo: { src: "/logos/royal-london.svg", alt: "Royal London" },
  },
  headlineRight = "Get in touch to find your campus space",
  agencies = [],
}) {
  return (
    <section className={`relative ${TEXT[text]} ${!bgImage ? BG[bg] : ""} w-full`}>
      {/* Full-bleed background image (optional) */}
      {bgImage && (
        <div className="absolute inset-0 -z-10 zoom-parent">
          <Image
            src={bgImage}
            alt=""
            fill
            priority={false}
            className="object-cover object-center zoom-child"
          />
        </div>
      )}
      {/* Optional gradient overlay above the image */}
      {bgImage && overlayBg && (
        <div className={`absolute inset-0 -z-10 pointer-events-none ${BG[overlayBg]} opacity-90`} />
      )}

      <div className="
        relative
        mx-auto max-w-[1600px]
        px-[16px] sm:px-[32px] md:px-[64px] lg:px-[96px] xl:px-[112px]
        py-[64px] md:py-[80px] lg:py-[96px]
      ">
        {/* ======================= TOP STRIP ======================= */}
        {/* Desktop/tablet: 1/3 split exactly like Figma */}
        <div className="hidden md:grid grid-cols-4 items-end mb-[32px]">
          <div className="col-span-1">
            <p
              className="
                font-archia regular
                text-[20px] leading-[1.25] tracking-[0.02em]
              "
              style={{ color: "var(--2---Light-blue, #4A5EC2)" }}
            >
              {developer?.eyebrow}
            </p>
          </div>
          <div className="col-span-3">
            <p
              className="
                font-archia regular
                text-[20px] leading-[1.25] tracking-[0.02em]
              "
              style={{ color: "var(--2---Light-blue, #4A5EC2)" }}
            >
              {headlineRight}
            </p>
          </div>
        </div>

        {/* Mobile: eyebrow → developer logo → headline (stacked, not parallel) */}
        <div className="md:hidden mb-[32px]">
          <p
            className="
              font-archia regular
              text-[20px] leading-[1.25] tracking-[0.02em] mb-[12px]
            "
            style={{ color: "var(--2---Light-blue, #4A5EC2)" }}
          >
            {developer?.eyebrow}
          </p>

          {developer?.logo && (
            <div className="mb-[16px]">
              <Image
                src={developer.logo.src}
                alt={developer.logo.alt || ""}
                width={developer.logo.width || 240}
                height={developer.logo.height || 70}
                className="h-auto w-auto max-h-[56px] object-contain"
              />
            </div>
          )}

          <p
            className="
              font-archia regular
              text-[20px] leading-[1.25] tracking-[0.02em]
            "
            style={{ color: "var(--2---Light-blue, #4A5EC2)" }}
          >
            {headlineRight}
          </p>
        </div>
    
        {/* 4 columns on large screens: col-1 = developer logo, cols 2–4 = agencies */}
        <div className="grid grid-cols-1  md:grid-cols-4 gap-[24px] md:gap-[32px] items-start">
          {/* Developer column (hidden on mobile because we already show it above) */}
          <div className="hidden md:block">
            {developer?.logo && (
              <div className="mb-[32px]">
                <Image
                  src={developer.logo.src}
                  alt={developer.logo.alt || ""}
                  width={developer.logo.width || 240}
                  height={developer.logo.height || 70}
                  className="h-auto w-auto max-h-[56px] object-contain"
                />
              </div>
            )}
          </div>

          {/* Agency columns (expect 3) */}
          {agencies.map((agency, idx) => (
            <div key={idx} className="w-full">
              {agency.logo && (
                <div className="mb-[16px]">
                  <Image
                    src={agency.logo.src}
                    alt={agency.logo.alt || ""}
                    width={agency.logo.width || 160}
                    height={agency.logo.height || 50}
                    className="h-auto w-auto max-h-[56px] object-contain"
                  />
                </div>
              )}

              <div className="flex flex-col gap-[24px] md:gap-[28px]">
                {agency.people?.map((p, i) => (
                  <div
                    key={i}
                    className="border-t first:border-t-0 border-black/10 pt-[16px] first:pt-0"
                  >
                    {/* agent-names: Archia Medium (16xs / 20lg), LH 24 */}
                    <h4 className="font-archia medium text-[#162536] text-[16px] lg:text-[20px] leading-[24px]">
                      {p.name}
                    </h4>

                    {/* role: Silka Regular (14/16), 150%, 4% */}
                    {p.role && (
                      <p className="font-silka regular tracking-[0.04em] leading-[1.5] text-[14px] lg:text-[16px] text-[#162536] mt-[2px]">
                        {p.role}
                      </p>
                    )}

                    {/* details: Silka Regular (14/16), 150%, 4% */}
                    <div className="mt-[6px] flex flex-col gap-[4px]">
                      {p.phone && (
                        <a
                          href={`tel:${p.phone.replace(/\s+/g, "")}`}
                          className="font-silka regular tracking-[0.04em] leading-[1.5] text-[14px] lg:text-[16px] text-[#162536]"
                        >
                          {p.phone}
                        </a>
                      )}
                      {p.email && (
                        <a
                          href={`mailto:${p.email}`}
                          className="font-silka regular tracking-[0.04em] leading-[1.5] text-[14px] lg:text-[16px] text-[#162536] break-all"
                        >
                          {p.email}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* ==================== END MAIN GRID ===================== */}
      </div>
    </section>
  );
}
