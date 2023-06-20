import React, {useState} from "react"
import './index.css'

const App = ()=>{
    return(
        <div>
            <ColorPicker/>
        </div>
    )
}

const ColorPicker=()=>{
    const [blue,setBlue]=useState(false)
    const [pink,setPink]=useState(false)
    const [yellow,setYellow]=useState(false)

    const onChangeColorBlue=()=>{
        setBlue(!blue)
    }
    const onChangeColorPink=()=>{
        setPink(!pink)
    }
    const onChangeColorYellow=()=>{
        setYellow(!yellow)
    }
      return(
        <div className={`main-container ${blue ? "blue-bg" : ""} ${pink ? "pink-bg" : ""} ${yellow ? "yellow-bg" : ""}`}>
            <h1>Choose Your Favourite Color To Change Background </h1>
            <div className="button-container">
                <button className="btn" onClick={onChangeColorBlue}>Blue</button>
                <button className="btn" onClick={onChangeColorPink}>Pink</button>
                <button className="btn" onClick={onChangeColorYellow}>Yellow</button>
            </div>
           
            
        </div>
      )
}

export default App