import React from "react";
import reactDom from "react-dom/client";
import "./index.css"

const actors=["Eleven"," Mike "," Will "," Dustin "," Lucas "," Max "," Jonathan "," Joyce "];

const Gallery=()=>{
    return (
        <div className="main-container">
            <h1  className="title-container">STRANGER THINGS</h1>
            <div className="actors-container">
                <div className="lead-container">
                    <img className="actors-img-container" alt="eleven" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoptjRln_-6At7zqrEhfykLfbXtwOcoFnmZHN_gBbkh1FXIySqChg_vxsc2BV6r-h_3HoopDmKaMU&usqp=CAU&ec=48665701"/>
                    <p className="name">{actors[0]}</p>
                </div>
                <div className="lead-container">
                    <img className="actors-img-container" alt="mike" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQapCo-XGZi_ui_yi33uKusanD27M-w3Ebodw1grqbNvU8Js32HxoG6tR0pWcQvdpe8PsvumnD6r7A&usqp=CAU&ec=48665701"/>
                    <p className="name">{actors[1]}</p>
                </div>
                <div className="lead-container">
                    <img className="actors-img-container" alt="nancy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Tsm5n6vAgDI7f4uFvdF35-qu2AobOa6ABmo25kPdNVqBqahktLBMtx78H10_F7OYkyfKFjikxz4&usqp=CAU&ec=48665701"/>
                    <p className="name">{actors[2]}</p>
                </div>
                <div className="lead-container">
                    <img className="actors-img-container" alt="will" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC9m_wHVf1M8-bxrAwIF1s2_I-D1pEklCh2Ub5rmJtnYDdRKOgrhW_oSM9nNLE9wz3xyZxttK09u8&usqp=CAU&ec=48665701"/>
                    <p className="name">{actors[3]}</p>
                </div>
                <div className="lead-container">
                    <img className="actors-img-container" alt="jim" src="https://a-static.besthdwallpaper.com/stranger-things-3-lucas-wallpaper-800x480-99337_12.jpg"/>
                    <p className="name">{actors[4]}</p>
                </div>
                <div className="lead-container">
                    <img className="actors-img-container" alt="Max" src="https://coolhdwall.com/storage1/202107/stranger-things-season-3-max-mayfield-4k-wallpaper-3840x2400.jpg"/>
                    <p className="name">{actors[5]}</p>
                </div>
                <div className="lead-container">
                    <img className="actors-img-container" alt="Max" src="https://cdn.bhdw.net/im/stranger-things-3-jonathan-byers-wallpaper-99336_w635.webp"/>
                    <p className="name">{actors[6]}</p>
                </div>
                <div className="lead-container">
                    <img className="actors-img-container" alt="Max" src="https://www.hdwallpapers.in/download/stranger_things_9_4k_hd-1920x1080.jpg"/>
                    <p className="name">{actors[7]}</p>
                </div>
            </div>
        </div>
    )
}

const root=reactDom.createRoot(document.getElementById("root"));
root.render(<Gallery/>)