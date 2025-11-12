import { getClient } from "@/lib/apollo/client";
import { ALL_PAGES_QUERY } from "./queries";

export async function getAllPages() {
  const { data } = await getClient().query({
    query: ALL_PAGES_QUERY,
  });
 
 
  
  return data?.pages?.nodes || [];
}
