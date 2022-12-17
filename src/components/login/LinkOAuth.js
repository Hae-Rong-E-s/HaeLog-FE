import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  div {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background: var(--color-light-gray);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px 10px;
    img {
      width: 25px;
      background-color: transparent;
    }
  }
`;

const LinkOAuth = () => {
  return (
    <Container>
      <div>
        <img src={process.env.PUBLIC_URL + "/imgs/github.svg"} alt="github" />
      </div>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/imgs/kakaotalk.svg"}
          alt="kakaotalk"
        />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + "/imgs/google.svg"} alt="google" />
      </div>
    </Container>
  );
};

export default LinkOAuth;
