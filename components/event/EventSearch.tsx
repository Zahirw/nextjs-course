import { useRef } from 'react'
// components
import Button from 'components/ui/Button'
import classes from './EventSearch.module.css'
type Props = {
  onSearch: any
}

const EventSearch = (props: Props) => {
  const selectedMonth = useRef<HTMLSelectElement>(null)
  const selectedYear = useRef<HTMLSelectElement>(null)

  const submitSearchHandler: React.FormEventHandler = (event: React.FormEvent) => {
    event.preventDefault()
    props.onSearch(selectedMonth.current?.value, selectedYear.current?.value)
  }
  return (
    <form className={classes.form} onSubmit={submitSearchHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='year'>Year</label>
          <select id='year' ref={selectedYear}>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='month'>Month</label>
          <select id='month' ref={selectedMonth}>
            <option value='1'>January</option>
            <option value='2'>February</option>
            <option value='3'>March</option>
            <option value='4'>April</option>
            <option value='5'>May</option>
            <option value='6'>June</option>
            <option value='7'>July</option>
            <option value='8'>August</option>
            <option value='9'>Septemer</option>
            <option value='10'>October</option>
            <option value='11'>November</option>
            <option value='12'>December</option>
          </select>
        </div>
      </div>
      <Button type='button' link='' onClick={()=> {}}>
        Find Events
      </Button>
    </form>
  )
}

export default EventSearch