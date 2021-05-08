import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

const Home = () => {
  const { handleCoords, places } = useContext(AppContext);

  const [position, setPosition] = useState({
    name: "",
    geometry: {
      lat: 0,
      lng: 0,
    },
  });

  const geoSuccess = (coordenadas) => {
    const currentlyPosition = {
      name: "Currently Position",
      geometry: {
        lat: coordenadas.coords.latitude,
        lng: coordenadas.coords.longitude,
      },
    };
    setPosition(currentlyPosition);
    handleCoords(currentlyPosition);
  };

  const geoError = (error) => {
    console.log(error);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, {
      enableHighAccurancy: true,
    });
  }, []);

  return (
    <div>
      <h1>Geolocalizacion</h1>
      <p>Lng: {position.geometry.lng}</p>
      <p>Lat: {position.geometry.lat}</p>
      <Link to="/map">
        <button>Ver tu position en el mapa</button>
      </Link>
      {console.log(position)}
    </div>
  );
};

export default Home;
