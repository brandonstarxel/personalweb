import React from "react";

import { NavLink } from "react-router-dom";
import "./NavButton.css";

const Navigation = () => {
  return (
    <div style={{ height: 55, backgroundColor: "#1e1e1e" }}>
      <div
        style={{
          width: "40%",
          height: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <div className="navButton">Home</div>
        </NavLink>
        {/* <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink> */}
      </div>
    </div>
  );
};

export default Navigation;
