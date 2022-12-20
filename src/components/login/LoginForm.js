import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "../elem/Button";
// import { postLogin } from "../../core/api/login/queries";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  initializeForm,
  __postLogin,
} from "../../redux/modules/loginSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form } = useSelector(({ login }) => ({
    form: login.login,
  }));
  const result = useSelector(({ login }) => login.result);
  const nickname = useSelector(({ login }) => login.nickname);

  // 컴포넌트가 처음 렌더링 될 때 form 초기화
  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  // input값 수정
  const onChangeInputHandler = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      })
    );
  };

  // 로그인 버튼
  const onClickToLoginHandler = (event) => {
    event.preventDefault();
    if (form.username === "" || form.password === "") {
      alert("빈값을 입력해주세요!");
    } else {
      dispatch(__postLogin(form));
      if (result === "success") {
        navigate(`/@${nickname}`);
      }
    }
  };

  return (
    <div>
      <FormContainer>
        <ButtonContainer></ButtonContainer>
        <form>
          <input
            //name id로 쓸지 확인
            name="loginId"
            autoComplete="username"
            value={form.loginId}
            onChange={onChangeInputHandler}
            placeholder="아이디를 입력해주세요"
          ></input>
          <input
            name="password"
            type="password"
            autoComplete="new-password"
            value={form.password}
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

export default LoginForm;
