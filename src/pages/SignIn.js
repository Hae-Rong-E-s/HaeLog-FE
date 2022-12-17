import React from "react";
import styled from "styled-components";
import SignInForm from "../components/signIn/SignInForm";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SignIn = () => {
  return (
    <Container>
      <SignInForm />
    </Container>
  );
};

export default SignIn;
