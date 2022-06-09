import React from "react";
import { Link } from "react-router-dom";

function RigCard({ id, name, brand, type, cost, description, photo }) {
  return (
    <Link to={`/${id}`}>
      <section>
        <img src={require(`../assets/boatImages/${photo}`)} />
        <div>
          <h2>{name}</h2>
          <p>{`${brand} | ${type}`}</p>
          <h3>{cost}</h3>
          <p>{description}</p>
        </div>
      </section>
    </Link>
  );
}

export default RigCard;
