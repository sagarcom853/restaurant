import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Child from './child'
import reportWebVitals from './reportWebVitals'

let data = 'Check Me'
let emp = {
  name: 'ABC',
  salary: 40000,
}
let element = <div>{data} emp</div>

ReactDOM.render(<App name="akash"></App>, document.getElementById('root'))

// ReactDOM.render(element, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
