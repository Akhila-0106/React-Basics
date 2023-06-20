import React, { useState } from "react"
import './index.css'

const App = () => {
   return(
    <div className="comp-wrapper">
        <Greeting/>
    </div>
   )
}

const Greeting=()=>{
    const [message,setMessage]=useState(true)

    const onSubscribe=()=>{
        setMessage(!message)
    }
    return(
       <div className="main-wrapper">
           <h1 className="heading">Welcome</h1>
           <p className="mesg">Thankyou! Happy Learning</p>
           <button className="btn-change" onClick={onSubscribe}>{message ? "Subscribe" : "Subscribed"}</button>
       </div>
    )
}

export default App
