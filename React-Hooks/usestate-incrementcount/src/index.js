import React , { useState } from "react";
import ReactDOM from "react-dom/client"
import App from "./App.js";
import './index.css'


const IncrementCount=()=>{
    const [count,setCount]=useState(0)
    const onIncrement=()=>{
        setCount(count+1)
    }
      return (
        <div className="main-container">
            <h1 className="text-container">Button has clicked <span className="count-container">{count}</span> times</h1>
            <button className="btn-container" onClick={onIncrement}>Click Me !</button>
        </div>
      )
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)

export default IncrementCount
