import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "../components/login/LoginForm";
import FullCenterContainer from "../components/elem/FullCenterContainer";

const Login = () => {
  return (
    <FullCenterContainer>
      <LoginContainer>
        <h2>로그인</h2>
        <LoginForm />
        <LinkContainer>
          {/* <h5>소셜 계정으로 로그인</h5>
          <LinkOAuth /> */}
          <div>
            아직 회원이 아니신가요?
            <Link to={"/signup"}>
              <LinkSignUp>회원가입</LinkSignUp>
            </Link>
          </div>
        </LinkContainer>
      </LoginContainer>
    </FullCenterContainer>
  );
};

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
  margin-top: 30px;
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

export default Login;
