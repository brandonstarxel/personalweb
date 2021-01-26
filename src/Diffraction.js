import React from "react";
import "./App.css";
import { UnityComponent } from "./UnityComponent";
import Unity, { UnityContext } from "react-unity-webgl";
import { MathComponent } from "mathjax-react";

export class Diffraction extends React.Component {
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
      width: window.innerWidth,
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#282c34",
          textAlign: "center",
          overflow: "auto",
        }}
      >
        <UnityComponent
          width={this.state.width * 0.7}
          height={this.state.width * 0.7 * (9 / 16)}
          unityFolder="Diffraction"
          unityFileName="DiffractionBuild"
        ></UnityComponent>
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
          <div
            style={{
              fontSize: "calc(10px + 2vmin)",
              color: "white",
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Controls
          </div>
          <p>
            Press{" "}
            <span style={{ color: "hsl(150,100%,75%)" }}>Edit Aperture</span> to
            customise an aperture. Then you can start carving out your own
            aperture. Simply{" "}
            <span style={{ color: "hsl(150,100%,75%)" }}>click and drag</span>{" "}
            over the white panel to start making holes in it. You can change the{" "}
            <span style={{ color: "hsl(150,100%,75%)" }}>brush size</span> and
            whether it is{" "}
            <span style={{ color: "hsl(150,100%,75%)" }}>erasing</span> or{" "}
            <span style={{ color: "hsl(150,100%,75%)" }}>filling</span> with the
            buttons on the left.
          </p>
          <p>
            You should also see a list of button on the left allowing you to
            choose pre-defined apertures. Note that you can clear your aperture
            by pressing{" "}
            <span style={{ color: "hsl(150,100%,75%)" }}>reset</span> from the
            buttons on the left.
          </p>
          <p>
            Once you're done making your aperture press{" "}
            <span style={{ color: "hsl(150,100%,75%)" }}>Observe Screen</span>.
            The moment you press that button a Fast Fourier Transform will be
            performed (so it may lag depending on your hardware) and you'll be
            taken to the screen where you can see the generated diffraction
            pattern.
          </p>
          <p>
            The <span style={{ color: "hsl(150,100%,75%)" }}>Overview</span>{" "}
            button takes you to a point overlooking the setup. The setup isn't
            really accurately size and to be honest I only included this button
            to flex how the scene is 3D.
          </p>
          <div
            style={{
              fontSize: "calc(10px + 2vmin)",
              color: "white",
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Information
          </div>
          <p>
            What you see before you is a neat simulation of Fraunhofer
            diffraction that I built in Unity3D. Well sorta. To be honest I
            really just applied a Fast Fourier Transform on a matrix of 1's and
            0's to get the 'diffraction pattern' but nonetheless gives results
            that match real world observations.
          </p>
          <p>
            I was particularly impressed with how accurate the rectangular
            aperture preset was. For comparison, here's what it looks like in
            real life as demonstrated at the MIT.
          </p>
          <iframe
            width={this.state.width * 0.4}
            height={this.state.width * 0.4 * (9 / 16)}
            src="https://www.youtube.com/embed/4YPxRTFxy2A"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>Pretty close right?</p>
          <p>
            Now you might notice that both the maxima spacings are constant and
            the intensity appears constant on some presets. Well this is because
            I've really just plotted:
          </p>
          <MathComponent tex={String.raw`x'=kd\sin(\theta_{1})`} />
          <MathComponent tex={String.raw`y'=kd\sin(\theta_{2})`} />
          <p>
            where d is the distance between the screen and aperture. Those two
            angles are the vertical and horizontal angles made by an arrow from
            the centre of the aperture to the point on the viewing screen.
          </p>
          <div
            style={{
              fontSize: "calc(10px + 2vmin)",
              color: "white",
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Technicals
          </div>
          <p>
            I used the Accord C# library for the FFT implementation. The
            aperture is a matrix of 512x512. They don't have to be 1's and 0's,
            not even real numbers either, I just made it that way since it was
            easiest.
          </p>
          <p>
            Now it turns out you can't just do an FFT on the input matrix,
            you've first got to shift it in such a way that the element
            corresponding to the origin is at [0,0] in the matrix. The same
            thing needs to be done again with the output of the FFT.{" "}
          </p>
          <p>
            {" "}
            That's as complicated as it gets. The presets and drawing system
            were all straight forward to code. I used DOTweens to get those
            smooth camera transitions. Have a look at my project code and maybe
            even try messing around with it yourself. It's avaliable on my{" "}
            <a
              style={{ color: "#8082ff" }}
              href="https://github.com/brandonhotdog/fraunhoferdiffraction"
            >
              github
            </a>
            .
          </p>
        </div>
      </div>
    );
  }
}
