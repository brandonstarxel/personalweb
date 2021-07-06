import React from "react";

export class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const FooterButtons = [["LinkedIn","https://www.linkedin.com/in/brandon-abreu-smith/"], ["Youtube","https://www.youtube.com/channel/UCISuvEbvuQ8vvHAXQdY-nhA"], ["Facebook","https://www.facebook.com/brandon.tweeny/"], ["Github","https://github.com/brandonhotdog"]];
    let realFooterButtons = [];
    const ratio = this.props.width<190*FooterButtons.length?this.props.width/(190*FooterButtons.length):1;
    for (let i = 0; i<FooterButtons.length; i++){
      realFooterButtons.push(
      <a href={FooterButtons[i][1]}>
      <div
        className="navFooterButton"
        style={{
          position: "absolute",
          left: this.props.width / 2 - (ratio*190*FooterButtons.length)/2 + ratio*190*i,
          height: 50*ratio,
          width: 150*ratio,
          paddingLeft: 20*ratio,
          paddingRight: 20*ratio,
          fontSize: 35*ratio
        }}
      >
        {FooterButtons[i][0]}
      </div>
      </a>
      );
    }
    return (
<div style={{ backgroundColor: "#1e1e1e", height: 50*ratio }}>
            {" "}
            <div
              style={{
                width: "100%",
                height: "100%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {realFooterButtons}
            </div>
          </div>
    );
  }
}
