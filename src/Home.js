import React from "react";
//import "./App.css";
import { HomeName } from "./HomeName";
import { PlanetSim } from "./PlanetSim";
import "./WindowsDim";
import BrandonPortrait from "./Textures/BrandonPortrait.jpg";
import StarxelIm from "./Textures/Starxel Hot.png";
import { MathComponent } from "mathjax-react";
import "./NavButton.css";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
      nameColor: 0,
    };
    window.addEventListener("resize", this.updateWindow);
  }

  getAge(d1, d2) {
    d2 = d2 || new Date();
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
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
      <div>
        <div style={{ width: "100%", height: 600, backgroundColor: "black" }}>
          <img
            src={BrandonPortrait}
            style={{
              borderRadius: "50%",
              width: 300,
              height: 300,
              position: "absolute",
              marginTop: 150,
              marginLeft: this.state.width / 2 - 330,
            }}
          />
          <HomeName width={this.state.width} />
        </div>
        <div
          style={{
            backgroundColor: "#282c34",
            textAlign: "center",
            overflow: "auto",
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
            About
          </div>
          <div
            style={{
              width: "70%",
              color: "white",
              marginLeft: "15%",
              fontSize: "calc(10px + 1vmin)",
            }}
          >
            <p>
              I'm{" "}
              <span style={{ color: "hsl(250,100%,75%)", fontWeight: "bold" }}>
                Brandon
              </span>
              . If my code is still running correctly I am currently{" "}
              <span style={{ color: "hsl(100,100%,75%)" }}>
                {this.getAge(new Date(2001, 6, 3))}
              </span>{" "}
              years old (born{" "}
              <span style={{ color: "hsl(200,100%,75%)" }}>July 3rd 2001</span>{" "}
              for the fact checkers).{" "}
            </p>
            <p>
              I've been coding for{" "}
              <span style={{ color: "hsl(300,100%,75%)" }}>
                {this.getAge(new Date(2012, 0, 0))}
              </span>{" "}
              years now and it's definitely the best thing to happen in my life.
              Literally anything I do or learn is made{" "}
              <span style={{ color: "hsl(320,100%,75%)" }}>10x</span> cooler by
              coding. Don't believe me? Let me prove it. Take a moment to
              appreciate{" "}
              <span style={{ color: "hsl(180,100%,75%)" }}>
                Newton's universal law of gravitation
              </span>{" "}
              (displayed using{" "}
              <span style={{ color: "hsl(55,100%,75%)" }}>MathJax</span>):
            </p>
            <MathComponent tex={String.raw`F=\frac{GMm}{r^2}`} />
            <p>
              Ahhh, it's{" "}
              <span style={{ color: "hsl(320,100%,75%)" }}>beautiful</span>{" "}
              isn't it. No, you don't agree? Well how can I blame you, there's
              not much this really tells you. If we instead simulated it,
              perhaps then you'd agree it's{" "}
              <span style={{ color: "hsl(320,100%,75%)" }}>beautiful</span>. So
              using the wonders of code I'll do just that!
            </p>
          </div>
        </div>
        <PlanetSim width={this.state.width} height={this.state.height} />
        <div
          style={{
            backgroundColor: "#282c34",
            textAlign: "center",
            overflow: "auto",
          }}
        >
          <div
            style={{
              width: "70%",
              color: "white",
              marginLeft: "15%",
              fontSize: "calc(10px + 1vmin)",
            }}
          >
            <p>
              Now that's{" "}
              <span style={{ color: "hsl(320,100%,75%)" }}>beautiful</span>!
              That's not a video of a simulation by the way, that is actually a
              simulation running on your browser. You can tell as over time the
              orbit is changing due to the error in the numerical method
              accumulating. Refresh the page if you can't see the satellite.
            </p>
            <p>
              Could you tell I like{" "}
              <span style={{ color: "hsl(0,100%,75%)" }}>physics</span>? I liked
              it so much that I got into{" "}
              <span style={{ color: "hsl(180,100%,75%)" }}>Oxford</span> to do a{" "}
              <span style={{ color: "hsl(320,100%,75%)" }}>
                Masters of Physics
              </span>{" "}
              starting <span style={{ color: "hsl(100,100%,75%)" }}>2019</span>.
            </p>
            <p>
              I like to think Oxford chose me because of my app{" "}
              <span style={{ color: "hsl(100,100%,75%)" }}>
                Project Principia
              </span>{" "}
              on{" "}
              <a
                style={{ color: "#8080ff" }}
                href="https://apps.apple.com/us/app/id1433912632"
              >
                iOS
              </a>{" "}
              and{" "}
              <a
                style={{ color: "#8080ff" }}
                href="https://play.google.com/store/apps/details?id=com.Starxel.ProjectPrincipia&hl=en_GB&gl=US"
              >
                Android
              </a>
              . I worked so hard to make that{" "}
              <span style={{ color: "hsl(0,100%,75%)" }}>physics</span>{" "}
              simulator app and I'd still call it one of my greatest creations
              to this day. I even got{" "}
              <span style={{ color: "hsl(176,100%,75%)" }}>Isaac Physics</span>,
              a website ran by{" "}
              <span style={{ color: "hsl(280,100%,75%)" }}>Cambridge</span>, to
              try it who said it was{" "}
              <a
                style={{ color: "#8080ff" }}
                href="https://imgur.com/a/90Csq7Q"
              >
                good
              </a>
              . However as my app was never mentioned during the interview I
              suppose it was my enthusiam and ability in{" "}
              <span style={{ color: "hsl(0,100%,75%)" }}>physics</span> that
              earned me the place.
            </p>
            <p>
              <span style={{ fontStyle: "italic" }}>
                Cool, so any more apps, mr. app guy?
              </span>
            </p>
            <p>
              Yes actually.{" "}
              <span style={{ color: "hsl(280,100%,75%)" }}>Astroship</span> on{" "}
              <a
                style={{ color: "#8080ff" }}
                href="https://play.google.com/store/apps/details?id=com.Starxel.Astroship&hl=en_GB&gl=US"
              >
                Android
              </a>
              . I'm also currently working on some{" "}
              <span style={{ color: "hsl(60,100%,75%)" }}>commercial</span> apps
              that use <span style={{ color: "hsl(130,100%,75%)" }}>AIs</span>.
            </p>
            <p>
              Let's talk about{" "}
              <span style={{ color: "hsl(130,100%,75%)" }}>
                Artificial Intelligence
              </span>{" "}
              (<span style={{ color: "hsl(130,100%,75%)" }}>AI</span>). Not sure
              what that is? Well aren't you in luck because since the start of
              2019 I've been making many{" "}
              <span style={{ color: "hsl(130,100%,75%)" }}>AIs</span> and
              posting them onto my Youtube channel{" "}
              <span style={{ color: "hsl(280,100%,75%)" }}>Starxel</span>. It's
              an{" "}
              <span style={{ color: "hsl(280,100%,75%)" }}>
                educational channel
              </span>{" "}
              where I aim to teach people about{" "}
              <span style={{ color: "hsl(130,100%,75%)" }}>AI</span> by actually
              creating some. Here's my best performing video on an{" "}
              <span style={{ color: "hsl(130,100%,75%)" }}>AI jet</span> that
              learns to <span style={{ color: "hsl(0,100%,75%)" }}>bomb</span> a{" "}
              <span style={{ color: "hsl(0,100%,65%)" }}>missile launcher</span>{" "}
              trying to <span style={{ color: "hsl(0,100%,75%)" }}>shoot</span>{" "}
              it down:
            </p>
            <iframe
              style={{ maxWidth: 560, maxHeight: 315 }}
              width="70%"
              height={(315 / 560) * this.state.width * 0.7}
              src="https://www.youtube.com/embed/iP28kOCpW94"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>
              Who doesn't love a bit of{" "}
              <span style={{ color: "hsl(0,100%,75%)" }}>action</span>. In fact
              someone watching that video liked it so much that they hired me as
              a <span style={{ color: "hsl(60,100%,75%)" }}>contractor</span> to
              make <span style={{ color: "hsl(130,100%,75%)" }}>AIs</span> for
              them! That guy was{" "}
              <span style={{ color: "hsl(160,100%,75%)" }}>Brett Young</span>,{" "}
              <span style={{ color: "hsl(230,100%,75%)" }}>
                Co-Founder of M2x.AI
              </span>
              . He'd find problems in the{" "}
              <span style={{ color: "hsl(330,100%,75%)" }}>
                building industry
              </span>{" "}
              and would write up how an{" "}
              <span style={{ color: "hsl(130,100%,75%)" }}>AI</span> could solve
              it. I was then tasked with actually creating that{" "}
              <span style={{ color: "hsl(130,100%,75%)" }}>AI</span>. Here's the
              most successful{" "}
              <span style={{ color: "hsl(130,100%,75%)" }}>AI</span> we made
              together:
            </p>
            <iframe
              style={{ maxWidth: 504, maxHeight: 758 }}
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6562571749538570240"
              width="70%"
              height={(758 / 504) * this.state.width * 0.7}
              frameborder="0"
              allowfullscreen=""
              title="Embedded post"
            ></iframe>
            <p>
              Well that's enough from me. Other than my life story you can find
              lots of simulations and other cool stuff I've done on this site.
              Just go to the header at the top! I'll now leave you with a
              graphic design of{" "}
              <span style={{ color: "hsl(280,100%,75%)" }}>Starxel</span> (my{" "}
              <span style={{ color: "hsl(130,100%,75%)" }}>AI</span> Youtube
              channel):
            </p>
          </div>
          <img src={StarxelIm} style={{ width: "60%", borderRadius: "50%" }} />
          <div style={{ backgroundColor: "#1e1e1e", height: 50 }}>
            {" "}
            <div
              style={{
                width: "40%",
                height: "100%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <a href="https://www.linkedin.com/in/brandon-abreu-smith/">
                <div
                  className="navFooterButton"
                  style={{
                    position: "absolute",
                    left: this.state.width / 2 - 295,
                    height: 50,
                  }}
                >
                  LinkedIn
                </div>
              </a>
              <a href="https://www.youtube.com/channel/UCISuvEbvuQ8vvHAXQdY-nhA">
                <div
                  className="navFooterButton"
                  style={{
                    position: "absolute",
                    left: this.state.width / 2 - 95,
                    height: 50,
                  }}
                >
                  Youtube
                </div>
              </a>
              <a href="https://www.facebook.com/brandon.tweeny/">
                <div
                  className="navFooterButton"
                  style={{
                    position: "absolute",
                    left: this.state.width / 2 + 105,
                    height: 50,
                  }}
                >
                  Facebook
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
