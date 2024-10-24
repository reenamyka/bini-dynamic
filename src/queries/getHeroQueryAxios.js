export default {
  name: "heroBanner",
  queryid: "getBiniHeroBanner", 
  query: `query heroBanner {
  page(id: "17021", idType: DATABASE_ID) {
    id
    title
    biniHomepage {
      fieldGroupName
      heroBanner {
        desktopImage {
          altText
          mediaItemUrl
        }
        mobileImage {
          altText
          mediaItemUrl
        }
      }
    }
  }
}`,
};