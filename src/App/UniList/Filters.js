import React, { useEffect, useState } from "react";
import T from "prop-types";
import styled from "styled-components/macro";
import Typography from "commons/components/Typography";
import Flexbox from "commons/components/Flexbox";
import Filter from "./Filter";
import { filterStructure } from "commons/util/constants";

const Box = styled.div`
  width: 360px;
  flex-shrink: 0;
  padding-right: 16px;
`;

const FlexboxStyled = styled(Flexbox)`
  overflow-y: auto;
  height: calc(100vh - 270px);
`;

function Filters({ className, filters, setFilters }) {
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

  function updateFilters(id, value) {
    let newValue;

    if (!filters[id]) {
      newValue = [value];
    } else if (filters[id].includes(value)) {
      newValue = filters[id].filter((filterId) => filterId !== value);
    } else {
      newValue = [...filters[id], value];
    }

    const newPreferences = { ...filters, [id]: newValue };
    setFilters(newPreferences);
  }

  return (
    <Box className={className}>
      <Typography variant="h3">Filtry</Typography>
      <FlexboxStyled flexDirection="column" gap={8} marginTop={16} isBordered>
        {filterStructure.map((el) => (
          <Filter
            {...el}
            key={el.id}
            value={filters[el.id]}
            onChange={(value) => updateFilters(el.id, value)}
          />
        ))}
        <Filter
          id="distance"
          label="Odległość"
          type="number"
          step={30}
          key="distance"
          value={filters.distance ? filters.distance.distance : 0}
          max={10000}
          onChange={(value) => {
            const result = {
              userCoordinates: {
                latitude: userLocation.lat,
                longitude: userLocation.lng,
              },
              distance: value,
            };
            setFilters({ ...filters, distance: result });
          }}
        />
      </FlexboxStyled>
    </Box>
  );
}

Filters.propTypes = {
  className: T.string,
  filters: T.object,
  setFilters: T.func,
};

export default Filters;
