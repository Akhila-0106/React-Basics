import React from "react";
import ReactDOM  from "react-dom/client";

const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome Page</h1>
      <p>Welcome to my React app!</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WelcomePage/>);
