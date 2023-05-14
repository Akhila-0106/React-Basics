import React from 'react';

const details=[
    {
        imgUrl:"https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small/beautiful-woman-avatar-character-icon-free-vector.jpg",
        title:"Millie",
        designation:"Developer"
    },
    
    {
        imgUrl:"https://img.freepik.com/premium-vector/avatar-portrait-young-caucasian-boy-man-round-frame-vector-cartoon-flat-illustration_551425-19.jpg?w=2000",
        title:"John",
        designation:"Developer"
    }
]
const App=()=>{
    return (
        <div>
            <UserList imgUrl={details[0].imgUrl} title={details[0].title} designation={details[0].designation}/>
            <UserList imgUrl={details[1].imgUrl} title={details[1].title} designation={details[1].designation}/>
        </div>
    )
}
const UserList=(props)=>{
    return (
        <div className="main-container">
            <img className="userImg" src={props.imgUrl} alt="user"/>
            <h1 className="title">{props.title}</h1>
            <p className="designation">{props.designation}</p>
        </div>
    )
}



export default App