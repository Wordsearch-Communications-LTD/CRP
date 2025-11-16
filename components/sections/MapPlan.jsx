"use client";
import Image from "next/image";
import { useMemo, useState } from "react";

/* tokens */
const BG = {
  white: "bg-white",
  "grad-blue-lite": "bg-grad-blue-lite-linear",
  "grad-blue-3": "bg-grad-blue-3",
  "grad-green-lite": "bg-grad-green-lite",
  "grad-beige": "bg-grad-beige",
  none: "bg-transparent",
};
const TEXT = { dark: "text-[var(--dark-copy)]", light: "text-white" };
const cx = (...a ) => a.filter(Boolean).join(" ");

/* ---- Figma px → % helpers for a 1920×915 artboard ---- */
const W = 1920, H = 915;
const pct = (v, t) => `${((v / t) * 100).toFixed(3)}%`;
export const F = {
  tl: (leftPx , topPx ) => ({ left: pct(leftPx, W), top: pct(topPx, H), anchor: "tl"  }),
  cc: (leftPx , topPx, w, h) =>
    ({ left: pct(leftPx + w/2, W), top: pct(topPx + h/2, H), anchor: "cc"  }),
};

/* ---- Pills / badges ---- */
function Pill({ children, tone = "white", className } ) {
  const bg =
    tone === "magenta"
      ? "bg-[linear-gradient(90deg,#D94C6F_0%,#610F4A_100%)] text-white"
      : tone === "lime"
      ? "bg-[#C8FF16] text-[var(--dark-copy)]"
      : "bg-white text-[var(--dark-copy)]";
  return (
    <div
      className={cx(
        "inline-flex items-center justify-center rounded-[14px] min-h-[35px] px-[20px] md:px-[24px] shadow-sm whitespace-nowrap",
        bg,
        className
      )}
      style={{ fontSize: 21, lineHeight: "1.3", letterSpacing: "0.1em" }}
    >
      <span className="text-body-4 semibold">{children}</span>
    </div>
  );
}

function Marker(props ) {
  const { type = "pill", tone = "white", label, logo, left, top, anchor = "tl" } = props;
  const translate =
    anchor === "cc" ? "-translate-x-1/2 -translate-y-1/2" : ""; // TL = no shift
  return (
    <div className={cx("absolute z-10", translate)} style={{ left, top }}>
      {type === "logo" ? (
        <Image
          src={logo?.src}
          alt={logo?.alt || ""}
          width={logo?.width || 120}
          height={logo?.height || 40}
          className="h-auto w-auto max-w-[180px]"
          unoptimized
        />
      ) : type === "amenities" ? (
        <Pill tone="magenta">{label}</Pill>
      ) : (
        <Pill tone={tone}>{label}</Pill>
      )}
    </div>
  );
}

function Tabs({ items, value, onChange } ) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-6 z-20 flex items-center gap-3">
      {items.map(t => {
        const active = value === t.key;
        return (
          <button
            key={t.key}
            onClick={() => onChange(t.key)}
            className={cx(
              "rounded-full border px-6 py-2 transition-transform",
              active ? "bg-[#C8FF16] border-transparent"
                     : "bg-white/90 border-black/10 hover:scale-[1.02]"
            )}
            style={{ letterSpacing: "0.16em", lineHeight: 1.3 }}
          >
            <span className="text-body-4 medium">{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}

/* ---- Map ---- */
export default function MapPlan({
  bg = "grad-green-lite",
  text = "dark",
  mapImage = "/maps/cambridge-map.jpg",
  mapByTab,
  initialTab = "availability",
  markers = { base: [], availability: [], occupiers: [], future: [] },
  bottomLeftVignette = true,
}) {
  const [tab, setTab] = useState(initialTab);
  const tabs = useMemo(
    () => [
      { key: "availability", label: "Availability" },
      { key: "occupiers", label: "Occupiers" },
      { key: "future", label: "Future Developments" },
    ],
    []
  );
  const activeImage = mapByTab?.[tab] || mapImage;

  // Always show base markers (numbers etc.) + tab-specific
  const visibleMarkers = useMemo(
    () => [ ...(markers.base || []), ...(markers[tab] || []) ],
    [markers, tab]
  );

  return (
    <section className={cx(BG[bg], TEXT[text], "w-full")}>
      <div className="mx-auto max-w-[1600px] px-[16px] sm:px-[32px] md:px-[28px] lg:px-[28px] xl:px-[48px] py-[48px] md:py-[64px]">
        <div className="relative rounded-xl overflow-hidden group aspect-[1920/915] zoom-parent">
          <Tabs items={tabs} value={tab} onChange={setTab} />

          {/* fill the ratio box so % coordinates stay perfect */}
          <Image
            src={activeImage}
            alt="Site plan"
            fill
            className="object-cover zoom-child"
            priority
            unoptimized
          />

          {bottomLeftVignette && (
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-0 bottom-0 w-[55%] h-[42%] bg-[radial-gradient(140%_120%_at_0%_100%,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0)_70%)]" />
            </div>
          )}

          {visibleMarkers.map((m, i) => <Marker key={i} {...m} />)}
        </div>
      </div>
    </section>
  );
}
