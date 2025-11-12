export function parseHeroSubCopy(htmlString = "") {
  if (!htmlString) return "";

  // Remove outer <p>...</p> but keep inner HTML (like <strong>)
  return htmlString.replace(/^<p[^>]*>([\s\S]*?)<\/p>$/i, "$1").trim();
 
}
 
 
