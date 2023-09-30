import React from "react";
import styled from "styled-components/macro";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Box = styled.div`
  min-height: 100vh;
  overflow: hidden;
`;

function App() {
  return (
    <Box>
      <Navigation />
      <Outlet />
    </Box>
  );
}

export default App;
