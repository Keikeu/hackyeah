import React, { useState } from "react";
import T from "prop-types";
import styled from "styled-components/macro";
import Typography from "commons/components/Typography";
import Flexbox from "commons/components/Flexbox";
import Filter from "./Filter";
import { filterStructure } from "commons/util/constants";

const Box = styled.div`
  width: 346px;
  flex-shrink: 0;
  padding-right: 16px;
`;

const FlexboxStyled = styled(Flexbox)`
  overflow-y: auto;
  height: calc(100vh - 270px);
`;

function Filters({ className }) {
  const [filters, setFilters] = useState({});

  async function updateFilters(id, value) {
    const newPreferences = { ...filters, [id]: value };
    setFilters(newPreferences);
  }

  return (
    <Box className={className}>
      <Typography variant="h3">Filtry</Typography>
      <FlexboxStyled flexDirection="column" gap={8} marginTop={24} isBordered>
        {filterStructure.map((el) => (
          <Filter
            {...el}
            key={el.id}
            value={filters[el.id]}
            onChange={(value) => updateFilters(el.id, value)}
          />
        ))}
      </FlexboxStyled>
    </Box>
  );
}

Filters.propTypes = {
  className: T.string,
};

export default Filters;
