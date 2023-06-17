import React ,{ useState} from "react"
import "./index.css"

const App=()=>{
    return(
        <div className="main-container">
            <Speedometer/>
        </div>
    )
}

const Speedometer=()=>{
    const [count,setCount]=useState(0)

    const onAcclerate=()=>{
        setCount(count+10)
    }
    const onApplyBrake=()=>{
        setCount(count-10)
    }
    return(
        <div className="page-wrapper">
              <h1 className="heading-content">Speedometer</h1>
              <img className="img-container" src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt="speedImg"/>
              <h2 className="speed-info-container">Speed is <span className="count-value">{count}</span> mph</h2>
              <p className="description-container">Min limit is 0mph, Max limit is 200 mph</p>
              <div className="button-container">
                <button className="acc-btn" onClick={onAcclerate}>Accelerate</button>
                <button className="brk-btn" onClick={onApplyBrake}>Apply Brake</button>
              </div>
              
        </div>
    )
}

export default App
