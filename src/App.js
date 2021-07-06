import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Home";
import { Diffraction } from "./Diffraction";
import Error from "./Error";
import { Navigation } from "./Navigation";
import { Helmet } from "react-helmet";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Vibe } from "./Vibe";
import { PlanetSim } from "./PlanetSim";

function App() {
  return (
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Brandon</title>
      </Helmet>
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
            <Route path="/physics/diffraction" component={Diffraction} />
            <Route path="/404" component={Error} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
