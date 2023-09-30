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

function Map({ className }) {
  const position = [51.505, -0.09];

  return (<Box className={className}>
    <MapContainer  center={position} zoom={12} scrollWheelZoom={false}>
      <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>

  </Box>);
}

Map.propTypes = {
  className: T.string,
};

export default Map;
