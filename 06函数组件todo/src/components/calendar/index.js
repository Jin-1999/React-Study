import './index.css'
import CalendarItem from './calendarItem'
import { useState } from 'react'
function Calendar(props) {
    const dataSource = props.data
    return <div className='calendar'>
        {dataSource.map((item, index) => { return <CalendarItem key={item.date} data={item}></CalendarItem> })}
    </div>
}


export default Calendar