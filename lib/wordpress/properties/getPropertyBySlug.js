import { getClient } from "@/lib/apollo/client";
import { PROPERTY_BY_SLUG_QUERY } from "./queries";

export async function getPropertyBySlug(slug) {
  const { data } = await getClient().query({
    query: PROPERTY_BY_SLUG_QUERY,
    variables: { slug },
  });
  return data?.property || null;
}
