import React, { useState, useEffect } from "react";
import "./RentARig.css";
import RigCard from "./RigCard";

function RentARig({ availableRigs }) {
  const [rigSelection, setRigSelection] = useState(availableRigs);
  const [brandValue, setBrandValue] = useState("brand");
  const [typeValue, setTypeValue] = useState("type");
  const [priceValue, setPriceValue] = useState("price");

  const handleBrandChange = (event) => {
    setBrandValue(event.target.value);
  };

  const handleTypeChange = (event) => {
    setTypeValue(event.target.value);
  };

  const handlePriceChange = (event) => {
    if (event.target.value === "price") {
      setPriceValue(event.target.value);
    } else {
      setPriceValue(event.target.value.split(","));
    }
  };

  const filterRigs = () => {
    let filteredRigs = availableRigs;

    if (brandValue !== "brand") {
      filteredRigs = filteredRigs.filter((rig) => {
        return rig.brand === brandValue;
      });
    }

    if (typeValue !== "type") {
      filteredRigs = filteredRigs.filter((rig) => {
        return rig.type === typeValue;
      });
    }

    if (priceValue !== "price") {
      filteredRigs = filteredRigs.filter((rig) => {
        return (
          Number(priceValue[0]) <= rig.cost && rig.cost <= Number(priceValue[1])
        );
      });
    }

    setRigSelection(filteredRigs);
  };

  const availableRigsList = (rigsList) => {
    if (rigsList.length) {
      return rigsList.map((rig) => {
        return (
          <RigCard
            id={rig.id}
            name={rig.name}
            brand={rig.brand}
            type={rig.type}
            cost={rig.cost}
            description={rig.description}
            photo={rig.photoId}
            key={rig.id}
          />
        );
      });
    } else {
      return (
        <h3>
          Oh no! It looks like we don't have any available rigs right now!
        </h3>
      );
    }
  };

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
          <select value={brandValue} onChange={handleBrandChange}>
            <option value="brand">brand</option>
            <option value="NRS">NRS</option>
            <option value="Hyside">Hyside</option>
            <option value="RMR">RMR</option>
            <option value="Maravia">Maravia</option>
          </select>
          <select value={typeValue} onChange={handleTypeChange}>
            <option value="type">type</option>
            <option value="Fishing">Fishing Trip</option>
            <option value="Overnight">Overnight Trip</option>
            <option value="Multi-day">Multi-day Trip</option>
          </select>
          <select value={priceValue} onChange={handlePriceChange}>
            <option value="price">price</option>
            <option value="0, 99">$0 - $99</option>
            <option value="100, 149">$100 - $149</option>
            <option value="150, 199">$150 - $199</option>
            <option value="200, 1000">$200 +</option>
          </select>
          <button className="filterBtn" onClick={() => filterRigs()}>
            filter
          </button>
        </div>
      </div>
      <div className="availableRentals">{availableRigsList(rigSelection)}</div>
    </section>
  );
}

export default RentARig;
