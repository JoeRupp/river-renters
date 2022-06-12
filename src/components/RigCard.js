import React from "react";
import { Link } from "react-router-dom";
import "./RigCard.css";
import PropTypes from "prop-types";

function RigCard({ id, name, brand, type, cost, photo }) {
  return (
    <Link to={`/raft/${id}`} style={{ textDecoration: "none" }}>
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

RigCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
};
