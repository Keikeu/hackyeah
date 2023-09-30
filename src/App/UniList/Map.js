import React from "react";
import T from "prop-types";
import styled from "styled-components/macro";

import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';

const Box = styled.div`
  width: 40%;
  height: 100%;
  flex-shrink: 0;
  background-color: var(--neutral-190);
`;

function Map({ className, universities }) {
  const position = [51.505, -0.09];

  return (<Box className={className}>
    <MapContainer  center={position} zoom={12} >
      <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=oe69RYYnrr6UsgG1XbmVkHMlBtWBvQhqKQHG61ZIcECAXRVgS1dCOCpeCdGx654i"
      />
      {universities.map(uni => {
        return (
            <Marker position={uni.position}>
              <Popup>
                {uni.name}
              </Popup>
            </Marker>
        )
      })}

    </MapContainer>

  </Box>);
}

Map.propTypes = {
  className: T.string,
};

export default Map;
