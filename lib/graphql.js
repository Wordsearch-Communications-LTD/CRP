import { GraphQLClient, gql } from "graphql-request";
import { HOME_DATA } from "../data/home";

// Server-side GraphQL client for WPGraphQL
function getClient() {
  const endpoint =
    process.env.WP_GRAPHQL_ENDPOINT || process.env.NEXT_PUBLIC_WP_GRAPHQL_ENDPOINT;
  if (!endpoint) {
    throw new Error(
      "WP_GRAPHQL_ENDPOINT is not set. Add it to your environment (.env)."
    );
  }

  const headers = {};
  // Optional: WPGraphQL auth (e.g., JWT or Basic)
  if (process.env.WP_GRAPHQL_AUTH_HEADER) {
    headers["Authorization"] = process.env.WP_GRAPHQL_AUTH_HEADER;
  }

  return new GraphQLClient(endpoint, { headers, fetch });
}

export async function fetchGraphQL(query, variables) {
  const client = getClient();
  return client.request(query, variables);
}

// Home stub retained for current static home implementation
export async function fetchHome() {
  return HOME_DATA;
}

// Fetch all published WordPress page URIs for static generation
export async function getAllPageUris() {
  const query = gql`
    query GetAllPages($first: Int = 1000, $after: String) {
      pages(first: $first, after: $after, where: { status: PUBLISH }) {
        pageInfo { hasNextPage endCursor }
        nodes { uri }
      }
    }
  `;

  let hasNextPage = true;
  let after = undefined;
  const uris = [];

  while (hasNextPage) {
    const data = await fetchGraphQL(query, { first: 1000, after });
    const page = data?.pages;
    if (!page) break;
    uris.push(
      ...(page.nodes || [])
        .map((n) => n?.uri)
        .filter(Boolean)
        .map((u) => (u.startsWith("/") ? u : `/${u}`))
    );
    hasNextPage = page.pageInfo?.hasNextPage;
    after = page.pageInfo?.endCursor || undefined;
  }

  // Ensure unique
  return Array.from(new Set(uris));
}

// Fetch a single WordPress page by URI
export async function getPageByUri(uri) {
  const query = gql`
    query PageByUri($uri: ID!) {
      nodeByUri(uri: $uri) {
        __typename
        ... on Page {
          id
          uri
          title
          content
          featuredImage {
            node { sourceUrl altText }
          }
          pageBuilder {
            pageBuilder {
              fieldGroupName
              __typename
              # Hero layout fields
              ... on PageBuilderPageBuilderHeroLayout {
                id
                heroType
                heroText
                heroSubCopy
                arrowLink {
                  label
                  link { url }
                }
                bc
                ch
                cl
                pt
                pb
                mobileVimeoId
                desktopVimeoId
            
              }
            }
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL(query, { uri });
  const node = data?.nodeByUri;
  if (node?.__typename === "Page") return node;
  return null;
}
