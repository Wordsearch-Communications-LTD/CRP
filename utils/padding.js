"use client";

// Map your ACF values → Tailwind classes
const topPaddingScale = {
  none: "pt-0",
  small: "pt-[24px]",
  medium: "py-[var(--spacing-48)] lg:pt-[var(--spacing-80)]",
  large: "pt-[120px]",
  default: "py-[var(--spacing-48)] lg:pt-[var(--spacing-80)]",
};

const bottomPaddingScale = {
  none: "pb-0",
  small: "pb-[24px]",
  medium: "py-[var(--spacing-48)] lg:pb-[var(--spacing-80)]",
  large: "pb-[120px]",
  default: "py-[var(--spacing-48)] lg:pb-[var(--spacing-80)]",
};

export function getResponsivePadding(
  padding_top = "default",
  padding_bottom = "default"
) {
  const topClass = topPaddingScale[padding_top] || topPaddingScale.default;
  const bottomClass = bottomPaddingScale[padding_bottom] || bottomPaddingScale.default;
  return `${topClass} ${bottomClass}`.trim();
}

// Map ACF string array → small/medium/large/none
export function mapPaddingValue(arr) {
  if (!arr || arr.length === 0) return "default";
  const value = arr[0]?.toLowerCase();
  if (value.includes("small")) return "small";
  if (value.includes("medium")) return "medium";
  if (value.includes("large")) return "large";
  if (value.includes("none")) return "none";
  return "default";
}
