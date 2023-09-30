import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import Header from "./Header";
import Flexbox from "commons/components/Flexbox";
import Filters from "./Filters";
import Results from "./Results";
import Map from "./Map";
import callApi from "commons/util/callApi";
import Navigation from "App/Navigation";
import { results as mockResults } from "commons/util/constants";

const Box = styled.div``;

function UniList() {
  const [searchString, setSearchString] = useState("");
  const [location, setLocation] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  useEffect(() => {
    async function getUniversities() {
      const res = await callApi("search/universities", "post", {
        searchString,
        location,
        // categoryList,
        isFavourite: onlyFavorites,
      });

      console.log(universities);
      setUniversities(res);
      console.log(res);
    }

    setUniversities(mockResults);

    getUniversities();
  }, [searchString, location, categoryList, onlyFavorites]);

  return (
    <Box>
      <Navigation
        searchString={searchString}
        setSearchString={setSearchString}
        location={location}
        setLocation={setLocation}
      />
      <Header categoryList={categoryList} setCategoryList={setCategoryList} />
      <Flexbox padding="16px 32px">
        <Filters />
        <Results
          results={universities}
          onlyFavorites={onlyFavorites}
          setOnlyFavorites={setOnlyFavorites}
        />
        <Map
            universities={universities.filter(uni => uni.coordinates).map(uni => {
                return {
                    position: [uni.coordinates.latitude, uni.coordinates.longitude],
                    name: uni.name
                }
            })}
        />
      </Flexbox>
    </Box>
  );
}

export default UniList;
