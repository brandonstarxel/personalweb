import React from "react";
import "./App.css";
import Unity, { UnityContext } from "react-unity-webgl";
import webglLogo from "./Textures/webgl-logo.png";
import unityIcon from "./Textures/unity-logo-dark.png";
import progressBarEmpty from "./Textures/progress-bar-empty-dark.png";
import fullscreenButton from "./Textures/fullscreen-button.png";

export class UnityComponent extends React.Component {
  constructor(props) {
    super(props);
    this.unityContext = new UnityContext({
      loaderUrl: `/Unity/${this.props.unityFolder}/Build/${this.props.unityFileName}.loader.js`,
      dataUrl: `/Unity/${this.props.unityFolder}/Build/${this.props.unityFileName}.data`,
      frameworkUrl: `/Unity/${this.props.unityFolder}/Build/${this.props.unityFileName}.framework.js`,
      codeUrl: `/Unity/${this.props.unityFolder}/Build/${this.props.unityFileName}.wasm`,
    });
    this.state = { progression: 0 };
    this.unityContext.on("progress", (progression) => {
      this.setState({
        progression: progression,
      });
    });
  }
  // props.width and props.height strictly specifies the height of the unity scene itself. Extra height is used for the toolbar below.
  render() {
    return (
      <div
        style={{
          width: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#131519",
        }}
      >
        <div
          style={{
            width: this.props.width,
            overflow: "auto",
            backgroundColor: "#231F20",
          }}
        >
          <div
            style={{
              width: this.props.width,
              height: this.props.height,
              position: "relative",
            }}
          >
            <img
              src={unityIcon}
              style={{
                width: 154,
                height: 130,
                position: "absolute",
                left: (this.props.width - 154) / 2,
                top: (this.props.height - 130) / 2 - 40,
              }}
            />
            <div
              style={{
                width: 141,
                height: 18,
                position: "absolute",
                left: (this.props.width - 141) / 2,
                top: (this.props.height - 18) / 2 + 50,
              }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src={progressBarEmpty}
                  style={{ position: "absolute", left: 0 }}
                />
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    left: 0,
                    height: "18px",
                    position: "absolute",
                    width: 141 * this.state.progression,
                  }}
                />
              </div>
              </div>
              <div
            style={{
              width: "90%",
              color: "white",
              position:"absolute",
              fontSize: "calc(10px + 1vmin)",
              left: this.props.width*0.05,
              top: this.props.height/2 + 60
            }}
          >
            <p>
              If you're on mobile, please turn to landscape orientation.
            </p>
            </div>
            
            <div
              style={{
                width: "100%",
                height: "100%",
                zIndex: 10,
                position: "relative",
              }}
            >
              <Unity
                unityContext={this.unityContext}
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "48px",
              position: "relative",
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src={webglLogo}
              style={{
                width: 204,
                height: 38,
                position: "absolute",
                left: 10,
                top: 5,
              }}
            />
            <button
              style={{
                width: 38,
                height: 38,
                position: "absolute",
                right: 10,
                top: 5,
                background: `url(${fullscreenButton})`,
              }}
              onClick={() => this.unityContext.setFullscreen(true)}
            />
          </div>
        </div>
      </div>
    );
  }
}
