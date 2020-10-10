import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Vibe } from "./Vibe";
import { PlanetSim } from "./PlanetSim";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Brandon Smith</h1>
      </header>
      <Vibe />
      <PlanetSim />
    </div>
  );
}

export default App;
