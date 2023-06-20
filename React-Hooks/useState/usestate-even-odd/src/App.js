import React , { useState } from "react"

import './index.css'

const App=()=>{
    return(
        <div>
            <EvenOdd/>
        </div>
    )
}

const EvenOdd=()=>{
    const [evenOdd,setEvenOdd]=useState(null)

    const onRandomNumber=()=>{
        const randomNumber=Math.floor(Math.random()*101)
        setEvenOdd(randomNumber)
        
    }

    const evenOddText = () => {
        if (evenOdd % 2 === 0) {
          return "Even";
        } else {
          return "Odd";
        }
      };

    return(
        <div className="main-container">
            <h1 className="count-heading">Count: {evenOdd}</h1>
            <p className="even-odd-container">Count is {evenOddText()}</p>
            <button className="button-container" onClick={onRandomNumber}>Increment</button>
            <p className="note-container">* Increase By Random Number Between 0 and 100</p>
        </div>
    )
}

export default App