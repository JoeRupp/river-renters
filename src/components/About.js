import React from "react";
import "./About.css";

function About() {
  return (
    <section>
      <img
        className="aboutImage"
        src={require("../assets/photos/Rafting-5.png")}
        alt="People scouting a river from a large rock in the background, with a raft in the foreground"
      />
      <div className="aboutSection">
        <div className="headLineContainer">
          <h1 className="headLine">WE HELP YOU GET OUT THERE.</h1>
        </div>
        <p>
          The world of white water rafting is difficult to get into. Gear is
          expensive, going with a company on a guided trip is expensive, and
          permits for a river trip take a tremendous amount of luck. You either
          need to know someone or have time/money. River Renters seeks to solve
          some these problems by providing folks a way to rent fully rigged (or
          partially rigged) rafts - helping to lower the barrier of entry so
          more people can enjoy the sport of rafting.
        </p>
        <p>
          We help you get out there and experience the world. Our rafts start
          with the demands of the river culture, and we use some of the latest
          and best gear currently on the market. So rent a raft from us and get
          out there!
        </p>
        <div className="iconContainer">
          <img
            className="riverRentersLogoTwo"
            src={require("../assets/logos/RiverRenters-logo2.png")}
            alt="river renters logo"
          />
          <img
            className="boatIcon"
            src={require("../assets/icons/RiverRenters-boat.png")}
            alt="river renters logo"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
