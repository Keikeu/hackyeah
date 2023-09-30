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
        <Map universities={[
            {
            "position": [51.505, -0.09],
                "name": "Fajna nazwa Uni 1 "
            },
            {
             "position": [51.507, -0.09],
                "name": "Fajna nazwa Uni 2 "
            },
            {
                "position": [51.509, -0.09],
                "name": "Fajna nazwa Uni 3 "
            }
        ]}/>
      </Flexbox>
    </Box>
  );
}

export default UniList;
