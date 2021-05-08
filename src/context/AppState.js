import React, { useState } from "react";
import AppContext from "./AppContext";
import { initialState } from "../assets/InitialState";

const AppState = ({ children }) => {
  const [places, setPlaces] = useState(initialState);

  const handleCoords = (coords) => {
    setPlaces({
      ...places,
      places: [...places.places, coords],
    });
  };

  return (
    <AppContext.Provider value={{ places, handleCoords }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
