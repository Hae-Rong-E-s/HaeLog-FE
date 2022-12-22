import styled from "styled-components";
import Button from "../../elem/Button";
import UserInfoContainer from "./UserInfoContainer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  __getComment,
  __postComment,
} from "../../../redux/modules/commentSlice";

const AddCommentForm = ({ params, state }) => {
  const dispatch = useDispatch();

  const postId = params.postId;

  const [addComment, setAddComment] = useState({
    content: "",
  });

  const onChangeTextareaHandler = (e) => {
    setAddComment({ content: e.target.value });
  };

  const onClickAddHandler = (e) => {
    e.preventDefault();
    if (addComment.content.trim() === "") {
      alert("댓글을 입력해주세요");
      return;
    }
    if (!window.confirm("추가 하시겠습니까?")) {
      return;
    } else {
      dispatch(__postComment({ addComment, postId }));
      setAddComment({ content: "" });
    }
  };

  return (
    <>
      <UserInfoContainer
        height="170px"
        width="170px"
        profileFontSize="25px"
        createAt={state.comments?.describtion}
        username={state.comments?.postMemberNickname}
      />
      <StCommentFormBox>
        <StCommentForm>
          <StTextArea
            required
            type="text"
            value={addComment?.content}
            onChange={onChangeTextareaHandler}
          ></StTextArea>
        </StCommentForm>
        <StButtonBox>
          <Button
            width="120px"
            fontSize="20px"
            type="button"
            onClick={onClickAddHandler}
          >
            댓글 작성
          </Button>
        </StButtonBox>
      </StCommentFormBox>
    </>
  );
};

export default AddCommentForm;

const StCommentFormBox = styled.div`
  margin: 80px 0 50px 0;
  font-size: 30px;
  div {
    color: white;
  }
`;

const StCommentForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  margin: 30px 0px 50px 0px;
  div {
    display: flex;
    justify-content: flex-end;
  }
`;
const StTextArea = styled.textarea`
  width: 97%;
  resize: none;
  border-radius: 4px;
  border: 1px solid #2a2a2a;
  color: white;
  background-color: #262525;
  padding: 20px 20px 30px;
  font-size: 25px;
`;

const StButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;
