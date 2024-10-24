export default {
    name: "videosSection",
    queryid: "getBiniVideoBlock",
    query: `query videoSection {
          page(id: "17021", idType: DATABASE_ID) {
          id
          biniHomepage {
              videosBlock {
              videosList {
                  ... on Page_Binihomepage_VideosBlock_VideosList_VideoItem {
                  videoThumbnail {
                      mediaItemUrl
                      altText
                  }
                  videoEmbed
                  videoTitle
                  }
              }
              blockTitle
              moreVideos {
              url
              title
              target
            }
              }
          }
          }
      }`,
  };