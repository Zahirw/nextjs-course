import Link from "next/link";
import Image from "next/image";
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
    <li>
      <Image src={'/' + image} alt={title} width={500} height={500}/>
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  )
}

export default EventItem