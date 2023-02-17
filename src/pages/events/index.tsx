import { Fragment } from 'react'
import EventList from 'components/event/EventList'
import EventSearch from 'components/event/EventSearch'
import { getAllEvents } from 'dummy-data'
import { useRouter } from 'next/router'

const EventIndex = () => {
  const router = useRouter()
  const events: Array<any> = getAllEvents()

  const handleSearch = (month:any, year:any) => {
    const path: string = `/events/${year}/${month}`
    router.push(path)
  }
  return (
    <Fragment>
      <EventSearch onSearch={handleSearch}/>
      <EventList items={events}/>
    </Fragment>
  )
}
export default EventIndex