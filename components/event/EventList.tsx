// components
import EventItem from "./EventItem"

type Props = {
  items: Array<any>
}
type Event = {
  title: string,
  image: string,
  date: Date,
  location: string,
  id: string
}

const EventList = (props: Props) => {
  const { items } = props
  return (
    <ul>
      {
        items.map((event: Event) => 
        <EventItem 
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
        )
      }
    </ul>
  )
}

export default EventList