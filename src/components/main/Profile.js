import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-light-gray);
  img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
  }
  div {
    margin-left: 10px;
    &:nth-child(1) {
      font-size: 25px;
      margin-bottom: 5px;
    }
  }
`;

const Profile = () => {
  return (
    <Container>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEAm6C-SVkvqJQ4_eMz0_KcL3wTuKHo-wYQ&usqp=CAU"
        alt="profileimg"
      ></img>
      <div>
        <div>tom</div>
        <div>나의 코딩 블로그</div>
      </div>
    </Container>
  );
};

export default Profile;
