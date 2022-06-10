import React, { useState } from "react";
import "./RigPreview.css";

function RigPreview({ currentRig }) {
  return (
    <section className="rigPreviewSection">
      <h1>{currentRig.name}</h1>
      <p>{`${currentRig.brand} | ${currentRig.type}`}</p>
      <img
        className="rigImage"
        src={require(`../assets/boatImages/${currentRig.photoId}`)}
      />
      <p>{`${currentRig.description}`}</p>
      <h3>{`$${currentRig.cost} per day`}</h3>
      {currentRig.status === "available" && (
        <button className="rentBtn">Rent</button>
      )}
      {currentRig.status === "rented" && (
        <p>You are currently renting this raft</p>
      )}
    </section>
  );
}

export default RigPreview;
