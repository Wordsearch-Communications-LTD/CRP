"use client";
import React from "react";

/* ---------------------------
   Theme hooks (classes you already have)
----------------------------*/
const BG = {
  white: "bg-white",
  "grad-blue-lite": "bg-grad-blue-lite-linear",
  "grad-blue-3": "bg-grad-blue-3",
  "grad-green-lite": "bg-grad-green-lite",
  "grad-beige": "bg-grad-beige",
  none: "bg-transparent",
};
const TEXT = { dark: "text-[var(--dark-copy)]", light: "text-white" };

/**
 * AvailabilityTable
 *
 * Props:
 * - bg: one of BG (default "white")
 * - text: "dark" | "light" (default "dark")
 * - striped: boolean (default true)
 * - columns: [{ key, label, align?: "left"|"center"|"right" }]
 * - rows: [{ [key]: value, floorplanUrl?: string }]
 * - totals: optional object keyed like rows (e.g., { floor: "TOTAL", sqFt: "75,197", ... })
 * - borderColorClass: tailwind class for borders (default "border-black/10")
 */
export default function AvailabilityTable({
  bg = "white",
  text = "dark",
  striped = true,
  columns = [
    { key: "floor", label: "Floor", align: "left" },
    { key: "sqFt", label: "SQ FT", align: "left" },
    { key: "sqM", label: "SQ M", align: "left" },
    { key: "availability", label: "Availability", align: "left" },
    { key: "floorplanUrl", label: "Floorplans", align: "center" },
  ],
  rows = [],
  totals,
  borderColorClass = "border-black/10",
}) {
  return (
    <section className={`${BG[bg]} ${TEXT[text]} w-full`}>
      <div
        className="
          mx-auto max-w-[1600px]
          px-[16px] sm:px-[32px] md:px-[64px] lg:px-[96px] xl:px-[112px]
          py-[32px] md:py-[48px] lg:py-[64px]
        "
      >
        {/* horizontal scroll for small screens */}
        <div className="overflow-x-auto">
          <table className={`min-w-[760px] w-full border ${borderColorClass}`}>
            {/* HEAD */}
            <thead className={`bg-white/50 ${text === "light" ? "text-white/90" : "text-[var(--dark-copy)]"}`}>
              <tr className={`border-b ${borderColorClass}`}>
                {columns.map((c) => (
                  <th
                    key={c.key}
                    scope="col"
                    className={`
                      archia-medium medium uppercase tracking-[0.16em]
                      text-[12px] md:text-[14px] lg:text-[20px] leading-[1.25]
                      text-left
                      px-3 md:px-4 lg:px-6 py-3 md:py-3.5 lg:py-4
                      ${c.align === "center" ? "text-center" : c.align === "right" ? "text-right" : "text-left"}
                    `}
                  >
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>

            {/* BODY */}
            <tbody className="silka-regular tracking-[0.02em]">
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className={[
                    "border-b",
                    borderColorClass,
                    striped ? (idx % 2 ? "bg-black/[0.03]" : "bg-transparent") : "",
                  ].join(" ")}
                >
                  {columns.map((c) => {
                    const isDownload = c.key === "floorplanUrl";
                    return (
                      <td
                        key={c.key}
                        className={`
                          text-[14px] md:text-[16px] lg:text-[20px] leading-[1.5]
                          px-3 md:px-4 lg:px-6 py-3 md:py-3.5 lg:py-4
                          ${c.align === "center" ? "text-center" : c.align === "right" ? "text-right" : "text-left"}
                        `}
                      >
                        {isDownload ? (
                          row[c.key] ? (
                            <a
                              href={row[c.key]}
                              target="_blank"
                              rel="noopener"
                              aria-label={`Download floorplan for ${row.floor ?? "item"}`}
                              className="inline-flex items-center justify-center group"
                            >
                              {/* download icon (fits Figma) */}
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="transition-transform duration-200 group-hover:translate-y-[2px]"
                              >
                                <path d="M12 3v11m0 0 4-4m-4 4-4-4" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M5 20h14" stroke="currentColor" strokeWidth="1.5" />
                              </svg>
                            </a>
                          ) : (
                            <span className="opacity-40">—</span>
                          )
                        ) : (
                          row[c.key] ?? "—"
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>

            {/* FOOTER (totals) */}
            {totals && (
              <tfoot>
                <tr className={`bg-white/50 ${borderColorClass} border-t`}>
                  {columns.map((c, i) => (
                    <td
                      key={c.key}
                      className={`
                        px-3 md:px-4 lg:px-6 py-3 md:py-3.5 lg:py-4
                        ${i === 0 ? "font-archia medium uppercase tracking-[0.16em]" : "font-archia medium"}
                        text-[12px] md:text-[14px] lg:text-[20px] leading-[1.25]
                        ${c.align === "center" ? "text-center" : c.align === "right" ? "text-right" : "text-left"}
                      `}
                    >
                      {totals[c.key] ?? (i === 0 ? "TOTAL" : "—")}
                    </td>
                  ))}
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      </div>
    </section>
  );
}
