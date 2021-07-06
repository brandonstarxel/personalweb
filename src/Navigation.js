import React from "react";

import { NavLink } from "react-router-dom";
import "./NavButton.css";
export class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
    };
    window.addEventListener("resize", this.updateWindow);
  }

  componentDidMount() {
    this.updateWindow();
  }

  updateWindow = () => {
    this.setState({
      height: window.innerHeight,
      width: document.documentElement.clientWidth,
    });
  };
  
  render(){
    const HeaderButtons = [["Home","/", 150], ["Simulations","/physics/diffraction", 200]];
    let realHeaderButtons = [];
    const headerLength = HeaderButtons.map(x=>x[2]).reduce((a,b)=> a+b, 0) + 40*HeaderButtons.length;
    const ratio = this.state.width<headerLength?this.state.width/headerLength:1;
    let totalLength = 0;
    for (let i = 0; i<HeaderButtons.length; i++){
      realHeaderButtons.push(
      <NavLink to={HeaderButtons[i][1]} style={{ textDecoration: "none" }}>
      <div
        className="navFooterButton"
        style={{
          position: "absolute",
          left: this.state.width / 2 - (ratio*headerLength)/2 + totalLength*ratio,
          height: 55*ratio,
          width: HeaderButtons[i][2]*ratio,
          paddingLeft: 20*ratio,
          paddingRight: 20*ratio,
          fontSize: 35*ratio
        }}
      >
        {HeaderButtons[i][0]}
      </div>
      </NavLink>
      );
      totalLength += HeaderButtons[i][2]+40;
    }
  return (
    <div style={{ height: 55*ratio, backgroundColor: "#1e1e1e" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        
        {realHeaderButtons}
       
        {/* <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink> */}
      </div>
    </div>
  );
  }
}
