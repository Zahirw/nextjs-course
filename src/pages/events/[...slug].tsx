import { Fragment } from "react"
import { useRouter } from "next/router"
import { getFilteredEvents } from "dummy-data"
import EventList from "components/event/EventList";
import ResultsTitle from "components/results-title/results-title";
import ErrorAlert from "components/ui/error-alert/error-alert";
import Button from "components/ui/Button";

type Props = {}

const FilteredEventsPage = (props: Props) => {
  const router = useRouter()
  
  const filterData = router.query.slug

  if (!filterData) {
    return (
    <p>loading....</p>
    )
  }
  const monthFilter = +filterData[1]
  const yearFilter = +filterData[0]
  if (
    isNaN(monthFilter) ||
    isNaN(yearFilter) ||
    yearFilter > 2030 ||
    yearFilter < 2021 ||
    monthFilter < 1 ||
    monthFilter > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events' type="link" onClick={()=>{}}>Show All Events</Button>
        </div>
      </Fragment>
    )
  }
  const filteredEvents = getFilteredEvents({
    year: yearFilter,
    month: monthFilter,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
      <ErrorAlert>
        <p>No events found for the chosen filter!</p>
      </ErrorAlert>
      <div className='center'>
        <Button link='/events' type="link" onClick={()=>{}}>Show All Events</Button>
      </div>
    </Fragment>
    );
  }
  const date = new Date(yearFilter, monthFilter - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  )
}

export default FilteredEventsPage