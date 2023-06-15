import React from "react";
import reactDom from "react-dom/client";
import './index.css';


const FormPage=()=>{
    return (
    
        <div className="main-container">

            <h1>EMPLOYEE APPLICATION FORM</h1>
            <div>
            Enter Your Name: <input type="text"/><br/><br/>
            Enter Your Age: <input type="text"/><br/><br/>
            Enter Your Gender: <br/><br/>
            <input type="radio" name="gender"/>Male 
            <input type="radio" name="gender"/>Female <br/><br/>
            Enter Your Skills: <br/><br/>
            <input type="checkbox" name="skills" /> C
            <input type="checkbox" name="skills"/> C++
            <input type="checkbox" name="skills"/> JavaScript
            <input type="checkbox" name="skills"/> Python <br/><br/> 
            <input type="submit" value="Submit" className="button-container"/>
            </div>
            
        </div>
    )
}

const root=reactDom.createRoot(document.getElementById("root"))
root.render(<FormPage/>)