// components/AgentContacts.jsx
import Image from "next/image";

/* --------- theme hooks (map to your token classes) --------- */
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
 * - bg:       one of keys in BG (default "grad-blue-lite")
 * - text:     "dark" | "light"
 * - columns:  [
 *     {
 *       eyebrow: "A development by",
 *       logo: { src, alt, width?, height? },
 *       agents: [
 *         { name, role?, phone?, email? }  // role is optional subtitle
 *       ]
 *     }, ...
 *   ]
 */
export default function AgentContacts({
  bg = "grad-blue-lite",
  text = "dark",
  columns = [],
}) {
  return (
    <section className={`${BG[bg]} ${TEXT[text]} w-full`}>
      <div className="
        mx-auto max-w-[1600px]
        px-[16px] sm:px-[32px] md:px-[64px] lg:px-[96px] xl:px-[112px]
        py-[64px] md:py-[80px] lg:py-[96px]
      ">
        {/* 1-column mobile → 3 columns desktop, 32px figma gap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] md:gap-[32px] items-start">
          {columns.map((col, i) => (
            <div key={i} className="w-full">
              {/* Eyebrow (contacts-headline: Archia Regular, 20 / 10 / 20, 125%, 2%) */}
              {col.eyebrow && (
                <p className="
                  text-section-title regular wide
                  text-left text-[#162536]
                  text-[20px] md:text-[10px] lg:text-[20px]
                ">
                  {col.eyebrow}
                </p>
              )}

              {/* Logo */}
              {col.logo && (
                <div className="mt-[12px] mb-[16px]">
                  <Image
                    src={col.logo.src}
                    alt={col.logo.alt || ""}
                    width={col.logo.width || 240}
                    height={col.logo.height || 70}
                    className="h-auto w-auto max-h-[56px] object-contain"
                  />
                </div>
              )}

              {/* Agents list (gap 32 per Figma on desktop) */}
              <div className="flex flex-col gap-[16px] md:gap-[24px] lg:gap-[32px]">
                {col.agents?.map((a, idx) => (
                  <div key={idx} className="border-t first:border-t-0 border-black/10 pt-[16px] first:pt-0">
                    {/* agent-names: Archia Medium (16 mobile / 10 tablet / 20 desktop), LH 24 */}
                    <h4 className="
                      font-archia medium text-[#162536] wide
                      text-[16px] md:text-[10px] lg:text-[20px]
                      leading-[24px]
                    ">
                      {a.name}
                    </h4>

                    {/* Optional role (Silka, 16→14, 150%, 4%) */}
                    {a.role && (
                      <p className="
                        text-body-1 regular wider text-[#162536]
                        text-[12px] md:text-[12px] lg:text-[14px]
                        lh-biggest mt-[2px]
                      ">
                        {a.role}
                      </p>
                    )}

                    {/* agent-details-clickable: Silka Regular (14 mobile/tablet, 16 desktop), 150%, 4% */}
                    <div className="mt-[6px] flex flex-col gap-[4px]">
                      {a.phone && (
                        <a
                          href={`tel:${a.phone.replace(/\s+/g, "")}`}
                          className="text-body-1 wider lh-biggest text-[#162536] text-[14px] lg:text-[16px]"
                        >
                          {a.phone}
                        </a>
                      )}
                      {a.email && (
                        <a
                          href={`mailto:${a.email}`}
                          className="text-body-1 wider lh-biggest text-[#162536] text-[14px] lg:text-[16px] break-all"
                        >
                          {a.email}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
