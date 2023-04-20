import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../styles/calendar.css'

interface Props {
  onChange: (date: Date) => void;
  value: any;
}

const DatesCalendar:React.FC<Props> = (props) => {
  const {onChange, value} = props;

  const handleCalendarChange = (dateRange:any) => {
    onChange(dateRange);
  };

  const customFormatMonthYear = (locale:any, date:any) => {
    const month = new Intl.DateTimeFormat(locale, { month: 'short' }).format(date)
    return `${month}` ;
  };

  const customFormatShortWeekday = (locale:any, date:any) => {
    return new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date)[0];
  };


  // set the minDate to today's date
  const minDate = new Date();

  return (
    <>
      <Calendar
        locale="en-US"
        formatMonthYear={customFormatMonthYear} 
        formatShortWeekday={customFormatShortWeekday}
        className='my-calendar' 
        onChange={handleCalendarChange}
        value={value}
        selectRange={true}
        minDate={minDate}
        />
    </>
  )
}

export default DatesCalendar;