import React from "react";
import reactDom from "react-dom/client";
 
import './index.css';

const SocialButtons=()=>{
    return (
        <div className="main-container">
            <h1 className="heading-conatiner">Social Buttons</h1>
            <div className="button-container">
                <button className="button button-1">Like</button>
                <button className="button button-2">Comment</button>
                <button className="button button-3">Share</button>
            </div>
        </div>
    )
}

const root=reactDom.createRoot(document.getElementById("root"));
root.render(<SocialButtons/>)