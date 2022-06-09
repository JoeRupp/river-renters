import React from "react";
import RentARig from "./RentARig";
import "./Home.css";

function Home({ allRigs }) {
  return (
    <section>
      <img
        className="homeImage"
        src={require("../assets/photos/Rafting-4.png")}
        alt="Three people rafting in a blue boat with the trees and mountains behind them"
      />
      <RentARig allRigs={allRigs} />
    </section>
  );
}

export default Home;
