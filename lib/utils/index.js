export function formatPhone(phone) {
  return phone?.replace(/\D/g, "") || "";
}

// Known WordPress backend hostnames whose absolute URLs should be made relative
export const WP_BASE_HOSTS = [
  "gfpre-backend.wordsearch-ny.dev",
  "www.gfpre-backend.wordsearch-ny.dev",
];

// Convert an absolute URL from the WP backend into a site-relative path.
// Leaves external links, mailto:, tel:, hashes and already-relative paths unchanged.
export function toRelativeLink(input) {
  if (!input) return input;
  const url = String(input).trim();

  // Leave special schemes and hashes intact
  if (/^(mailto:|tel:)/i.test(url) || url.startsWith("#")) return url;

  // Already relative
  if (url.startsWith("/")) return url;

  try {
    const parsed = new URL(url);
    if (WP_BASE_HOSTS.includes(parsed.hostname)) {
      // Keep path + query + hash
      return `${parsed.pathname}${parsed.search}${parsed.hash}` || "/";
    }
    // Different host → leave as-is (external link)
    return url;
  } catch (_) {
    // Not a valid absolute URL → coerce to relative
    return url.startsWith("/") ? url : `/${url}`;
  }
}

// Normalize a WP link field object shape: { url, title, target }
export function normalizeLinkField(link) {
  if (!link) return link;
  return {
    ...link,
    url: toRelativeLink(link.url),
  };
}
