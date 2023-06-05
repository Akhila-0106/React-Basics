import React from 'react';
import './index.css'

const data=[
    {
        "id":1,
        "title":"Data Scientist",
        "description":"Data Scientist gather and analyze large sets of structured and unstructured data",
        "imgUrl":"https://consultyasser.com/wp-content/uploads/2018/02/Data-Scientist.jpg",
        "cardStyle":"card-1"
    },
    {
        "id":2,
        "title":"IOT Developer",
        "description":"IOT Developers sre professionals who can develop manage, and monitor IoT devices",
        "imgUrl":"https://static.vecteezy.com/system/resources/previews/004/226/529/non_2x/internet-of-things-color-icon-iot-signal-artificial-intelligence-isolated-illustration-vector.jpg",
        "cardStyle":"card-2"
    },
    {
        "id":3,
        "title":"VR Developer",
        "description":"A VR Developer creates completelynew didgital environments that people can see.",
        "imgUrl":"https://static.vecteezy.com/system/resources/previews/004/329/296/non_2x/virtual-reality-player-color-icon-vr-player-man-with-vr-mask-glasses-headset-isolated-illustration-vector.jpg",
        "cardStyle":"card-3"
    },
    {
        "id":4,
        "title":"ML Engineer",
        "description":"Machine Learning engineers feed data nto models defined by data scientists",
        "imgUrl":"https://matthewrenze.com/wp-content/uploads/2019/12/artificial-intelligence-the-big-picture.png",
        "cardStyle":"card-4"
    },
]
const App=()=>{
    return(
        <div className='comp-container'>
            <h1 className='comp-heading'>Learn 4.0 Technologies</h1>
            <p className='comp-desc'>Get Trained by alumini of IITs and top companies like Amazon,Microsoft,Intel,Nvidia,Qualcomm etc..Learn directlyfrom prpffesionals involved in product Development. </p>
            <div className='card-comp-container'>
                {
                    data.map((eachObj)=>{
                        const {id,title,description,imgUrl,cardStyle}=eachObj
                        return <TechnologyCard key={id} title={title} description={description} imgUrl={imgUrl} cardStyle={cardStyle}/>
                    })
                }
            </div>
            
        </div>
    )
}

const TechnologyCard=({title,description,imgUrl,cardStyle})=>{
       return(
        <div className={`main-container ${cardStyle}`}>
            <h1 className='title-container'>{title}</h1>
            <p className='description-container'>{description}</p>
            <img className='img-container' alt='userImg' src={imgUrl}/>
        </div>
       )
}
export default App