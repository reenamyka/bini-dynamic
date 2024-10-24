export default {
    name: "galleryBlock",
    queryid: "getBiniGalleryBlock",
    query: `query galleryBlock {
  page(id: "17021", idType: DATABASE_ID) {
    biniHomepage {
      galleryBlock {
        fieldGroupName
        blockTitle
        artistsGallery {
          altText
          caption
          guid
          slug
          sourceUrl
          srcSet
          status
          title
          uri
          mediaItemUrl
        }
      }
      fieldGroupName
    }
  }
}`,
};