import { getClient } from "@/lib/apollo/client";
import { ALL_PROPERTIES_QUERY } from "./queries";

export async function getAllProperties() {
  const { data } = await getClient().query({
    query: ALL_PROPERTIES_QUERY,
  });
  return data?.properties?.nodes || [];
}
