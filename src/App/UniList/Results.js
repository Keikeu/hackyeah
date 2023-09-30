import React from "react";
import T from "prop-types";
import styled from "styled-components/macro";
import Typography from "commons/components/Typography";

const Box = styled.div`
  width: 100%;
`;

function Results({ className }) {
  return (
    <Box className={className}>
      <Typography variant="h3">Wyniki wyszukiwania</Typography>
    </Box>
  );
}

Results.propTypes = {
  className: T.string,
};

export default Results;
