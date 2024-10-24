export default {
  name: "biographySection",
  queryid: "getBiniArtistsBlock",
  query: `query artistBlock {
    page(id: "17021", idType: DATABASE_ID) {
      id
      title
      biniHomepage {
        fieldGroupName
        artistBlock {
          fieldGroupName
          artistProfile {
            ... on Page_Binihomepage_ArtistBlock_ArtistProfile_ArtistProfile {
              artistTitle
              birthday
              description
              fullName
              nickName
              fieldGroupName
              artistProfileImage {
                altText
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
`,
};