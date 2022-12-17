import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/elem/Button";

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
    margin-bottom: 40px;
  }
  h5 {
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    label {
      display: inline-block;
      margin-top: 15px;
      font-weight: 100;
    }
    input {
      width: 280px;
      border-radius: 5px;
      padding: 10px 20px;
      background: white;
      border: none;
      margin-top: 10px;
    }
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  h5 {
    margin-top: 30px;
    font-size: 16px;
  }
  p {
    margin-top: 5px;
  }
`;

const LinkSignUp = styled.div`
  color: var(--color-light-red);
  display: inline;
  margin-left: 10px;
`;

const Login = () => {
  return (
    <Container>
      <LoginContainer>
        <h2>로그인</h2>
        <FormContainer>
          <ButtonContainer>
            <Button>로그인</Button>
          </ButtonContainer>
          <form>
            <label for="id">아이디</label>
            <br />
            <input id="id"></input> <br />
            <label for="password">비밀번호</label>
            <br />
            <input id="password"></input>
          </form>
        </FormContainer>
        <LinkContainer>
          <h5>소셜 계정으로 로그인</h5>
          <p>
            아직 회원이 아니신가요?
            <Link>
              <LinkSignUp>회원가입</LinkSignUp>
            </Link>
          </p>
        </LinkContainer>
      </LoginContainer>
    </Container>
  );
};

export default Login;
