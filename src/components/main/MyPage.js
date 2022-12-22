import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "../elem/Button";
import { useDispatch, useSelector } from "react-redux";
import { __getMyPage, __getMyPostTag } from "../../redux/modules/myPageSlice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import MarkdownRender from "../MarkdownRender";

const ContainerTag = styled.div`
  margin: 30px 0;
`;

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

const TagList = () => {
  const dispatch = useDispatch();
  const param = useParams();
  //console.log("param", param);

  useEffect(() => {
    dispatch(__getMyPage(param.nickname));
  }, [dispatch]);

  const myPageInfo = useSelector((state) => state.myPage);
  const { data: myInfo, tags: myTags } = myPageInfo;
  console.log("myInfo", myInfo);

  const onClickTagHandler = (nickname, tag) => {
    //console.log({ nickname, tag });
    dispatch(__getMyPostTag({ nickname, tag }), [dispatch]);
  };
  console.log(myInfo[0].contentSummary);

  return (
    <>
      <ContainerTag>
        {param.nickname &&
          myTags.map((tag) => (
            <Button
              key={tag.id}
              fontSize="12px"
              margin="0 20px 0 0"
              onClick={() => onClickTagHandler(param.nickname, tag.tags)}
            >
              {tag.tags}
            </Button>
          ))}
      </ContainerTag>
      <Container>
        {/* <img
      src="https://velog.velcdn.com/images/jejupalette/post/7f674bf9-5f01-4091-ba22-85c6255da53c/image.png"
      alt="contentImg"
    ></img> */}
        {myInfo.length !== 0 ? (
          myInfo.map((myInfo) => (
            <StDiv key={myInfo.postid}>
              <StLink to={`/@${param.nickname}/${myInfo.postid}`}>
                <h3>{myInfo.title}</h3>
              </StLink>
              <MarkdownRender
                markdown={myInfo.contentSummary}
                overflow="none"
              ></MarkdownRender>
            </StDiv>
          ))
        ) : (
          <h3>첫 글쓰기를 시작하세요</h3>
        )}
      </Container>
    </>
  );
};

export default TagList;
