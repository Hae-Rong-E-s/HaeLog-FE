import React from "react";
import styled from "styled-components";
import AddPostForm from "../components/create/AddPostForm";
import Footer from "../components/layout/Footer";

const Create = () => {
  return (
    <div>
      <Container>
        <AddPostForm />
      </Container>
      <Footer />
    </div>
  );
};

const Container = styled.div`
  margin: 50px auto;
  width: 85%;
  min-width: 500px;
  max-width: 1200px;
`;

export default Create;
