import { Fragment } from 'react'
import EventList from 'components/event/EventList'
import EventSearch from 'components/event/EventSearch'
import { getAllEvents } from 'dummy-data'

const EventIndex = () => {
  const events: Array<any> = getAllEvents()
  return (
    <Fragment>
      <EventSearch />
      <EventList items={events}/>
    </Fragment>
  )
}
export default EventIndex