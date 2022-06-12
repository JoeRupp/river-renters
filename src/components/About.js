import React from "react";
import "./About.css";

function About() {
  return (
    <section className="wrapper">
      <div className="section parallax bg1">
        <img
          className="aboutImage"
          src={require("../assets/photos/Rafting-5.png")}
          alt="Three people rafting in a blue boat with the trees and mountains behind them"
        />
        <h1 className="catchPhrase">WE HELP YOU GET OUT THERE</h1>
      </div>
      <div className="section static">
        <p>
          We help you get out there and experience the world. Our rafts start
          with the demands of the river culture, and we use technical materials,
          carefully crafted to create a modern, stylish look. Make no mistake,
          we get out there - whatever the weather.
        </p>
      </div>
      <div className="section parallax bg2">
        <h1>SO GET OUT THERE!</h1>
      </div>
    </section>
  );
}

export default About;
