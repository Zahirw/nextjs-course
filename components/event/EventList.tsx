// components
import EventItem from "./EventItem"
// Styles
import classes from './EventList.module.css'
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
    <ul className={classes.list}>
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