import React from "react";

import './index.css'

const data = [
    {
      "id": 1,
      "heading": "The Seasons Latest",
      "line":"Get the all seasons latest updates!!!",
      "buttonCard":"Show more",
      "cardStyle":"card-1"
    },
    {
      "id": 2,
      "heading": "Our New Designs",
      "line":"Get the designs developed by our team.",
      "buttonCard":"Show more",
      "cardStyle":"card-2"
    },
    {
      "id": 3,
      "heading": "Insiders",
      "line":"Get the top class products here ",
      "buttonCard":"Show more",
      "cardStyle":"card-3"
    }
]

const App=()=>{
    return (
       <div class="main-container">
            {
            data.map((eachItem)=>{
              const {id,heading,line,buttonCard,cardStyle}=eachItem
              return <Bannercard key={id} heading={heading} line={line} buttonCard={buttonCard} cardStyle={cardStyle}/>;
            })}
       </div>
    )
};

const Bannercard=({heading,line,buttonCard,cardStyle})=>{
    return(
        <div className="comp-container">
            <div className={cardStyle}>
            <h1>{heading}</h1>
            <p>{line}</p>
            <button className="button-container">{buttonCard}</button>
        </div>
        </div>
    )
};

export default App