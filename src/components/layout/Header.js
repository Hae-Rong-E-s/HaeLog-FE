import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { baseURLApi } from "../../core/api/axios";
import Button from "../elem/Button";

const Header = () => {
  const navigate = useNavigate();
  const { nickname } = useParams();
  const [isMine, setIsMine] = useState(false);

  useEffect(() => {
    const myInfo = async () => {
      try {
        const { data } = await baseURLApi.get(
          `/member/info?nickname=${nickname}`
        );
        setIsMine(data.myInfo);
      } catch (error) {
        console.log(error);
      }
    };
    myInfo();
  }, [nickname]);

  const onClickLogOutHandler = () => {
    localStorage.removeItem("authorization");
  };

  return (
    <Container>
      <MainTitle
        onClick={() => {
          navigate(`/@${nickname}`);
        }}
      >
        <HIcon
          src={process.env.PUBLIC_URL + "/imgs/h-solid.svg"}
          alt="Hicon"
        ></HIcon>
        <div> Tom's Healog</div>
      </MainTitle>
      <div>
        {isMine === "true" ? (
          <>
            <Button
              margin="0 20px"
              onClick={() => {
                onClickLogOutHandler();
              }}
            >
              새 글 작성
            </Button>
            <Button
              margin="0 40px 0 0"
              onClick={() => {
                navigate("login");
              }}
            >
              로그아웃
            </Button>
          </>
        ) : (
          <Button
            margin="0 40px 0 0"
            onClick={() => {
              navigate("login");
            }}
          >
            로그인
          </Button>
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 30px 50px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainTitle = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  div {
    margin-left: 15px;
  }
`;

const HIcon = styled.img`
  width: 30px;
  background-color: transparent;
  filter: invert(15%) sepia(28%) saturate(6934%) hue-rotate(351deg)
    brightness(99%) contrast(90%);
`;

export default Header;
