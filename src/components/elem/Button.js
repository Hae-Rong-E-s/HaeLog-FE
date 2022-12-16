import React from "react";
import styled, { css } from "styled-components";

const Button = (props) => {
  return (
    <StButton
      backgroundColor={props.backgroundColor}
      background={props.background}
      color={props.color}
      hoverBacground={props.hoverBacground}
      hoverColor={props.hoverColor}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </StButton>
  );
};

export default Button;
const StButton = styled.button`
  border-radius: 20px;
  padding: 0.5rem 1.25rem;
  cursor: pointer;
  margin: 0 5px 0 0;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "var(--color-light-red)"};
  color: ${({ color }) => color || "white"};
  border: none;

  &:active {
    background: ${({ hover }) => hover || "var(--color-deep-red)"};
    color: white;
  }
  &:hover:enabled {
    background: ${({ hoverBacground }) =>
      hoverBacground || "var(--color-deep-red)"};
    color: ${({ hoverColor }) => hoverColor || "white"};
  }
  &:focus {
    outline: none;
  }
`;
