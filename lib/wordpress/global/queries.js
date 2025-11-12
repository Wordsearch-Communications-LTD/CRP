import { gql } from "@apollo/client";

export const FOOTER_QUERY = gql`
  query GetFooter {
    footerSettings{
  themeSettingsFooter {
    footerInfo
    footerImage {
      node {
        sourceUrl
        altText
      }
    }
    contactGroups {
      companyName
      companyLogo {
        node {
          sourceUrl
          altText
        }
      }
      people {
        name
        phone
        email
      }
    }
    cookieBanner {
      content
    }
  }
}
  }

`;

export const HEADER_QUERY = gql`
  query Header {
    themeSettingsHeader {
      logo {
        sourceUrl
      }
      menu {
        label
        url
      }
    }
  }
`;

export const MENUS_AND_HEADER_QUERY = gql`
  query MenusAndHeader($uri: String!) {
    primary: menu(id: "Primary", idType: NAME) {
      menuItems {
        nodes {
          id
          label
          path
          parentId
          childItems { nodes { id label path } }
        }
      }
    }
    secondary: menu(id: "Secondary", idType: NAME) {
      menuItems { nodes { id label path parentId childItems { nodes { id label path } } } }
    }
    headerSettings {
      themeSettingsHeader {
        insideBodyInjection
        insideHeaderInjection
        logoDarkBlue { node { sourceUrl altText } }
        logowhitecolor { node { sourceUrl altText } }
      }
    }
    pageBy(uri: $uri) {
      pageHeaderOptions {
        headerBgDefault
        headerBgScroll
        headerTheme
        logoModeDefault
      }
    }
  }
`;
