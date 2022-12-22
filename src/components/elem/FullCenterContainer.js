import React from "react";
import styled from "styled-components";

const FullCenterContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default FullCenterContainer;
