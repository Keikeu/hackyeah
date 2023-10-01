import React, { useState } from "react";
import T from "prop-types";
import styled from "styled-components/macro";
import Image from "commons/components/Image";
import Flexbox from "commons/components/Flexbox";
import Icon from "commons/components/Icon";
import Typography from "commons/components/Typography";
import callApi from "commons/util/callApi";
import Modal from "commons/components/Modal";
import { useUpdateEffect } from "commons/util/useUpdateEffect";
import Tag from "commons/components/Tag";
import TextLink from "commons/components/TextLink";

const Box = styled(Flexbox)`
  position: relative;
  background-color: var(--neutral-200);
  box-shadow: var(--shadow-1);
  overflow: hidden;
  cursor: pointer;

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

const DetailsModal = styled(Modal)`
  max-width: 640px;
  max-height: 800px;
`;

function Result({
  className,
  id,
  name,
  imageUrl,
  location,
  isFavorite: initIsFavorite,
  courses,
  ...rest
}) {
  const [showModal, setShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(initIsFavorite);

  return (
    <>
      <Box
        className={className}
        gap={16}
        marginTop={16}
        onClick={() => setShowModal(true)}
      >
        <Image
          src={imageUrl || ""}
          alt={`${name} image`}
          width="100px"
          height="100%"
        />
        <FavoriteIcon
          name="favorite"
          color="red-100"
          size={20}
          isFilled={isFavorite}
          onClick={(e) => {
            e.stopPropagation();
            if (isFavorite) {
              callApi("university/" + id + "/favourite", "delete")
            }else {
              callApi("university/" + id + "/favourite", "post")
            }
            setIsFavorite(!isFavorite);
          }}
        />
        <Flexbox
          flexDirection="column"
          gap={4}
          paddingTop={8}
          paddingBottom={16}
          paddingRight={16}
        >
          <Typography variant="h4" margin="0 12px 0 0">
            {name}
          </Typography>
          <FlexTypography variant="body">
            <Icon name="location_on" />
            {location}
          </FlexTypography>
          <Flexbox flexWrap="wrap" gap={4} marginTop={8}>
            {courses.map((course) => (
              <Tag key={course.name} label={course.name} color="grey" />
            ))}
          </Flexbox>
        </Flexbox>
      </Box>

      {showModal && (
        <DetailsModal handleClose={() => setShowModal(false)}>
          <Flexbox flexDirection="column" padding="16px 24px" gap={8}>
            <Image
              src={imageUrl || ""}
              alt={`${name} image`}
              width="100%"
              height="200px"
            />
            <Typography variant="h3">{name}</Typography>
            <TextLink to={rest.siteURL}>{rest.siteURL}</TextLink>
            <Typography variant="paragraph">
              {rest.address.city}, ul.{rest.address.street}{" "}
              {rest.address.buildingNumber}
            </Typography>
            <Typography variant="paragraph">
              <b>Typ uczelni:</b>{" "}
              {rest.type === "PUBLIC" ? "Publiczna" : "Prywatna"}
            </Typography>
            <Typography variant="paragraph">
              <b>Stypendia:</b> {rest.scholarships.map((el) => el)}
            </Typography>
            <Typography variant="paragraph">
              <b>Kluby:</b> {rest.clubs.map((el) => el.name).join(", ")}
            </Typography>
            <Typography variant="paragraph">
              <b>Udogodnienia:</b>{" "}
              {rest.amenities
                .map((el) => `${el.name} - ${el.distance}m`)
                .join(", ")}
            </Typography>
            <Typography variant="paragraph">
              <b>Udogodnienia dla niepełnosprawnych:</b>{" "}
              {rest.accessibilitiesForDisabled.map((el) => el).join(", ")}
            </Typography>
            <Typography variant="paragraph"></Typography>
            <Typography variant="paragraph"></Typography>
          </Flexbox>
        </DetailsModal>
      )}
    </>
  );
}

Result.propTypes = {
  className: T.string,
  id: T.string,
  name: T.string,
  imageUrl: T.string,
  location: T.string,
  isFavorite: T.bool,
};

export default Result;
