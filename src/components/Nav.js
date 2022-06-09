import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navigationBar">
      <img
        className="logo"
        src={require("../assets/logos/RiverRenters-logo.png")}
        alt="River Renters Logo"
      />
      <NavLink to={"/"}>
        <button className="btn" activeClassName="selectedBtn">
          RENT A RIG
        </button>
      </NavLink>
      <NavLink to={"/your-rentals"}>
        <button className="btn" activeClassName="selectedBtn">
          YOUR RENTALS
        </button>
      </NavLink>
    </nav>
  );
}

export default Nav;
