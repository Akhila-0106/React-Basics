import React, {useState} from "react"
import './index.css'


const App=()=>{
    return(
        <div className="main-container">
            <FruitCount/>
        </div>
    )
}

const FruitCount=()=>{
    const [mangovalue,setMangoCount]=useState(0)
    const [bananavalue,setBananaCount]=useState(0)

    const mangoClick=()=>{
        setMangoCount(mangovalue+1)
    }
    const bananaClick=()=>{
        setBananaCount(bananavalue+1)
    }
    return(
        <div className="wrapper-container">
            <h1 className="count-container">Bob ate <span className="fruitCount">{mangovalue}</span> mangoes <span className="fruitCount">{bananavalue}</span> bananas </h1>
            <div className="img-wrapper">
                <img src="https://assets.ccbp.in/frontend/react-js/mango-img.png" className="fruit-img" alt="mango"/>
                <img src="https://assets.ccbp.in/frontend/react-js/banana-img.png" className="fruit-img" alt="mango"/>
            </div>
            <div className="btn-container">
                <button className="fruit-btn" onClick={mangoClick}>Eat Mango</button>
                <button className="fruit-btn" onClick={bananaClick}>Eat Banana</button>
            </div>
        </div>
    )
}

export default App