import React from "react";

export class PlanetSim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PlanetX: 0,
      PlanetY: 10,
      PlanetVeloX: 0,
      PlanetVeloY: -100,
      MoonX: 400,
      MoonY: 0,
      MoonVeloX: 0,
      MoonVeloY: 0,
      height: props.height,
      width: props.width,
    };
  }

  componentWillMount() {
    this.setState({ height: window.innerHeight });
    this.setState({ width: window.innerWidth });
    const intervSecond = 0.01;
    const m1 = 1000;
    const m2 = 100;
    const Force =
      (6.67e2 * m1 * m2) /
      ((this.state.PlanetX - this.state.MoonX) ** 2 +
        (this.state.PlanetY - this.state.MoonY) ** 2);
    const displace = Math.sqrt(
      (this.state.PlanetX - this.state.MoonX) ** 2 +
        (this.state.PlanetY - this.state.MoonY) ** 2
    );
    setInterval(() => {
      this.setState({
        PlanetX: this.state.PlanetX + this.state.PlanetVeloX * intervSecond,
        PlanetY: this.state.PlanetY + this.state.PlanetVeloY * intervSecond,
        PlanetVeloX:
          this.state.PlanetVeloX -
          Force *
            ((this.state.PlanetX - this.state.MoonX) / displace) *
            intervSecond,
        PlanetVeloY:
          this.state.PlanetVeloY -
          Force *
            ((this.state.PlanetY - this.state.MoonY) / displace) *
            intervSecond,
      });
    }, intervSecond * 1000);
  }

  render() {
    return (
      <div
        style={{
          width: "100%",
          height: this.state.height,
          backgroundColor: "#F2FF4F",
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            backgroundColor: "black",
            position: "relative",
            left: Math.round(this.state.width / 2) + this.state.PlanetX + 10,
            top: Math.round(this.state.height / 2) + this.state.PlanetY + 10,
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: "black",
            position: "relative",
            left: Math.round(this.state.width / 2) + this.state.MoonX - 50,
            top: Math.round(this.state.height / 2) + this.state.MoonY - 50,
            borderRadius: "50%",
          }}
        ></div>
      </div>
    );
  }
}
