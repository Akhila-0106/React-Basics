import React,{useState} from "react"
import './index.css'

const App=()=>{
    return(
        <div className="comp-container">
            <LoginPage/>
        </div>
    )
}

const LoginPage=()=>{
    const [login,setLogin]=useState(true)
    const onClickButton=()=>{
        setLogin(!login)

    }
    return(
        <div className="main-container">
            {login && <h1 className="heading">Please Login </h1>}
            {!login && <h1 className="heading">Welcome User </h1>}
            <button className="button-container" onClick={onClickButton}>{login ? "Login" : "Logout"}</button>
        </div>
    )
}

export default App