import React from "react";
import T from "prop-types";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const LogoLink = styled(Link)`
  display: flex;
  gap: 8px;
  align-items: center;
  font-family: "Ubuntu";
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: var(--primary-100);
`;

function Logo({ className, link }) {
  return (
    <LogoLink className={className} to={link}>
      hackyeah project
    </LogoLink>
  );
}

Logo.propTypes = {
  className: T.string,
  link: T.string,
};

export default Logo;
