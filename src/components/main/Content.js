import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getMyPage } from "../../redux/modules/myPageSlice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 50px 0;

  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    margin: 10px 0;
  }
  h3 {
    margin: 10px 0;
  }
  p {
    font-size: 14px;
    font-family: "light";
  }
`;

const StDiv = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--color-light-gray);
  &:first-child {
    padding-top: 0px;
  }
`;

const StLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Content = () => {
  const dispatch = useDispatch();
  const param = useParams();
  //console.log("param", param);

  useEffect(() => {
    dispatch(__getMyPage(param.nickname));
  }, [dispatch, param.nickname]);

  const myInfos = useSelector((state) => state.myPage.data);
  console.log("myInfos", myInfos);

  return (
    <Container>
      {/* <img
        src="https://velog.velcdn.com/images/jejupalette/post/7f674bf9-5f01-4091-ba22-85c6255da53c/image.png"
        alt="contentImg"
      ></img> */}
      {myInfos.map((myInfo) => (
        <StDiv key={myInfo.postId}>
          <StLink to={`/@${param.nickname}/&postid=${myInfo.postId}`}>
            <h3>{myInfo.title}</h3>
          </StLink>
          {/* <p>{myInfo.contentSummary}</p> */}
          <p>
            리덕스 공부 리덕스의 전반적인 형태와 흐름을 집중적으로
            공부하였습니다. 틀을 먼저 이해하고, 흐름을 이해하려 노력하였습니다.
            store, action value, action creator, reducer등 생소한 개념을
            이해하고 공부하는데 집중하였습니다.
          </p>
        </StDiv>
      ))}
      <StDiv>
        <h3>[22.12.05 - 12.11]Weekly I Learned</h3>
        <p>
          리덕스 공부 리덕스의 전반적인 형태와 흐름을 집중적으로 공부하였습니다.
          틀을 먼저 이해하고, 흐름을 이해하려 노력하였습니다. store, action
          value, action creator, reducer등 생소한 개념을 이해하고 공부하는데
          집중하였습니다.
        </p>
      </StDiv>
    </Container>
  );
};

export default Content;
