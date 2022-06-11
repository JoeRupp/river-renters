import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RigPreview.css";

function RigPreview({ currentRig, rentBoat }) {
  return (
    <section className="rigPreviewSection">
      <h1>{currentRig.name}</h1>
      <p>{`${currentRig.brand} | ${currentRig.type}`}</p>
      <div className="raftInfoContainer">
        <img
          className="rigImage"
          src={require(`../assets/boatImages/${currentRig.photoId}`)}
        />
        <div className="raftDetails">
          <p>{`${currentRig.description}`}</p>
          <h3>{`$${currentRig.cost} per day`}</h3>
          {currentRig.status === "available" && (
            <Link to={`/your-rentals`}>
              <button
                className="rentBtn"
                onClick={() => rentBoat(currentRig.id)}
              >
                Rent
              </button>
            </Link>
          )}
          {currentRig.status === "rented" && (
            <p>You are currently renting this raft</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default RigPreview;
