import React, { useState } from "react";
import styled from "styled-components";
import Button from "../elem/Button";
// 리덕스
import { __postSignUp } from "../../redux/modules/signUpSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  postCheckUsername,
  postCheckNickname,
} from "../../core/api/signUp/queries";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { result, msg } = useSelector((state) => state);
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
    passwordCheck: "",
    nickname: "",
    desc: "",
  });
  const [isValid, setIsValid] = useState({
    usernameValid: false,
    nicknameVaild: false,
  });

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const onClickCheckUsername = (event) => {
    event.preventDefault();
    postCheckUsername(inputValue.username).then((res) => {
      if (res.result === "fail") {
        alert(res.msg);
        setInputValue({ ...inputValue, username: "" });
        // useRef 활용해서 focus 해주기
      } else {
        alert("사용 가능한 아이디입니다");
        setIsValid({ ...isValid, usernameValid: true });
      }
    });
  };
  const onClickCheckNicknameId = (event) => {
    event.preventDefault();
    postCheckNickname(inputValue.nickname).then((res) => {
      if (res.result === "fail") {
        alert(res.msg);
        setInputValue({ ...inputValue, nickname: "" });
        // useRef 활용해서 focus 해주기
      } else {
        alert("사용 가능한 닉네임입니다");
        setIsValid({ ...isValid, nicknameVaild: true });
      }
    });
  };

  const onClickSignUpHandler = (event) => {
    event.preventDefault();
    if (
      inputValue.username === "" ||
      inputValue.password === "" ||
      inputValue.passwordCheck === "" ||
      inputValue.nickname === "" ||
      inputValue.desc === ""
    ) {
      alert("빈값을 입력해주세요!");
    } else if (!isValid.usernameValid) {
      alert("id 중복을 확인해주세요");
    } else if (!isValid.nicknameVaild) {
      alert("닉네임 중복을 확인해주세요");
    } else {
      dispatch(__postSignUp(inputValue), [dispatch]);
      if (result === "success") {
        alert(msg);
      }
    }
  };

  return (
    <Container>
      <h1>환영합니다!</h1>
      <h3>기본 회원 정보를 등록해주세요</h3>
      <form>
        <label htmlFor="username">아이디</label>
        <div>
          <input
            name="username"
            value={inputValue.username}
            id="username"
            onChange={onChangeInputHandler}
            placeholder="영문 대문자, 소문자, 숫자 포함"
          ></input>
          <Button
            margin="0 0 0 15px"
            fontFamily="bold"
            onClick={onClickCheckUsername}
          >
            중복체크
          </Button>
        </div>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          name="password"
          value={inputValue.password}
          id="password"
          onChange={onChangeInputHandler}
          placeholder="영문 대문자, 소문자, 숫자 포함"
        ></input>
        <label htmlFor="passwordCheck">비밀번호 확인</label>
        <input
          type="password"
          name="passwordCheck"
          value={inputValue.passwordCheck}
          id="passwordCheck"
          onChange={onChangeInputHandler}
        ></input>
        <p>
          {inputValue.password !== inputValue.passwordCheck &&
            inputValue.passwordCheck !== "" &&
            "비밀번호와 일치하지 않습니다"}
        </p>
        <label htmlFor="nickname">닉네임</label>
        <div>
          <input
            name="nickname"
            value={inputValue.nickname}
            id="nickname"
            onChange={onChangeInputHandler}
          ></input>
          <Button
            margin="0 0 0 15px"
            fontFamily="bold"
            onClick={onClickCheckNicknameId}
          >
            중복체크
          </Button>
        </div>
        <label htmlFor="desc">한줄 소개</label>
        <input
          name="desc"
          value={inputValue.desc}
          id="desc"
          onChange={onChangeInputHandler}
        ></input>
      </form>
      <Button
        width="100%"
        margin="10px 5px 0 0"
        fontFamily="bold"
        fontSize="16px"
        onClick={onClickSignUpHandler}
      >
        회원가입
      </Button>
    </Container>
  );
};

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
    p {
      color: red;
      margin-top: 5px;
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

export default SignUpForm;
