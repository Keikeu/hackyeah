import React, { useEffect, useState } from "react";
import T from "prop-types";
import styled from "styled-components/macro";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Box = styled.div`
  width: 40%;
  flex-shrink: 0;
  background-color: var(--neutral-190);
  z-index: var(--z-index-0);
`;

function Map({ className, universities }) {
  const position = [50.06143, 19.93658];
  const [userLocation, setUserLocation] = useState({
    lat: 50.06143,
    lng: 19.93658,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, []);

  return (
    <Box className={className}>
      <MapContainer
        center={
          (userLocation && [userLocation.lat, userLocation.lng]) || position
        }
        zoom={12}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=oe69RYYnrr6UsgG1XbmVkHMlBtWBvQhqKQHG61ZIcECAXRVgS1dCOCpeCdGx654i"
        />
        {universities.map((uni) => {
          return (
            <Marker key={uni.name} position={uni.position}>
              <Popup>{uni.name}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </Box>
  );
}

Map.propTypes = {
  className: T.string,
};

export default Map;
