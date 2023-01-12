import ReactDom from 'react-dom/client'
import React, { useRef } from 'react'

class App extends React.Component {
    data = {
        name: 'cat',
        age: 18
    };
    render() {
        return (
            <div>
                <Child data={this.data} />
                Hello, World !
            </div>
        )
    }
}

class Child extends React.Component {

    render() {
        return <div>{this.props.data.name}</div>
    }
}


const root = ReactDom.createRoot(document.querySelector('#root'))

root.render(<App />)
