import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

const Layout = () => {
  return (
    <Container>
      <Header />
      <StLayout>
        <Outlet />
      </StLayout>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StLayout = styled.div`
  width: 85vw;
  min-width: 800px;
  max-width: 1200px;
  flex: 1;
  color: white;
`;
