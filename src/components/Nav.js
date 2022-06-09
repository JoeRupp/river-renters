import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [rentARigStatus, updateRentARigStatus] = useState(false);
  const [yourRentalsStatus, updateRentalStatus] = useState(false);

  return (
    <nav className="navigationBar">
      <img
        className="logo"
        src={require("../assets/logos/RiverRenters-logo.png")}
        alt="River Renters Logo"
      />
      <div className="btnContainer">
        <NavLink
          exact
          to={"/"}
          className={(isActive) => updateRentARigStatus(isActive)}
        >
          <button className={rentARigStatus ? "btnActive" : "btn"}>
            RENT A RIG
          </button>
        </NavLink>
        <NavLink
          exact
          to={"/your-rentals"}
          className={(isActive) => updateRentalStatus(isActive)}
        >
          <button className={yourRentalsStatus ? "btnActive" : "btn"}>
            YOUR RENTALS
          </button>
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
