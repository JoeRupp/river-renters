import React from "react";
import { Link } from "react-router-dom";
import "./RigCard.css";

function RigCard({ id, name, brand, type, cost, description, photo }) {
  return (
    <Link to={`/${id}`} style={{ textDecoration: "none" }}>
      <section className="rigCard">
        <img
          className="cardImage"
          src={require(`../assets/boatImages/${photo}`)}
        />
        <div className="cardDetails">
          <h2>{name}</h2>
          <p>{`${brand} | ${type}`}</p>
          <h3>{`$${cost} per day`}</h3>
        </div>
      </section>
    </Link>
  );
}

export default RigCard;
