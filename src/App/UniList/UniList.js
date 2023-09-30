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
            "position": [50.06143, 19.93658],
                "name": "Fajna nazwa Uni 1 "
            },
            {
             "position": [50.06243, 19.93658],
                "name": "Fajna nazwa Uni 2 "
            },
            {
                "position": [50.06343, 19.93658],
                "name": "Fajna nazwa Uni 3 "
            }
        ]}/>
      </Flexbox>
    </Box>
  );
}

export default UniList;
