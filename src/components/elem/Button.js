import React from "react";
import styled from "styled-components";

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
      fontSize={props.fontSize}
      margin={props.margin}
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
  margin: ${({ margin }) => margin || "0 5px 0 0"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "var(--color-light-red)"};
  color: ${({ color }) => color || "white"};
  border: none;
  font-size: ${({ fontSize }) => fontSize || "14px"};

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
