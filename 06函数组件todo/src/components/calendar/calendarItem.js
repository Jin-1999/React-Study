import { useState } from "react"
function CalendarItem(props) {
    const { data, onRemove } = props
    const remove = (data) => {
        onRemove(data)
    }
    return <div className="calendar-item" >
        <span>{data.date}</span>
        <div className="item-right">
            <span>{data.content}</span>
            <span>{data.time}</span>
        </div>
        <button className="del" onClick={() => remove(data)}>x</button>
    </div >
}


export default CalendarItem