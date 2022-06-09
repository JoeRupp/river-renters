import React from "react";
import "./RentARig.css";
import RigCard from "./RigCard";

function RentARig({ allRigs }) {
  const availableRigsList = allRigs.map((rig) => {
    return (
      <RigCard
        id={rig.id}
        name={rig.name}
        brand={rig.brand}
        type={rig.type}
        cost={rig.cost}
        description={rig.discription}
        photo={rig.photoId}
        key={rig.id}
      />
    );
  });

  return (
    <section className="rentARigSection">
      <h1>RENT A RIG</h1>
      <div className="rentalNav">
        <div className="rentalInfo">
          <p>
            All our available rafting rig setups are listed below. Click on any
            of the to learn more and rent it.
          </p>
        </div>
        <div className="form">
          <p>filter by:</p>
          <select>
            <option>brand</option>
            <option>option2</option>
            <option>option3</option>
            <option>option4</option>
          </select>
          <select>
            <option>type</option>
            <option>option2</option>
            <option>option3</option>
            <option>option4</option>
          </select>
          <select>
            <option>price</option>
            <option>option2</option>
            <option>option3</option>
            <option>option4</option>
          </select>
        </div>
      </div>
      <div className="availableRentals">{availableRigsList}</div>
    </section>
  );
}

export default RentARig;
