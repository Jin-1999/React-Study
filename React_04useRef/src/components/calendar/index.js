import './index.css'
import CalendarItem from './calendarItem'
function Calendar() {
    const dataSource = [
        {
            date: '01-01',
            content: '学习webpack',
            time: '40min',
            count: 1
        },
        {
            date: '01-02',
            content: '学习react',
            time: '2h30min',
            count: 1
        },
        {
            date: '01-03',
            content: '学习react',
            time: '30min',
            count: 1
        },
    ]
    const itemClick = ({ time }) => {
        alert('学习了' + time)
    }
    return <div className='calendar'>
        {dataSource.map((item, index) => { return <CalendarItem key={item.date} data={item}></CalendarItem> })}
    </div>
}


export default Calendar