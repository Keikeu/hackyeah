import React from "react";
import T from "prop-types";
import styled, { css } from "styled-components/macro";
import Flexbox from "../Flexbox";
import Icon from "../Icon";

const Circle = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  border: 2px solid var(--neutral-180);
  background-color: var(--neutral-200);
  border-radius: 50%;

  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: var(--primary-100);
      border: none;
    `}

  ${({ $isActive, $isSingleChoice }) =>
    $isActive &&
    $isSingleChoice &&
    css`
      &:after {
        content: "";
        position: absolute;
        top: 6px;
        left: 6px;
        width: 8px;
        height: 8px;
        background-color: var(--neutral-200);
        border-radius: 50%;
      }
    `}
`;

const Check = styled(Icon)`
  position: absolute;
  top: -2px;
  left: -2px;
`;

function RadioButton({
  className,
  label,
  isActive,
  onClick,
  isSingleChoice = false,
}) {
  return (
    <Flexbox className={className} gap={12} onClick={onClick}>
      <Circle $isActive={isActive} $isSingleChoice={isSingleChoice}>
        {isActive && !isSingleChoice && (
          <Check size={25} name="check" color="neutral-200" />
        )}
      </Circle>
      {label}
    </Flexbox>
  );
}

RadioButton.propTypes = {
  className: T.string,
  label: T.string.isRequired,
  isActive: T.bool,
  onClick: T.func,
};

export default RadioButton;
