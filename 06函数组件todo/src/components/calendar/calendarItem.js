import { useState } from "react"
function CalendarItem(props) {
    const { data } = props
    const remove = () => { }
    return <div className="calendar-item" >
        <span>{data.date}</span>
        <div className="item-right">
            <span>{data.content}</span>
            <span>{data.time}</span>
        </div>
        <button onClick={remove}>删除该条记录</button>
    </div >
}


export default CalendarItem