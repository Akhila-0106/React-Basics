import React , {useState} from "react"


const App=()=>{
    return(
        <div>
            <Calculator/>
        </div>
    )
}

const Calculator=()=>{
    const [value,setValue]=useState(0)
   
    const onAdd = () => {
        setValue(prevValue => prevValue + 1)
      }
    
    const onSub = () => {
        setValue(prevValue => prevValue - 1)
    }

    const onMul = () => {
        setValue(prevValue => prevValue * 2)
    }
    return(
        <div>
            <h1>Simple Calculator</h1>
            <h1>{value}</h1>
            <button onClick={onAdd}>Add</button>
            <button onClick={onSub}>Sub</button>
            <button onClick={onMul}>Mul</button>
        </div>
    )
}

export default App