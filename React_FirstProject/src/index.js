// 引入ReactDom
import ReactDom from 'react-dom/client'

// 创建React元素
const App = <div><h1>首页</h1><p>something</p></div>

const root = ReactDom.createRoot(document.querySelector('#root'))

root.render(App)

//~使用 npx react-scripts build 打包
//~使用 npx react-scripts start 实时编译 