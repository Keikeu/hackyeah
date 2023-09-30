import React, { useState } from "react";
import T from "prop-types";
import styled, { css } from "styled-components/macro";
import Flexbox from "commons/components/Flexbox";
import Icon from "commons/components/Icon";
import Typography from "commons/components/Typography";
import { categories } from "commons/util/constants";
import Modal from "commons/components/Modal";
import Button from "commons/components/Button";
import SelectInput from "commons/components/SelectInput";
import NumberInput from "commons/components/NumberInput";

const Box = styled(Flexbox)`
  padding: 14px 32px;
  border-bottom: 1px solid var(--neutral-180);
  border-radius: var(--border-radius-0);
`;

const FlexboxStyled = styled(Flexbox)`
  /* width: 100%; // @Karcia ? */
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
  width: 100%;

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

  ${({ $isActive, $shouldHighlightActive }) =>
    $shouldHighlightActive &&
    !$isActive &&
    css`
      ${Circle} {
        background-color: var(--neutral-170) !important;
      }
    `}
`;

const CategoryIcon = styled(Icon)`
  font-size: 20px;
`;

const ModalStyled = styled(Modal)`
  max-width: 640px;
  max-height: 640px;
`;

const NumberInputStyled = styled(NumberInput)`
  width: 200px;
`;

function Header({ className, categoryList, setCategoryList }) {
  const [showModal, setShowModal] = useState(false);
  const [results, setResults] = useState([
    { id: 0, subject: "", percentage: "" },
  ]);

  function toggleCategory(id) {
    if (categoryList.includes(id)) {
      setCategoryList(categoryList.filter((categoryId) => categoryId !== id));
    } else {
      setCategoryList([...categoryList, id]);
    }
  }

  return (
    <>
      <Box className={className} justifyContent="space-between" gap={24}>
        <FlexboxStyled gap={24}>
          {categories.map((category) => (
            <Category
              key={category.id}
              flexDirection="column"
              alignItems="center"
              gap={4}
              onClick={() => toggleCategory(category.id)}
              $shouldHighlightActive={categoryList.length > 0}
              $isActive={categoryList.includes(category.id)}
            >
              <Circle>
                <CategoryIcon name={category.icon} />
              </Circle>
              <Typography variant="label">{category.label}</Typography>
            </Category>
          ))}
        </FlexboxStyled>
        <Button onClick={() => setShowModal(true)}>
          Moje wyniki maturalne
        </Button>
      </Box>

      {showModal && (
        <ModalStyled handleClose={() => setShowModal(false)}>
          <Flexbox flexDirection="column" padding={40}>
            <Typography variant="h3">Wyniki maturalne</Typography>
            <Flexbox alignItems="flex-end" marginY={24} gap={16}>
              {results.map((result) => (
                <React.Fragment key={result.id}>
                  <SelectInput
                    label="Przedmiot"
                    placeholder="Wybierz przedmiot"
                    options={[{ id: "matematyka", label: "Matematyka" }]}
                    value={result.subject}
                    onChange={() => {}}
                  />
                  <NumberInputStyled
                    label="Twój wynik"
                    rightIcon="percent"
                    value={result.percentage}
                    min={0}
                    max={100}
                  />
                  <Button variant="tertiary" icon="delete" size="medium" />
                </React.Fragment>
              ))}
            </Flexbox>
            <Button variant="secondary" icon="add">
              Dodaj wynik
            </Button>
          </Flexbox>
          <Button>Zapisz</Button>
        </ModalStyled>
      )}
    </>
  );
}

Header.propTypes = {
  className: T.string,
  searchString: T.string,
  setSearchString: T.func,
  categoryList: T.arrayOf(T.string),
  setCategoryList: T.func,
  location: T.string,
  setLocation: T.func,
};

export default Header;
