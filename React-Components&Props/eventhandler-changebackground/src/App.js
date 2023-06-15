import React from "react"

const App=()=>{
    const clickHandle=(e)=>{
        console.log("I clicked",e)
    }
    return(
        <button onClick={clickHandle}>Click Here</button>
    )
}

export default App