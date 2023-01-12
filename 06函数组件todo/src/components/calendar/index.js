import './index.css'
import CalendarItem from './calendarItem'
import { useState } from 'react'
function Calendar() {
    const [dataSource, setDataSource] = useState([
        {
            id: 1,
            date: '01-01',
            content: '学习webpack',
            time: '40min',
            count: 1
        },
        {
            id: 2,
            date: '01-02',
            content: '学习react',
            time: '2h30min',
            count: 1
        },
        {
            id: 3,
            date: '01-03',
            content: '学习react',
            time: '30min',
            count: 1
        },
    ])

    const addRecord = () => {
        let id = dataSource[dataSource.length - 1].id + 1
        const record = {
            date: "01-04",
            content: '学习函数组件',
            time: '2h',
            id
        }
        setDataSource([...dataSource, record])
        console.log(dataSource)
    }
    return <div className='calendar'>
        {dataSource.map((item, index) => { return <CalendarItem key={item.date} data={item}></CalendarItem> })}
        <button onClick={addRecord}>添加学习记录</button>
    </div>
}


export default Calendar