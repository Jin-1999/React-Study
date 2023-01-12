// 引入ReactDom
import ReactDom from 'react-dom/client'

//引入日历组件
import Calendar from './components/calendar'

// 创建React元素
const App = <div><h1>首页</h1><Calendar></Calendar></div>


const root = ReactDom.createRoot(document.querySelector('#root'))

root.render(App)

//~使用 npx react-scripts build 打包
//~使用 npx react-scripts start 实时编译 