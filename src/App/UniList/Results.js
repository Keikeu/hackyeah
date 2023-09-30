import React, { useState } from "react";
import T from "prop-types";
import styled from "styled-components/macro";
import Typography from "commons/components/Typography";
import Result from "./Result";
import Tabs from "commons/components/Tabs";
import Loader from "commons/components/Loader";

const Box = styled.div`
  width: 100%;
  position: relative;
  margin-right: 16px;
`;

function Results({
  className,
  isLoading,
  results,
  onlyFavorites,
  setOnlyFavorites,
}) {
  const [activeTabId, setActiveTabId] = useState(onlyFavorites ? "fav" : "all");

  function toggleFavTab() {
    if (activeTabId === "fav") {
      setActiveTabId("all");
      setOnlyFavorites(false);
    } else {
      setActiveTabId("fav");
      setOnlyFavorites(true);
    }
  }

  return (
    <Box className={className}>
      <Typography variant="h3" margin="0 0 16px 0">
        Wyniki wyszukiwania
      </Typography>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!results.length ? (
            <Typography margin="16px 0 0 0">Brak wyników</Typography>
          ) : (
            <>
              <Tabs
                tabs={[
                  { id: "all", label: "All results" },
                  { id: "fav", label: "Favorites" },
                ]}
                setActiveTabId={toggleFavTab}
                activeTabId={activeTabId}
              />
              {results.map((result) => (
                <Result
                  key={result.id}
                  id={result.id}
                  name={result.name}
                  imageUrl={result.photoUrl}
                  location={result.address.city}
                  isFavorite={result.isFavourite}
                  courses={result.courseDegrees}
                  {...result}
                />
              ))}
            </>
          )}
        </>
      )}
    </Box>
  );
}

Results.propTypes = {
  className: T.string,
  isLoading: T.bool,
  results: T.array,
  onlyFavorites: T.bool,
  setOnlyFavorites: T.func,
};

export default Results;
