import React , { useState } from "react"

const App=()=>{
    const [firstCount,setFirstCount]=useState(0)
    const [secondCount,setSecondCount]=useState(0)
    const [thirdCount,setThirdCount]=useState(0)
    const [fourthCount,setFourthCount]=useState(0)
    const [fifthCount,setFifthCount]=useState(0)
    const [sixthCount,setSixthCount]=useState(0)
    const [seventhCount,setSeventhCount]=useState(0)
    const [eighthCount,setEigthCount]=useState(0)
    const [ninethCount,setNinethCount]=useState(0)
    const [tenthCount,setTenthCount]=useState(0)
    const onMultiple=()=>{                  
        setFirstCount((prevCount)=> prevCount+1);
        setSecondCount((prevCount)=> prevCount+1);
        setThirdCount((prevCount)=> prevCount+1);
        setFourthCount((prevCount)=> prevCount+1);
        setFifthCount((prevCount)=> prevCount+1);
        setSixthCount((prevCount)=> prevCount+1);
        setSeventhCount((prevCount)=> prevCount+1);
        setEigthCount((prevCount)=> prevCount+1);
        setNinethCount((prevCount)=> prevCount+1);
        setTenthCount((prevCount)=> prevCount+1);
        //setCount((prevCount)=> prevCount+1); ----- to increment number by 2 or we have
        //setCount((prevCount)=> prevCount+2);
    }
    return(
        <div className="main-container">Two Mutliple
            <div className="table-container">
                <h1 className="count-number">2*1=<input type="text" value={firstCount}/></h1>
                <h1 className="count-number">2*2=<input type="text" value={secondCount}/></h1>
                <h1 className="count-number">2*3=<input type="text" value={thirdCount}/></h1>
                <h1 className="count-number">2*4<input type="text" value={fourthCount}/></h1>
                <h1 className="count-number">2*5=<input type="text" value={fifthCount}/></h1>
                <h1 className="count-number">2*6=<input type="text" value={sixthCount}/></h1>
                <h1 className="count-number">2*7=<input type="text" value={seventhCount}/></h1>
                <h1 className="count-number">2*8=<input type="text" value={eighthCount}/></h1>
                <h1 className="count-number">2*9=<input type="text" value={ninethCount}/></h1>
                <h1 className="count-number">2*10=<input type="text" value={tenthCount}/></h1>   
            </div>
            <button onClick={onMultiple}>Click</button>
        </div>
    )


}


export default App