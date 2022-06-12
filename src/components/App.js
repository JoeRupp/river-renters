import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";
import YourRentals from "./YourRentals";
import RigPreview from "./RigPreview";
import ScrollToTop from "./ScrollToTop";
import "./App.css";
import apiCalls from "../apiCalls";

function App() {
  const [allBoatData, setAllBoatData] = useState([]);

  useEffect(() => {
    apiCalls.getRigsList().then((data) => setAllBoatData(data.rigs));
  }, []);

  const rentBoat = (boatId) => {
    const newBoatList = allBoatData.reduce((boatList, rig) => {
      if (rig.id === boatId) {
        rig.status = "rented";
        boatList.push(rig);
      } else {
        boatList.push(rig);
      }
      return boatList;
    }, []);

    const patch = {
      status: "rented",
      rentStartDate: "0",
      rentEndDate: "0",
    };

    apiCalls.updateRig(patch, boatId);

    setAllBoatData(newBoatList);
  };

  const returnBoat = (boatId) => {
    const newBoatList = allBoatData.reduce((boatList, rig) => {
      if (rig.id === boatId) {
        rig.status = "available";
        boatList.push(rig);
      } else {
        boatList.push(rig);
      }
      return boatList;
    }, []);

    const patch = {
      status: "available",
      rentStartDate: "0",
      rentEndDate: "0",
    };

    apiCalls.updateRig(patch, boatId);

    setAllBoatData(newBoatList);
  };

  const availableRigs = () =>
    allBoatData.filter((rig) => {
      return rig.status === "available";
    });

  const rentedRigs = () =>
    allBoatData.filter((rig) => {
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
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home availableRigs={availableRigs()} />}
          />
          <Route
            exact
            path="/your-rentals"
            render={() => <YourRentals rentedRigs={rentedRigs()} />}
          />
          <Route exact path="/about" render={() => <About />} />
          <Route
            path="/raft/:id"
            render={({ match }) => (
              <RigPreview
                currentRig={findRig(match.params.id)}
                rentBoat={rentBoat}
                returnBoat={returnBoat}
              />
            )}
          />
          <Route path="/404" render={() => <NoMatch />} />
          <Redirect to="/404" />
        </Switch>
      </ScrollToTop>
    </main>
  );
}

export default App;
