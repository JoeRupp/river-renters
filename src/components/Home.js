import React from "react";
import RentARig from "./RentARig";
import "./Home.css";
import PropTypes from "prop-types";

function Home({ availableRigs }) {
  return (
    <section>
      <img
        className="homeImage"
        src={require("../assets/photos/Rafting-4.png")}
        alt="Three people rafting in a blue boat with the trees and mountains behind them"
      />
      <RentARig availableRigs={availableRigs} />
    </section>
  );
}

export default Home;

Home.propTypes = {
  availableRigs: PropTypes.array.isRequired,
};
