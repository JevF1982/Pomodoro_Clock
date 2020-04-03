import React from "react";
import "./App.css";
import BreakLength from "./Components/BreakLength";
import SessionLength from "./Components/SessionLength";
import Timer from "./Components/Timer";
import Store from "../src/Components/Store";

function App() {
  return (
    <Store>
      <div className="App">
        <h1>Pomodoro Clock</h1>
        <h4>By Jurgen Faust</h4>
        <BreakLength />
        <SessionLength />
        <Timer />
      </div>
    </Store>
  );
}

export default App;
