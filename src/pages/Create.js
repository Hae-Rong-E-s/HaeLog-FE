import React from "react";
import styled from "styled-components";
import AddPostForm from "../components/create/AddPostForm";

const Create = () => {
  return (
    <Container>
      <AddPostForm />
    </Container>
  );
};

const Container = styled.div`
  margin: 50px auto;
  width: 85%;
  min-width: 500px;
  max-width: 1200px;
`;

export default Create;
