import styled from "styled-components";
import Button from "../../elem/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  __getComment,
  __postComment,
} from "../../../redux/modules/commentSlice";

const AddComments = () => {
  const dispatch = useDispatch();

  const param = useParams();
  const commentId = param.id; // url path에 입력된 값을 가져오기

  // Network 요청에 대한 댓글 상태관리
  const [comment, setComment] = useState("");

  // Textarea 상태관리
  const onChangeHandler = (e) => {
    // console.log(e.target.value)  // console.log("e.target.name: ", e.target.name); // setAddComment({ ...addComment, [e.target.name]: e.target.value });  -> commentContent : e.target.value
    const { value } = e.target;
    setComment(value);
  };

  // POST
  const onClickAddHandler = (e) => {
    e.preventDefault();
    if (comment.trim() === "") {
      alert("댓글을 입력해주세요");
      return;
    }
    if (!window.confirm("추가 하시겠습니까?")) {
      return;
    } else {
      dispatch(__postComment({ comment, commentId })); //
      // dispatch(__getComment(id));
      setComment("");
    }
  };

  return (
    <StCommentFormBox>
      <div>5개의 댓글</div>
      <StCommentForm>
        <StTextArea
          required
          type="text"
          value={comment}
          onChange={onChangeHandler}
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
  );
};

export default AddComments;

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
  width: 100%;
  min-height: 150px;
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
