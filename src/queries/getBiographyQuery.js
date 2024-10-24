import { gql } from "@apollo/client";

export default gql`
  query biographySection {
    page(id: "cG9zdDoxNzAyMQ==") {
      id
      title
      heroBanner {
        biographySection {
          firstMember {
            fullName
            birthday
            description
            nickname
            image {
              mediaItemUrl
            }
          }
          secondMember {
            fullName
            birthday
            description
            nickname
            image {
              mediaItemUrl
            }
          }
          thirdMember {
            fullName
            birthday
            description
            nickname
            image {
              mediaItemUrl
            }
          }
          fourthMember {
            fullName
            birthday
            description
            nickname
            image {
              mediaItemUrl
            }
          }
          fifthMember {
            fullName
            birthday
            description
            nickname
            image {
              mediaItemUrl
            }
          }
          sixthMember {
            fullName
            description
            nickname
            image {
              mediaItemUrl
            }
            birthday
          }
          seventhMember {
            fullName
            birthday
            description
            nickname
            image {
              mediaItemUrl
            }
          }
          eightMember {
            fullName
            birthday
            description
            nickname
            image {
              mediaItemUrl
            }
          }
          ninthMember {
            fullName
            birthday
            description
            nickname
            image {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`;
