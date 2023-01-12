import { useState } from "react"
function CalendarItem(props) {
    const { data } = props
    const itemClick = ({ content, time }) => {
        console.log(`${content}花费了${time}`)
    }
    const add = ({ count }, event) => {
        let [initCount, setCount] = useState(count)
        initCount++;
        setCount(initCount)
        console.log(count)
    }
    return <div className="calendar-item" >
        <span>{data.date}</span>
        <div>
            <span>{data.content}</span>
            <span>{data.time}</span>
            <span> 次数：{data.count}</span>
            <button onClick={event => add(data, event)}>次数+1</button>
        </div>
    </div>
}


export default CalendarItem