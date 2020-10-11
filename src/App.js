import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Home";
import Error from "./Error";
import Navigation from "./Navigation";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Vibe } from "./Vibe";
import { PlanetSim } from "./PlanetSim";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
