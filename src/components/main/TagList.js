import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "../elem/Button";
import { useDispatch, useSelector } from "react-redux";
import { __getMyPage, __getMyPagTag } from "../../redux/modules/myPageSlice";
import { useParams } from "react-router-dom";

const Container = styled.div`
  margin: 30px 0;
`;

const TagList = () => {
  const dispatch = useDispatch();
  const param = useParams();
  //console.log("param", param);

  useEffect(() => {
    dispatch(__getMyPage(param.nickname));
  }, [dispatch, param.nickname]);

  const myInfo = useSelector((state) => state.myPage.data);

  const myInfoTag = myInfo.map((row) => row.tags).flat(); //tag의 키 값만 가져오기
  const set = new Set(myInfoTag);
  const uniqueArr = [...set];

  let tagArr = [];
  uniqueArr.map((row, index) => {
    const object = { id: index, tags: row };
    tagArr.push(object);
  });

  //console.log(tagArr);

  // const onClicCategorykHandler = (tag) => {
  //   dispatch(__getMyPostTag(tag));
  // };

  return (
    <Container>
      {tagArr.map((tag) => (
        <Button
          key={tag.id}
          fontSize="12px"
          margin="0 20px 0 0"
          //onClick={() => onClickTagHandler(tag.tags)}
        >
          {tag.tags}
        </Button>
      ))}
      {/* <Button fontSize="12px" margin="0 20px 0 0">
        React
      </Button>
      <Button fontSize="12px" margin="0 20px 0 0">
        JavaScript
      </Button> */}
    </Container>
  );
};

export default TagList;
