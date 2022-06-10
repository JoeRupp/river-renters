import React from "react";
import "./NoMatch.css";

function NoMatch() {
  return (
    <section>
      <img
        className="homeImage"
        src={require("../assets/photos/Rafting-1.png")}
        alt="Three people rafting in a blue boat with the trees and mountains behind them"
      />
    </section>
  );
}

export default NoMatch;
