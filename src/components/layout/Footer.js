import React from "react";
import styled from "styled-components";
import Button from "../elem/Button";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-light-gray);
  width: 100vw;
  padding: 20px;
  div {
    background-color: transparent;
  }
`;

const Footer = ({ onClickHandler, postid }) => {
  return (
    <Container>
      <div>◀︎ 나가기</div>
      <Button type="button" onClick={onClickHandler}>
        {postid ? "수정하기" : "출간하기"}
      </Button>
    </Container>
  );
};

export default Footer;
