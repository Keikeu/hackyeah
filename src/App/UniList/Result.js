import React, { useEffect, useState } from "react";
import T from "prop-types";
import styled from "styled-components/macro";
import Image from "commons/components/Image";
import Flexbox from "commons/components/Flexbox";
import Icon from "commons/components/Icon";
import Typography from "commons/components/Typography";
import callApi from "commons/util/callApi";

const Box = styled(Flexbox)`
  position: relative;
  background-color: var(--neutral-200);
  box-shadow: var(--shadow-1);
  overflow: hidden;

  &:hover {
    box-shadow: var(--shadow-2);
  }
`;

const FavoriteIcon = styled(Icon)`
  position: absolute;
  top: 8px;
  right: 8px;
`;

const FlexTypography = styled(Typography)`
  display: flex;
  align-items: center;
  gap: 4px;
`;

function Result({
  className,
  id,
  name,
  imageUrl,
  location,
  isFavorite: initIsFavorite,
}) {
  const [isFavorite, setIsFavorite] = useState(initIsFavorite);

  useEffect(() => {
    async function toggleFavorite() {
      await callApi(`university/${id}/favourite`, "post");
    }

    // toggleFavorite();
  }, [isFavorite]);

  return (
    <Box className={className} gap={16} marginTop={16}>
      <Image
        src={imageUrl}
        alt={`${name} image`}
        width="100px"
        height="100px"
      />
      <FavoriteIcon
        name="favorite"
        size={20}
        onClick={() => setIsFavorite(!isFavorite)}
      />
      <Flexbox flexDirection="column" gap={4} paddingY={8}>
        <Typography variant="h4">{name}</Typography>
        <FlexTypography variant="body">
          <Icon name="location_on" />
          {location}
        </FlexTypography>
      </Flexbox>
    </Box>
  );
}

Result.propTypes = {
  className: T.string,
  id: T.number,
  name: T.string,
  imageUrl: T.string,
  location: T.string,
  isFavorite: T.bool,
};

export default Result;
