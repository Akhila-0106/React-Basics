import React, { useState } from "react";
import './index.css';

const App = () => {
    const [mode, setMode] = useState(false);

    const onModeChange = () => {
        setMode(!mode);
    };

    return (
        <div className={`main-container ${mode ? "darkMode" : "lightMode"}`}>
            <div className="mode-container">
                <h1 className="heading">Click To Change Mode</h1>
                <button className="btn-container" onClick={onModeChange}>
                    {mode ? "Dark Mode" : "Light Mode"}
                </button>
            </div>
        </div>
    );
};

export default App;
