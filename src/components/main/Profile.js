import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getInfo } from "../../redux/modules/myPageSlice";
import { useParams } from "react-router-dom";

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
      font-family: "bold";
    }
  }
`;

const Profile = () => {
  const dispatch = useDispatch();
  const param = useParams();
  //console.log("param", param);

  useEffect(() => {
    //dispatch(__getInfo(param));
    dispatch(__getInfo(param.nickname));
  }, [dispatch]);

  const myInfoDes = useSelector((state) => state.myPage.description);
  //console.log("myInfoDes", myInfoDes);

  return (
    <Container>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEAm6C-SVkvqJQ4_eMz0_KcL3wTuKHo-wYQ&usqp=CAU"
        alt="profileimg"
      ></img>
      <div>
        <div>{param.nickname}</div>
        <div>{myInfoDes.description}</div>
      </div>
    </Container>
  );
};

export default Profile;
