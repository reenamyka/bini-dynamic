export default {

    name:"eventsSection",
    queryid: "getBiniEventsBlock",
    query: `query eventsBlock {
  page(id: "17021", idType: DATABASE_ID) {
    id
    title
    biniHomepage {
      fieldGroupName
      eventsBlock {
        fieldGroupName
        blockTitle
        eventsLists {
          ... on Page_Binihomepage_EventsBlock_EventsLists_EventsItem {
            eventEndDate
            fieldGroupName
            eventTitle
            eventVenue
            eventStartDate
            eventDetails {
              target
              title
              url
            }
          }
        }
      }
    }
  }
}`
}