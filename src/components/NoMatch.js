import React from "react";
import "./NoMatch.css";

function NoMatch() {
  return (
    <section>
      <img
        className="homeImage"
        src={require("../assets/photos/Rafting404Error.png")}
        alt="Three people rafting in a blue boat with the trees and mountains behind them"
      />
    </section>
  );
}

export default NoMatch;
