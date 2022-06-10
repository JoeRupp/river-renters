import React from "react";
import "./About.css";

function About() {
  return (
    <section>
      <img
        className="homeImage"
        src={require("../assets/photos/Rafting-5.png")}
        alt="Three people rafting in a blue boat with the trees and mountains behind them"
      />
    </section>
  );
}

export default About;
