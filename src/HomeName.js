import React from "react";

export class HomeName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameColor: 0,
    };
  }

  componentWillMount() {
    setInterval(() => {
      let newNameColor = this.state.nameColor + 5;
      if (newNameColor > 360) {
        newNameColor -= 360;
      }
      this.setState({
        nameColor: newNameColor,
      });
    }, 100);
  }

  render() {
    return (
      <div
        style={{
          width: this.props.iconWidth,
          height: this.props.iconWidth * (2/3),
          position: "absolute",
          marginTop: this.props.iconWidth * (2/3),
          marginLeft: this.props.width / 2 + this.props.iconSeperation,
          color: "hsl(" + this.state.nameColor + ", 100%, 75%)",
          fontWeight: "bold",
          fontSize: 60*(this.props.iconWidth/300),
          lineHeight: 1,
        }}
      >
        Brandon Abreu Smith
      </div>
    );
  }
}
