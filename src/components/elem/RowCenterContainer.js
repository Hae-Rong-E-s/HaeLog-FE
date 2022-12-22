import React from "react";
import styled from "styled-components";

const RowCenterContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default RowCenterContainer;
