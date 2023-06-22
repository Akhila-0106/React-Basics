import React,{useState} from "react"
import './index.css'

const App=()=>{
    return(
        <div>
            <FormPage/>
        </div>
    )
}

const FormPage=()=>{
       const [firstName,setFirstName]=useState("")
       const [lastName,setlastName]=useState("")
       const [email,setEmail]=useState("")

       const onFirstName=(e)=>{
        setFirstName(e.target.value)
       }

       const onLastName=(e)=>{
        setlastName(e.target.value)
       }

       const onEmail=(e)=>{
        setEmail(e.target.value)
       }

       const onSubmit=(e)=>{
           e.preventDefault();
       }
       return(
        <div className="main-container">
            <h1 className="heading">Application Form</h1>
            <form className="form-container" onSubmit={onSubmit}>

            <div className="form-text-container">
                <h4 className="label-container">FirstName:</h4>
                <input type="text" className="fill-container" name="firstName" placeholder="Enter your firstName" value={firstName} onChange={onFirstName}/>
            </div>
            
            <div className="form-text-container">
                <h4 className="label-container">LastName:</h4>
                <input type="text" className="fill-container" name="lasstName" placeholder="Enter your lastName" value={lastName} onChange={onLastName}/>
            </div>

            <div className="form-text-container">
                <h4 className="label-container">Email:</h4>
                <input type="text" className="fill-container" name="email" placeholder="Enter your email" value={email} onChange={onEmail}/>
            </div>
            
            <div><button className="button-container">Submit</button></div>
            </form>
        </div>
       )
}

export default App