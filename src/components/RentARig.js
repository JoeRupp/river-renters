import React from "react";
import "./RentARig.css";

function RentARig() {
  return (
    <section className="rentARigSection">
      <h1>RENT A RIG</h1>
      <div className="rentalNav">
        <div className="rentalInfo">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="form">
          <p>price:</p>
          <select>
            <option>All</option>
            <option>option2</option>
            <option>option3</option>
          </select>
          <p>brand:</p>
          <select>
            <option>All</option>
            <option>option2</option>
            <option>option3</option>
          </select>
          <p>type:</p>
          <select>
            <option>All</option>
            <option>option2</option>
            <option>option3</option>
          </select>
        </div>
      </div>
      <div className="availableRentals"></div>
    </section>
  );
}

export default RentARig;
