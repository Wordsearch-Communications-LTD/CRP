import { gql } from "@apollo/client";

export const PAGE_BY_URI_QUERY = gql`
  query PageByUri($uri: String!) {
    pageBy(uri: $uri) {
      id
      title
      uri
      pageBuilder {
        pageBuilder {
          fieldGroupName

          # Content Block
          ... on PageBuilderPageBuilderContentLayout {
            id
            fieldGroupName
            bc
            ch
            cl
            contentLocationCopy
            copy
            eyebrowTitle
            image { node { sourceUrl altText } }
            label
            link { title url }
            pb
            pt
            reverse
            text
            title
            imageXPadding
          }

          # Hero Block with extended ACF fields
          ... on PageBuilderPageBuilderHeroLayout {
            id
            componentType
            heroType
            heroText
            heroSubCopy
            heroLayout
            mobileVimeoId
            desktopVimeoId
            arrowLink { label link { url } }
            arrowImage {
            node {
              sourceUrl
            }
            }
            image {
            node {
              sourceUrl
            }
          }
            bc
            ch
            cl
            pt
            pb
          }

          # Overlay Hero Block -> StoryHero
          ... on PageBuilderPageBuilderOverlayheroLayout {
            fieldGroupName
            description
            backgroundImage { node { sourceUrl } }
            overlayCta: cta { url title target }
            headline
            subtext
          }

          # Story Feature Section Block
          ... on PageBuilderPageBuilderStoryfeaturesectionLayout {
            author
            duration
            fieldGroupName
            image { node { sourceUrl } }
            videosrc
            title
            role
          }

          # Counter Section (Donation / Community Partners)
          ... on PageBuilderPageBuilderCountersectionLayout {
            description
            fieldGroupName
            bc
            pb
            pt
            title
            variant
            counteritems {
              label
              pad
              value
              fieldGroupName
            }
            counterCta: cta {
              link { title url }
              variant
            }
          }

          # Feature Cards Section
          ... on PageBuilderPageBuilderFeaturecardssectionLayout {
            fieldGroupName
            bc
            cardBackground
            pb
            pt
            textColor
            card {
              text
              title
            }
          }

          # Partners Section
          ... on PageBuilderPageBuilderPartnerssectionLayout {
            fieldGroupName
            label
            title
            categories {
              partners { name }
              title
            }
            image { node { sourceUrl } }
            bc
            pb
            pt
            textColor
          }

          # Image Banner Section
          ... on PageBuilderPageBuilderImageLayout {
            id
            pb
            pt
            cl
            ch
            bc
            image {
              node {
                sourceUrl
                altText
              }
            }
          }

          # Video Hero Section
          ... on PageBuilderPageBuilderVideoLayout {
            id
            bc
            ch
            cl
            desktopVideoId
            mobileVideoId
            pb
            pt
            overlayImage {
              node {
                altText
                sourceUrl
              }
            }
          }

          # Investment / Content Details Section
          ... on PageBuilderPageBuilderContentdetailssectionLayout {
            description
            fieldGroupName
            title
            textColor
            showDetailsFlag: showdetails
            contentdetailsReverse: reverse
            pt
            pb
            bc
            contact {
              email
              fieldGroupName
              name
              phone
              button
              pdfFile { node { fileSize mediaItemUrl } }
            }
            image { node { sourceUrl altText } }
            details { label value }
          }

          # Stats Grid
          ... on PageBuilderPageBuilderStatsgridLayout {
            fieldGroupName
            bc
            pb
            pt
            textColor
            stats {
              label
              value
            }
          }

          # Core Values Grid
          ... on PageBuilderPageBuilderCorevaluesLayout {
            column
            fieldGroupName
            bc
            items {
              image { node { sourceUrl } }
              text
              title
            }
            pb
            pt
            textColor
          }

          # Text Hero (StoriesHeader or PageIntro)
          ... on PageBuilderPageBuilderTextheroLayout {
            eyebrow
            fieldGroupName
            bc
            breadcrumbs
            pb
            pt
            texts
            title
          }

          # Split Media Content Section
          ... on PageBuilderPageBuilderSplitmediacontentLayout {
            description
            fieldGroupName
            bc
            headline
            innerbg
            pb
            pt
            reverseBool: reverse
            textColor
            image { node { sourceUrl } }
            button { title url }
          }
          ... on PageBuilderPageBuilderQouteSectionLayout {
            fieldGroupName
            bc
            innerbg
            layout
            width
            pb
            pt
            qoutes {
              text
              image { node { id sourceUrl } }
              author
            }
            quoteReverse: reverse
            textColor
          }
          # Team Section
          ... on PageBuilderPageBuilderTeamSectionLayout {
            fieldGroupName
            teamTabs {
              tabDescription
              tabTitle
              members {
                name
                role
                photo { node { sourceUrl } }
              }
            }
          }

          # Missionary Grid Section
          ... on PageBuilderPageBuilderMissionaryGridLayoutLayout {
            fieldGroupName
            griditems {
              grid_item_types
              headline
              subtext
              image { node { sourceUrl altText } }
            }
            bc
            pb
            pt
            textColor
          }

          # Image Slider Section
          ... on PageBuilderPageBuilderImageSliderLayout {
            fieldGroupName
            slides {
              imageCaption
              image { node { sourceUrl altText } }
            }
            bc
            pb
            pt
            textColor
          }
        }
      }
    }
  }
`;

export const ALL_PAGES_QUERY = gql`
  query AllPages {
    pages {
      nodes {
        id
        title
        uri
      }
    }
  }
`;
