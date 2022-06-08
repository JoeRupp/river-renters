import React from "react";
import { Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <main>
      <Nav />
      <Route exact path="/" render={() => <Home />} />
    </main>
  );
}

export default App;
