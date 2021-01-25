import React from "react";
import "./App.css";
import Unity, { UnityContext } from "react-unity-webgl";

export class Diffraction extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      height: 0,
      width: 0
    };
    window.addEventListener("resize", this.updateWindow);
  }

  componentDidMount() {
    this.updateWindow();
  }

  updateWindow = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  render(){
  return (
    <div
      style={{
        backgroundColor: "#282c34",
        textAlign: "center",
        overflow: "auto",
      }}
    >
        <Unity unityContext={new UnityContext({
        loaderUrl: "/Unity/Diffraction/Build/DiffractionBuild.loader.js",
        dataUrl: "/Unity/Diffraction/Build/DiffractionBuild.data",
        frameworkUrl: "/Unity/Diffraction/Build/DiffractionBuild.framework.js",
        codeUrl: "/Unity/Diffraction/Build/DiffractionBuild.wasm"
       })} width={this.state.width*0.8} height={this.state.width*0.8*(9/16)}/>
       <div
            style={{
              fontSize: "calc(10px + 4vmin)",
              color: "white",
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Fraunhofer Diffraction
          </div>
          <div
            style={{
              width: "60%",
              color: "white",
              marginLeft: "20%",
              fontSize: "calc(10px + 1vmin)",
            }}
          >
            <p>
              What you see before you is a neat simulation of Fraunhofer diffraction that I built in Unity3D. Well sorta. To be honest I really just applied a Fast Fourier Transform on a matrix of 1's and 0's to get the 'diffraction pattern' but nonetheless gives results that match real world results.
            </p>
            <p>
              I was particularly impressed with how accurate the rectangular aperature preset was. For comparison, here's what it looks like in real life as demonstrated at the MIT.
            </p>
            <iframe width={this.state.width*0.4} height={this.state.width*0.4*(9/16)} src="https://www.youtube.com/embed/4YPxRTFxy2A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>
              Pretty close right?
            </p>
            <p>
              If you haven't realised there's a brush tool. Press 'Edit Aperature' and then simply click and drag to start carving out your own custom aperature. Then when you're done press 'Observe Screen' to see Fraunhofer's predictions in action.
            </p>
            <div
            style={{
              fontSize: "calc(10px + 4vmin)",
              color: "white",
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Technicals
          </div>
            <p>
              I used the Accord C# library for the FFT implementation. The aperature is a matrix of 512x512. They don't have to be 1's and 0's, not even real numbers either, I just made it that way since it was easiest. 
              </p>
              <p>
              Now it turns out you can't just do an FFT on the input matrix, you've first got to shift it such that the element corresponding to the origin is at [0,0] in the matrix. The same thing needs to be done again with the output of the FFT. </p> 
              <p> That's as complicated as it gets. The presets and drawing system were all straight forward to code. I used DOTweens to get those smooth camera transitions. Have a look at my project code and maybe even try messing around with it yourself. It's avaliable on my  <a
                style={{ color: "#8082ff" }}
                href="https://github.com/brandonhotdog/fraunhoferdiffraction"
              >
                github
              </a>.
            </p>
            </div>
    </div>
      );
  }
}
