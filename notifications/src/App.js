import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'


const data=[
    {
        "id":1,
        "faIcon":"fa-solid fa-bell",
        "notiticationText":"Information Message",
        "styleIcon":"icon-1"
    },
    {
        "id":2,
        "faIcon":"fa-solid fa-circle-check",
        "notiticationText":"Warning Message",
        "styleIcon":"icon-2"
    },
    {
        "id":3,
        "faIcon":"fa-sharp fa-solid fa-circle-exclamation",
        "notiticationText":"Error Message",
        "styleIcon":"icon-3"
    }
]
const App=()=>{
    return (
        <div className="comp-container">
            {
                data.map((eachObj)=>{
                    const {id,faIcon,notiticationText,styleIcon}=eachObj
                    return <Notifications key={id} faIcon={faIcon} notiticationText={notiticationText} styleIcon={styleIcon}/>
                })
            }
        </div>
    )
}

const Notifications=({faIcon,notiticationText,styleIcon})=>{
    return(
        <div className={`main-container ${styleIcon}`}>
          <i class={`fa-icon ${faIcon} `}></i>
          <h1 className='text-container'>{notiticationText}</h1>
          
        </div>
    )
}

export default App