import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export function getClient() {
  return new ApolloClient({
    cache: new InMemoryCache({
      // Prevent ACF flexible content items from being normalized by id.
      // These nested layout objects can share ids in WPGraphQL, causing
      // values (e.g., reverse/paddingX) to bleed across blocks.
      typePolicies: {
        PageBuilderPageBuilderContentLayout: { keyFields: false },
        PageBuilderContentLayout: { keyFields: false },
        PageBuilderPageBuilderHeroLayout: { keyFields: false },
      },
    }),
    link: new HttpLink({
      uri:
        process.env.NEXT_PUBLIC_WP_GRAPHQL_URL ||
        process.env.WP_GRAPHQL_ENDPOINT,
      fetchOptions: { cache: "no-store" },
    }),
  });
}
