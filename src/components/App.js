import React, { useState } from "react";
import { Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import YourRentals from "./YourRentals";
import RigPreview from "./RigPreview";
import "./App.css";
import allBoats from "../testData";

function App() {
  const [allBoatData, setAllBoatData] = useState(allBoats.rigs);

  const availableRigs = allBoatData.filter((rig) => {
    return rig.status === "available";
  });

  const rentedRigs = allBoatData.filter((rig) => {
    return rig.status === "rented";
  });

  return (
    <main>
      <Nav />
      <Route
        exact
        path="/"
        render={() => <Home availableRigs={availableRigs} />}
      />
      <Route
        exact
        path="/your-rentals"
        render={() => <YourRentals rentedRigs={rentedRigs} />}
      />
      <Route exact path="/:id" render={({ match }) => <RigPreview />} />
    </main>
  );
}

export default App;
