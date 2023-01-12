// 引入ReactDom
import ReactDom from 'react-dom/client'

//引入日历组件
// import Calendar from './components/calendar'

import { useRef } from 'react'

// 创建React元素
const App = () => {
    const wrapRef = useRef()
    const getRef = () => {
        console.log(wrapRef.current)
    }
    return <div ref={wrapRef}>
        <button onClick={getRef}>获得ref</button>
    </div>
}




const root = ReactDom.createRoot(document.querySelector('#root'))

root.render(<App />)

//~使用 npx react-scripts build 打包
//~使用 npx react-scripts start 实时编译 