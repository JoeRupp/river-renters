import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";
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

  const findRig = (id) => {
    return allBoatData.find((rig) => {
      return rig.id === Number(id);
    });
  };

  return (
    <main>
      <Nav />
      <Switch>
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
        <Route exact path="/about" render={() => <About />} />
        <Route
          path="/raft/:id"
          render={({ match }) => (
            <RigPreview currentRig={findRig(match.params.id)} />
          )}
        />
        <Route path="/404" render={() => <NoMatch />} />
        <Redirect to="/404" />
      </Switch>
    </main>
  );
}

export default App;
