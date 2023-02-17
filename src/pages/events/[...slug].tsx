import { useRouter } from "next/router"
import { getFilteredEvents } from "dummy-data"

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
      <p>Invalid filter. Please adjust your values!</p>
    )
  }
  const filteredEvents = getFilteredEvents({
    year: yearFilter,
    month: monthFilter,
  });
  
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
          <p>No events found for the chosen filter!</p>
    );
  }
  return (
    <div>FilteredEventsPage</div>
  )
}

export default FilteredEventsPage