import React from "react";
import styled from "styled-components";
import Button from "../elem/Button";

const Container = styled.div`
  margin: 30px 0;
`;

const mokdata = {
  result: "success",
  msg: "유저의 게시물 조회 성공",
  data: [
    {
      profileImage: "http//~~", //유저 프로필 이미지 주소
      description: "유저 한줄 소개",
      postid: "1",
      createAt: "2022-12-16",
      title: "게시글 제목1",
      tags: ["CS", "SpringBoot"],
      contentSummary: "본문 150자 요약",
      nickname: "jaeHyunKing",
      commentCount: "3",
    },
    {
      profileImage: "http//~~", //유저 프로필 이미지 주소
      description: "유저 한줄 소개",
      postid: "2",
      createAt: "2022-12-16",
      title: "게시글 제목2",
      tags: ["react", "html"],
      contentSummary: "본문 150자 요약",
      nickname: "jaeHyunKing",
      commentCount: "2",
    },
  ],
};
console.log(mokdata.data);

const TagList = () => {
  return (
    <Container>
      <Button fontSize="12px" margin="0 20px 0 0">
        React
      </Button>
      <Button fontSize="12px" margin="0 20px 0 0">
        JavaScript
      </Button>
      <Button fontSize="12px" margin="0 20px 0 0">
        TodayILearn
      </Button>
    </Container>
  );
};

export default TagList;
