import React, { useContext } from "react";
import { Marker, Popup } from "react-leaflet";
import IconPosition from "../components/IconPosition";
import AppContext from "../context/AppContext";

const Markers = () => {
  const {
    places: { places },
  } = useContext(AppContext);
  const markers = places.map((place) => {
    return (
      <Marker key={place.name} position={place.geometry} icon={IconPosition}>
        <Popup>{place.name}</Popup>
      </Marker>
    );
  });
  return markers;
};

export default Markers;
