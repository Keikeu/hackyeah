import React from "react";
import T from "prop-types";
import styled from "styled-components/macro";

const Box = styled.div`
  width: 40%;
  flex-shrink: 0;
  background-color: var(--neutral-190);
`;

function Map({ className }) {
  return <Box className={className}>Mapa{/* KLOPRON TUTAJ */}</Box>;
}

Map.propTypes = {
  className: T.string,
};

export default Map;
