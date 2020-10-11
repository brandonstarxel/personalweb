import React from "react";

export class PlanetSim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PlanetX: -200,
      PlanetY: 10,
      PlanetVeloX: 0,
      PlanetVeloY: -40,
      MoonX: 0,
      MoonY: 0,
      height: props.height,
      width: props.width,
      Energy: 0,
      paused: true,
    };
    this.isInViewport = this.isInViewport.bind(this);
    this.playOrPause = this.playOrPause.bind(this);
  }

  isInViewport(offset = 0) {
    if (!this.planetView) return false;
    const rect = this.planetView.getBoundingClientRect();
    return !(rect.bottom < 0 || rect.top - window.innerHeight >= 0);
  }

  playOrPause() {
    this.setState({ paused: !this.isInViewport() });
  }

  componentWillMount() {
    this.setState({ height: window.innerHeight });
    this.setState({ width: window.innerWidth });
    const intervSecond = 0.01;
    const m1 = 80;
    const m2 = 10;
    setInterval(() => {
      if (!this.state.paused) {
        const displaceSquared =
          (this.state.PlanetX - this.state.MoonX) ** 2 +
          (this.state.PlanetY - this.state.MoonY) ** 2;
        const Force = (6.67e2 * m1 * m2) / displaceSquared;
        const displace = Math.sqrt(displaceSquared);
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
      }
    }, intervSecond * 1000);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.playOrPause);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.playOrPause);
  }

  render() {
    return (
      <div
        ref={(el) => (this.planetView = el)}
        style={{
          width: "100%",
          height: 400,
          backgroundColor: "#F2FF4F",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            backgroundColor: "black",
            position: "absolute",
            left: this.props.width / 2 + this.state.PlanetX + 10,
            top: 200 + this.state.PlanetY - 10,
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: "black",
            position: "absolute",
            left: this.props.width / 2 + this.state.MoonX - 50,
            top: 200 + this.state.MoonY - 50,
            borderRadius: "50%",
          }}
        ></div>
      </div>
    );
  }
}
