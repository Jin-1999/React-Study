import './index.css'

function Calendar() {
    const dataSource = [
        {
            date: '01-01',
            content: '学习webpack',
            time: '40min'
        },
        {
            date: '01-02',
            content: '学习react',
            time: '2h30min'
        },
        {
            date: '01-03',
            content: '学习react',
            time: '30min'
        },
    ]
    return <div className='calendar'>
        {dataSource.map((item, index) => {
            return <div className="calendar-item">
                <span>{item.date}</span>
                <div>
                    <span>{item.content}</span>
                    <span>{item.time}</span>
                </div>
            </div>
        })}
    </div>
}


export default Calendar