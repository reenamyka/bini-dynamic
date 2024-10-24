import { gql } from "@apollo/client";

export default gql`
  query HeroBanner {
    page(id: "cG9zdDoxNzAyMQ==") {
      id
      title
      heroBanner {
        fieldGroupName
        heroBanner {
          id
          mediaItemUrl
        }
      }
    }
  }
`;
