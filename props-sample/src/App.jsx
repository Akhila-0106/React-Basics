import React from "react";

// const text_1="Iam from Component1"
// const text_2="Iam from Component2"

const Component1=(props)=>{
    return (
        <>
        <h1 class="component-container1">{props.text_1}</h1><br/><br/>
        </>
    )
}
const Component2=(props)=>{
    return (
        <>
        <h1 class="component-container2">{props.text_2}</h1><br/><br/>
        </>
    )
}


const App=()=>{
    return (
        <>
        <Component1 text_1="Im from props"/>
        <Component2 text_2="Im from props 2...."/>
        </>
    )
}
export default App;