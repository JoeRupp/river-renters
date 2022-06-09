import React from "react";
import { Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import YourRentals from "./YourRentals";
import "./App.css";

function App() {
  return (
    <main>
      <Nav />
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/your-rentals" render={() => <YourRentals />} />
    </main>
  );
}

export default App;
