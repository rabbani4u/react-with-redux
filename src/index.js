import React from "react";
import ReactDOM from "react-dom";

function getTime() {
  return new Date().toLocaleTimeString();
}

function App() {
  return (
    <div>
      <h2>Current Time:</h2>
      <h3>{getTime()}</h3>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
