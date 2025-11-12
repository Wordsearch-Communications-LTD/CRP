import { gql } from "@apollo/client";

export const PROPERTY_BY_SLUG_QUERY = gql`
  query PropertyBySlug($slug: ID!) {
    property(id: $slug, idType: SLUG) {
      id
      title
      slug
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;

export const ALL_PROPERTIES_QUERY = gql`
  query AllProperties {
    properties {
      nodes {
        id
        slug
        title
      }
    }
  }
`;
