import React from "react";
import T from "prop-types";
import styled from "styled-components/macro";
import Logo from "commons/components/Logo";
import Flexbox from "commons/components/Flexbox";
import Button from "commons/components/Button";

const Box = styled(Flexbox)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--neutral-200);
  width: 100%;
  z-index: var(--z-index-above);
  padding: 14px 32px;
  border-bottom: 1px solid var(--neutral-180);
  border-radius: var(--border-radius-0);
`;

const NavigationPlaceholder = styled.div`
  height: 69px;
`;

function Navigation({ className }) {
  return (
    <>
      <Box
        className={className}
        alignItems="center"
        justifyContent="space-between"
      >
        <Logo link="/" />
        <Button
          variant="tertiary"
          link="/favorites"
          icon="favorite"
          size="medium"
        >
          Ulubione
        </Button>
      </Box>
      <NavigationPlaceholder />
    </>
  );
}

Navigation.propTypes = {
  className: T.string,
};

export default Navigation;
