import React from "react";
import styled from "styled-components";
import AddPostForm from "../components/create/AddPostForm";
import Footer from "../components/create/Footer";

const Create = () => {
  return (
    <Cover>
      <Container>
        <AddPostForm />
      </Container>
      <Footer />
    </Cover>
  );
};

const Container = styled.div`
  margin: 50px auto;
  width: 85%;
  min-width: 500px;
  max-width: 1200px;
  flex: 1;
`;

const Cover = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default Create;
