import React from "react";
import T from "prop-types";
import styled, { css } from "styled-components/macro";
import { Link, useLocation } from "react-router-dom";
import Logo from "commons/components/Logo";
import Flexbox from "commons/components/Flexbox";

const Box = styled(Flexbox)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 14px 32px;
  background-color: var(--secondary-190);
  width: 100%;
  border-radius: var(--border-radius-0);
  z-index: var(--z-index-above);
`;

const Links = styled(Flexbox)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
`;

const LinkStyled = styled(Link)`
  color: var(--neutral-120);
  padding: 4px 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  border-radius: var(--border-radius-1);

  ${({ $isActive }) =>
    $isActive &&
    css`
      font-weight: 700;
      color: var(--primary-100);
      background-color: var(--neutral-200);
    `}

  &:hover {
    color: var(--primary-100);
  }
`;

const NavigationPlaceholder = styled.div`
  height: 52px;
`;

function Navigation({ className }) {
  const location = useLocation();

  return (
    <>
      <Box
        className={className}
        alignItems="center"
        justifyContent="space-between"
      >
        <Logo link="/" />
        <Links justifyContent="center" gap={16}>
          <LinkStyled $isActive={location.pathname.includes("tab1")} to="tab1">
            Tab 1
          </LinkStyled>
          <LinkStyled $isActive={location.pathname.includes("tab2")} to="tab2">
            Tab 2
          </LinkStyled>
          <LinkStyled $isActive={location.pathname.includes("tab3")} to="tab3">
            Tab 3
          </LinkStyled>
        </Links>
      </Box>
      <NavigationPlaceholder />
    </>
  );
}

Navigation.propTypes = {
  className: T.string,
};

export default Navigation;
