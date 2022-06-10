import React, { useState } from "react";
import "./YourRentals.css";
import RigCard from "./RigCard";

function YourRentals({ rentedRigs }) {
  const [yourRentals, setYourRentals] = useState(rentedRigs);

  const yourRentalsList = (rigsList) => {
    if (rigsList.length) {
      return rigsList.map((rig) => {
        return (
          <RigCard
            id={rig.id}
            name={rig.name}
            brand={rig.brand}
            type={rig.type}
            cost={rig.cost}
            photo={rig.photoId}
            key={rig.id}
          />
        );
      });
    } else {
      return <h3>It looks like you don't have any rentals right now!</h3>;
    }
  };

  return (
    <section className="yourRentalsSections">
      <p>All your current rentals can be found below:</p>
      <div className="yourRentals">{yourRentalsList(yourRentals)}</div>
    </section>
  );
}

export default YourRentals;
