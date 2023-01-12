// 引入ReactDom
import ReactDom from 'react-dom/client'

//引入日历组件
// import Calendar from './components/calendar'

import { useState } from 'react'

// useState的缺点，setCount是一个异步重新渲染的过程，如果两次点击很快，
// 可能会出现代码执行完之前，触发了两次setCount，可以利用setCount里面带
// 回调函数，回调函数的第一个参数就是上一个更新的值。

// 创建React元素
const App = () => {
    const [count, setCount] = useState(1)
    const add = () => {
        setCount((count) => count + 1)
    }
    const reduce = () => {
        setCount((count) => count - 1)
    }

    const [user, setUser] = useState({ name: 'king', age: 13 })
    const changeName = () => {
        // setUser((preUser) => {
        //     return { ...preUser, name: 'Edward' }
        // })
        // setUser((preUser) => {
        //     return { ...preUser, name: 'Edward' }
        // })
        setUser({ ...user, name: 'Edward' })
    }
    return <div>
        <button onClick={add}>+1</button>
        {count}
        <button onClick={reduce}>-1</button>
        {user.name} {user.age}
        <button onClick={changeName}>修改名字</button>
    </div>
}




const root = ReactDom.createRoot(document.querySelector('#root'))

root.render(<App />)

//~使用 npx react-scripts build 打包
//~使用 npx react-scripts start 实时编译 