// components 
import EventList from "components/event/EventList";

import { getFeaturedEvents } from "dummy-data"


const IndexPage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents}/>
    </div>
  )
}

export default IndexPage
