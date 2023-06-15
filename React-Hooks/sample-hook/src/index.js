import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

const Sample=()=>{
    return(
        <div>
            <h1>I appeared here because of using useState Hook</h1>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)

export default Sample