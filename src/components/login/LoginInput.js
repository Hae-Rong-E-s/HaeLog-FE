import React from "react";
import styled from "styled-components";

const LoginInput = ({
  name,
  value,
  type,
  onChangeInputHandler,
  placeholder,
}) => {
  return (
    <Input
      name={name}
      type={type}
      value={value}
      onChange={onChangeInputHandler}
      placeholder={placeholder}
    ></Input>
  );
};

const Input = styled.input`
  width: 100%;
  padding: 10px 2px;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom: solid 2px white;
  margin: 10px 0 0 0;
  &:focus {
    outline: none;
  }
`;

export default LoginInput;
