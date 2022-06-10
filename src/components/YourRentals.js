import React from "react";
import "./YourRentals.css";

function YourRentals({ rentedRigs }) {
  return (
    <section className="yourRentalsSections">
      <p>All your current rentals can be found below:</p>
      <div className="yourRentals"></div>
    </section>
  );
}

export default YourRentals;
