import React from "react";
import "./App.css";
import { Vibe } from "./Vibe";
import { PlanetSim } from "./PlanetSim";

function Error() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <h1>404 Page not found</h1>
    //     <p style={{ width: "70%" }}>Sorry mate, there's nothing back here.</p>
    //     <p style={{ width: "70%" }}>Absolutely nothing to find here . . .</p>
    //     <p style={{ width: "70%" }}>
    //       Seriously, you're wasting your time. I promise I haven't hidden
    //       anything at all here. Like I wouldn't place an invisible button on
    //       this page. Don't bother checking the html to reveal any secrets either
    //       because there isn't. Just a standard 404 page. Nothing to see here.
    //     </p>
    //   </header>
    // </div>
    <div
      style={{
        backgroundColor: "#282c34",
        textAlign: "center",
        overflow: "auto",
        height: window.innerHeight,
      }}
    >
      <div
        style={{
          fontSize: "calc(10px + 4vmin)",
          color: "white",
          fontWeight: "bold",
          marginTop: 10,
        }}
      >
        404 Page not found
      </div>
      <div
        style={{
          width: "70%",
          color: "white",
          marginLeft: "15%",
          fontSize: "calc(10px + 1vmin)",
        }}
      >
        <p>Sorry mate, there's nothing back here.</p>
        <p>Absolutely nothing to find here . . .</p>
        <p>
          Seriously, you're wasting your time. I promise I haven't hidden
          anything at all here. Like I wouldn't place an invisible button on
          this page. Don't bother checking the html to reveal any secrets either
          because there isn't. Just a standard 404 page. Nothing to see here.
        </p>
        <div
          style={{
            fontSize: "calc(10px + 4vmin)",
            color: "#282c34",
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          I DID HIDE SOMETHING AHAHAHAHAHAHAHAHAHAHAHAHAHHAH!!!!!!
        </div>
      </div>
    </div>
  );
}

export default Error;
