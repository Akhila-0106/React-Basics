import React from "react"
import './index.css'
import data from './data'

const App = ()=>{
    return (
        <ul className="main-container">
         {
                data.map((eachCard)=>{
                    const {id,name,designation,imgUrl}=eachCard
                    return(
                          <ListAndKeys key={id} id={id} name={name} designation={designation} imgUrl={imgUrl}/>  
                    )
                })
            }
        </ul>
    )
}

const ListAndKeys=(props)=>{
    const {name,designation,imgUrl}=props
    return (
        <li className="list-container">
            <h3 className="name-container">{name}</h3>
            <p>My Designation is <span className="role-container"> {designation}</span></p>
            <a href={imgUrl}><button className="btn-container">Apply Leave</button></a>
        </li>
    )
}
export default App