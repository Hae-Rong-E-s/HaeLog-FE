import React from "react";
import styled from "styled-components";
import Button from "../elem/Button";

const Container = styled.div`
  width: 400px;
  color: white;
  h1 {
    margin-bottom: 10px;
    font-family: bold;
  }
  h3 {
    margin-bottom: 20px;
    font-size: 16px;
    font-family: light;
  }
  form {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      input {
        flex: 1;
      }
    }
    label {
      display: inline-block;
      margin-top: 30px;
      font-weight: 100;
    }
    input {
      flex: 1;
      padding: 10px 0;
      background: none;
      border-left-width: 0;
      border-right-width: 0;
      border-top-width: 0;
      border-bottom: solid 2px white;
      color: white;
    }
  }
`;
const SignInForm = () => {
  return (
    <Container>
      <h1>환영합니다!</h1>
      <h3>기본 회원 정보를 등록해주세요</h3>
      <form>
        <label for="id">아이디</label>
        <div>
          <input id="id"></input>
          <Button margin="0 0 0 15px" fontFamily="bold">
            중복체크
          </Button>
        </div>
        <label for="password">비밀번호</label>
        <input id="password"></input>

        <label for="password">비밀번호 확인</label>

        <input id="password"></input>

        <label for="password">닉네임</label>

        <input id="password"></input>

        <label for="password">한줄 소개</label>

        <input id="password"></input>
      </form>
      <Button width="100%" margin="10px 5px 0 0" fontFamily="bold">
        회원가입
      </Button>
    </Container>
  );
};

export default SignInForm;
