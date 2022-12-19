import React, { useState } from "react";
import styled from "styled-components";
import Button from "../elem/Button";
import { postLogin } from "../../core/api/login/queries";
import { useNavigate } from "react-router-dom";

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
  const [inputValue, setInputValue] = useState({
    id: "",
    password: "",
  });
  const navigate = useNavigate();
  const onChangeInputHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const onClickToLoginHandler = (event) => {
    event.preventDefault();
    if (inputValue.id === "" || inputValue.password === "") {
      alert("빈값을 입력해주세요!");
    } else {
      postLogin(inputValue).then((res) => {
        if (res.result === "fail") {
          alert(res.msg);
        } else {
          alert("로그인이 완료 되었습니다");
          navigate("/");
        }
      });
    }
  };

  return (
    <div>
      <FormContainer>
        <ButtonContainer></ButtonContainer>
        <form>
          <input
            //name id로 쓸지 확인
            name="id"
            autoComplete="username"
            value={inputValue.id}
            onChange={onChangeInputHandler}
            placeholder="아이디를 입력해주세요"
          ></input>
          <input
            name="password"
            autoComplete="new-password"
            value={inputValue.password}
            onChange={onChangeInputHandler}
            placeholder="비밀번호를 입력해주세요"
          ></input>
          <Button
            width="100%"
            margin="40px 0 0 0"
            fontFamily="bold"
            onClick={onClickToLoginHandler}
          >
            로그인
          </Button>
        </form>
      </FormContainer>
    </div>
  );
};

export default LoginForm;
