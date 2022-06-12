import React from "react";
import "./YourRentals.css";
import RigCard from "./RigCard";
import PropTypes from "prop-types";

function YourRentals({ rentedRigs }) {
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
      <div className="yourRentals">{yourRentalsList(rentedRigs)}</div>
    </section>
  );
}

export default YourRentals;

YourRentals.propTypes = {
  rentedRigs: PropTypes.array.isRequired,
  rigsList: PropTypes.array,
};
