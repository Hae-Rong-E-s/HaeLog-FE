import React from "react";
import styled from "styled-components";
import Button from "../elem/Button";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    input {
      width: 100%;
      padding: 10px 2px;
      border-left-width: 0;
      border-right-width: 0;
      border-top-width: 0;
      border-bottom: solid 2px white;
      margin: 10px 0 0 0;
    }
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const LoginForm = () => {
  return (
    <div>
      <FormContainer>
        <ButtonContainer></ButtonContainer>
        <form>
          <input name="id" placeholder="아이디를 입력해주세요"></input>
          <input name="password" placeholder="비밀번호를 입력해주세요"></input>
          <Button width="100%" margin="40px 0 0 0" fontFamily="bold">
            로그인
          </Button>
        </form>
      </FormContainer>
    </div>
  );
};

export default LoginForm;
