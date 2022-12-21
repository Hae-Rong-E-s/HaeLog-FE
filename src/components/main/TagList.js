import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "../elem/Button";
import { useDispatch, useSelector } from "react-redux";
import { __getMyTag, __getMyPostTag } from "../../redux/modules/myPageSlice";
import { useParams } from "react-router-dom";

const ContainerTag = styled.div`
  margin: 30px 0;
`;

const TagList = () => {
  const dispatch = useDispatch();
  const param = useParams();
  //console.log("param", param);

  useEffect(() => {
    dispatch(__getMyTag(param.nickname));
  }, [dispatch, param.nickname]);

  const myInfo = useSelector((state) => state.myPage.data);

  const myInfoTag = myInfo.map((row) => row.tags).flat();
  const set = new Set(myInfoTag);
  const uniqueArr = [...set];

  let tagArr = [];
  uniqueArr.map((row, index) => {
    const object = { id: index, tags: row };
    tagArr.push(object);
  });

  //console.log(tagArr);

  const onClickTagHandler = (tag) => {
    dispatch(__getMyPostTag(tag));
  };

  return (
    <ContainerTag>
      {tagArr.map((tag) => (
        <Button
          key={tag.id}
          fontSize="12px"
          margin="0 20px 0 0"
          onClick={() => onClickTagHandler(tag.tags)}
        >
          {tag.tags}
        </Button>
      ))}
    </ContainerTag>
  );
};

export default TagList;
