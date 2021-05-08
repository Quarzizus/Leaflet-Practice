import React from "react";
import "./styles/App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MapViewer from "../components/MapViewer";
import Home from "../components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/map" component={MapViewer} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
