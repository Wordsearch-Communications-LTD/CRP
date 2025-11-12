import { getClient } from "@/lib/apollo/client";
import { PAGE_BY_URI_QUERY } from "./queries";

function normalizeUri(input) {
  const cleaned = String(input || "").replace(/^\/+|\/+$/g, "");
  if (!cleaned) return "/";
  return `/${cleaned}/`;
}

export async function getPageByUri(uri) {
  const normalized = normalizeUri(uri);
  const { data } = await getClient().query({
    query: PAGE_BY_URI_QUERY,
    variables: { uri: normalized },
  });
  console.log('====================================');
  // console.log(data);
  console.log('====================================');
  return data?.pageBy || null;
}

export { normalizeUri };
