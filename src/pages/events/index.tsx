import EventList from 'components/event/EventList'
import { getAllEvents } from 'dummy-data'

const EventIndex = () => {
  const events: Array<any> = getAllEvents()
  return (
    <EventList items={events}/>
  )
}
export default EventIndex