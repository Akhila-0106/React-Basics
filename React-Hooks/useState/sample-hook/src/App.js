import React,{ useState } from "react"

import Sample from "./index.js"

const App=()=>{
    const [count,setCount]=useState(10);
    console.log(count);
    console.log(setCount);
    return(
        <div>
            <Sample/>
        </div>
    )
}

export default App