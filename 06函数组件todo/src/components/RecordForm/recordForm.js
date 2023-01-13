import './recordForm.css'
import Card from "../UI/Card/Card"
const RecordForm = (props) => {
    let dateValue = ''
    let descValue = ''
    let timeValue = ''
    const formSubmit = (e) => {
        e.preventDefault()
        const data = {
            date: dateValue,
            content: descValue,
            time: timeValue
        }
        props.onSubmit(data)

    }
    const inputDate = (e) => {
        dateValue = e.target.value
    }
    const inputDesc = (e) => {
        descValue = e.target.value
    }
    const inputTime = (e) => {
        timeValue = e.target.value
    }

    return <Card className={'record-form'}>
        <form onSubmit={formSubmit}>
            <div>
                <label htmlFor='date'>日期</label>
                <input id='date' type="date" onChange={inputDate} />
            </div>
            <div>
                <label htmlFor='desc'>内容</label>
                <input id='desc' type="text" onChange={inputDesc} />
            </div>
            <div>
                <label htmlFor='time'>时间</label>
                <input id='time' type="text" onChange={inputTime} />
            </div>
            <div>
                <button >添加学习记录</button>
            </div>
        </form>
    </Card>
}

export default RecordForm