import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <Container>
      <Header />
      <StLayout>
        <Outlet />
      </StLayout>
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StLayout = styled.div`
  margin: 0 auto;
  width: 80vw;
  min-width: 650px;
  max-width: 1000px;
  flex: 1;
`;
