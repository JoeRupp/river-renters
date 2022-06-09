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

  return (
    <main>
      <Nav />
      <Route exact path="/" render={() => <Home allRigs={allBoatData} />} />
      <Route exact path="/your-rentals" render={() => <YourRentals />} />
      <Route exact path="/:id" render={({ match }) => <RigPreview />} />
    </main>
  );
}

export default App;
