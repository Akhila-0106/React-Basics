import React, {useState} from "react"
import './index.css'

const App=()=>{
    return(
        <div>
            <HideAndShow/>
        </div>
    )
}

const HideAndShow=()=>{
    const [firstName,setFirstName]=useState(false)
    const [lastName,setLastName]=useState(false)

    const onFirstName=()=>{
        setFirstName(!firstName)
    }

    const onLastName=()=>{
        setLastName(!lastName)
    }

    return(
        <div className="main-container">
             <h1 className="heading">Show/Hide</h1>
             <div className="show-hide-container">
             <div className="name-container">
                <button className="btn" onClick={onFirstName}>Show/Hide FirstName</button>
                {firstName&&<p className="name">John</p>} {!firstName&&<p></p>}
             </div>
             <div  className="name-container">
                <button className="btn" onClick={onLastName}>Show/Hide LastName</button>
                {lastName&&<p className="name">Smith</p>} {!lastName&&<p></p>}
             </div>
             </div>
             
        </div>
    )
}

export default App