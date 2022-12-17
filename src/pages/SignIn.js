import React from "react";
import styled from "styled-components";
import Button from "../components/elem/Button";

const Container = styled.div`
  margin: 150px;
  color: white;
  h1 {
    margin-bottom: 10px;
  }
  h3 {
    margin-bottom: 20px;
    font-size: 16px;
  }
  form {
    margin-bottom: 40px;
    label {
      display: inline-block;
      margin-top: 15px;
      font-weight: 100;
    }
    input {
      width: 280px;
      padding: 10px 20px;
      background: none;
      border-left-width: 0;
      border-right-width: 0;
      border-top-width: 0;
      border-bottom: solid 2px white;
      margin-top: 10px;
      margin-right: 10px;
    }
  }
`;

const SignIn = () => {
  return (
    <Container>
      <h1>환영합니다!</h1>
      <h3>기본 회원 정보를 등록해주세요</h3>
      <form>
        <label for="id">아이디</label>
        <br />
        <input id="id"></input>
        <Button>중복체크</Button> <br />
        <label for="password">비밀번호</label>
        <br />
        <input id="password"></input>
        <br />
        <label for="password">비밀번호 확인</label>
        <br />
        <input id="password"></input>
        <br />
        <label for="password">닉네임</label>
        <br />
        <input id="password"></input>
        <br />
        <label for="password">한줄 소개</label>
        <br />
        <input id="password"></input>
      </form>
      <Button>취소</Button> <Button>회원가입</Button>
    </Container>
  );
};

export default SignIn;
