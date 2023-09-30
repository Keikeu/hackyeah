import React from "react";
import T from "prop-types";
import styled from "styled-components/macro";
import Button from "commons/components/Button";
import Flexbox from "commons/components/Flexbox";
import Icon from "commons/components/Icon";
import TextInput from "commons/components/TextInput";
import Typography from "commons/components/Typography";
import { categories } from "commons/util/constants";

const Box = styled(Flexbox)`
  padding: 14px 32px;
  border-bottom: 1px solid var(--neutral-180);
  border-radius: var(--border-radius-0);
`;

const FlexboxStyled = styled(Flexbox)`
  width: 100%;
`;

const SearchInput = styled(TextInput)`
  min-width: 100px;
`;

const Circle = styled(Flexbox)`
  margin-top: 4px;
  position: relative;
  color: var(--neutral-200);
  padding: 8px;
  border-radius: 50%;

  &:after {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    border-radius: 50%;
    background-color: var(--neutral-180);
    z-index: var(--z-index-below);
    opacity: 0;
  }

  &:hover {
    &:after {
      opacity: 1;
    }
  }
`;

const Category = styled(Flexbox)`
  cursor: pointer;
  text-align: center;
  width: 72px;

  &:hover {
    color: var(--neutral-90);

    ${Circle}:after {
      opacity: 1;
    }
  }

  &:nth-child(1) {
    ${Circle} {
      background-color: var(--red-100);
    }
  }
  &:nth-child(2) {
    ${Circle} {
      background-color: var(--orange-100);
    }
  }
  &:nth-child(3) {
    ${Circle} {
      background-color: var(--yellow-100);
    }
  }
  &:nth-child(4) {
    ${Circle} {
      background-color: var(--lime-100);
    }
  }
  &:nth-child(5) {
    ${Circle} {
      background-color: var(--green-100);
    }
  }
  &:nth-child(6) {
    ${Circle} {
      background-color: var(--turquoise-100);
    }
  }
  &:nth-child(7) {
    ${Circle} {
      background-color: var(--blue-100);
    }
  }
  &:nth-child(8) {
    ${Circle} {
      background-color: var(--violet-100);
    }
  }
  &:nth-child(9) {
    ${Circle} {
      background-color: var(--purple-100);
    }
  }
  &:nth-child(10) {
    ${Circle} {
      background-color: var(--pink-100);
    }
  }
`;

const CategoryIcon = styled(Icon)`
  font-size: 20px;
`;

function Header({ className }) {
  return (
    <Box className={className} justifyContent="space-between" gap={24}>
      <FlexboxStyled alignItems="flex-start" gap={24}>
        <SearchInput value="" placeholder="Szukaj" icon="search" />
        <Button variant="tertiary" size="medium" icon="location_on">
          <Flexbox alignItems="center" gap={4}>
            Lokalizacja <Icon name="expand_more" />
          </Flexbox>
        </Button>
      </FlexboxStyled>
      <Flexbox gap={24}>
        {categories.map((category) => (
          <Category
            key={category.id}
            flexDirection="column"
            alignItems="center"
            gap={4}
            onClick={() => console.log(category.id)}
          >
            <Circle>
              <CategoryIcon name={category.icon} />
            </Circle>
            <Typography variant="label">{category.label}</Typography>
          </Category>
        ))}
      </Flexbox>
    </Box>
  );
}

Header.propTypes = {
  className: T.string,
};

export default Header;
