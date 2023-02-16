// components
import EventItem from "./EventItem"

type Props = {
  items: string[]
}

const EventList = (props: Props) => {
  const { items } = props
  return (
    <ul>
      {
        items.map((event:string) => 
        <EventItem key={event}/>
        )
      }
    </ul>
  )
}

export default EventList