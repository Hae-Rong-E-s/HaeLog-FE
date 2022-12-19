import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "../components/login/LoginForm";
import LinkOAuth from "../components/login/LinkOAuth";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  width: 300px;
  color: white;
  h2 {
    margin-bottom: 30px;
    font-family: "bold";
  }
  h5 {
  }
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  h5 {
    margin-top: 30px;
    font-size: 17px;
    font-family: bold;
  }
`;

const LinkSignUp = styled.div`
  color: var(--color-light-red);
  display: inline;
  margin: 0 0 0 10px;
  font-family: bold;
  font-size: 18px;
  &:hover {
    color: var(--color-deep-red);
  }
`;

const Login = () => {
  return (
    <Container>
      <LoginContainer>
        <h2>로그인</h2>
        <LoginForm />
        <LinkContainer>
          <h5>소셜 계정으로 로그인</h5>
          <LinkOAuth />
          <div>
            아직 회원이 아니신가요?
            <Link>
              <LinkSignUp>회원가입</LinkSignUp>
            </Link>
          </div>
        </LinkContainer>
      </LoginContainer>
    </Container>
  );
};

export default Login;
