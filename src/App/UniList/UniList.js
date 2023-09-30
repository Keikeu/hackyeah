import React from "react";
import styled from "styled-components/macro";
import Header from "./Header";
import Flexbox from "commons/components/Flexbox";
import Filters from "./Filters";
import Results from "./Results";
import Map from "./Map";

const Box = styled.div``;

function UniList() {
  return (
    <Box>
      <Header />
      <Flexbox padding="16px 32px">
        <Filters />
        <Results />
        <Map />
      </Flexbox>
    </Box>
  );
}

export default UniList;
