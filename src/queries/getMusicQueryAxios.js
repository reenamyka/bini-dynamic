export default {
    name: "musicGallery",
    queryid: "getBiniDiscographyBlock",
    query: `query discographyBlock {
  page(id: "17021", idType: DATABASE_ID) {
    id
    title
    biniHomepage {
      fieldGroupName
      discographyBlock {
        fieldGroupName
        blockTitle
        moreMusic {
              url
              title
              target
            }
        discographyAlbums {
          ... on Page_Binihomepage_DiscographyBlock_DiscographyAlbums_AlbumItems {
            albumName
            albumReleasedDate
            albumType
            fieldGroupName
            tracksList
            albumCover {
              altText
              mediaItemUrl
            }
            streamNow {
              url
              title
              target
            }
          }
        }
      }
    }
  }
}`,
  };