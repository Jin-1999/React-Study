import './index.css'
import CalendarItem from './calendarItem'
import { useState } from 'react'
function Calendar(props) {
    const dataSource = props.data
    const remove = props.onRemove
    const isHasList = dataSource.length ? true : false
    return <div className='calendar'>
        {!isHasList && <div>当前没有记录啦</div>}
        {dataSource.map((item, index) => { return <CalendarItem key={item.id} data={item} onRemove={remove}></CalendarItem> })}
    </div>
}


export default Calendar