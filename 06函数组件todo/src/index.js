// 引入ReactDom
import ReactDom from 'react-dom/client'
// 引入全局组件
import './index.css'
//引入日历组件
import Calendar from './components/calendar'
import RecordForm from './components/RecordForm/recordForm'
import { useRef, useState } from 'react'

// 创建React元素
const App = () => {
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

    const formSubmit = (data) => {
        data.id = +new Date()
        setDataSource([...dataSource, data])
    }

    return <div className={'wrap'}>
        <Calendar data={dataSource} />
        <RecordForm onSubmit={formSubmit} />
    </div>
}


const root = ReactDom.createRoot(document.querySelector('#root'))

root.render(<App />)

//~使用 npx react-scripts build 打包
//~使用 npx react-scripts start 实时编译 