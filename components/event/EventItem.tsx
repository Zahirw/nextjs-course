import Link from "next/link";
import Image from "next/image";

// styles
import classes from './EventItem.module.css'

type Props = {
  title: string,
  image: string,
  date: Date,
  location: string,
  id: string
}

const EventItem = (props: Props) => {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <Image src={'/' + image} alt={title} width={300} height={300}/>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div  className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  )
}

export default EventItem