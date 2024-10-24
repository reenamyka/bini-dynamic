export default {
    name: 'shopSection',
    queryid: "getBiniShopBlock",
    query: `query shopBlock {
  page(id: "17021", idType: DATABASE_ID) {
    id
    title
    biniHomepage {
      shopBlock {
        fieldGroupName
        blockTitle
        shopDescription
        shopCoverImage {
          altText
          caption
          description
          guid
          slug
          sourceUrl
          srcSet
          status
          title
          uri
          mediaItemUrl
        }
        shopLink {
          url
          title
          target
        }
      }
    }
  }
}`
}