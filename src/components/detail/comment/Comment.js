import styled from "styled-components";
import Button from "../../elem/Button";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  __delComment,
  __getComment,
  __putComment,
} from "../../../redux/modules/commentSlice";

const Comment = ({ comment }) => {
  const dispatch = useDispatch();

  const [isEditMode, setIsEditMode] = useState(false);

  const newComment = comment.commentContent;
  const [editComment, setEditComment] = useState(newComment);

  const onChangeCommentHandler = (e) => {
    e.preventDefault();
    setEditComment(e.target.value);
  };

  const onClickEditCommentHandler = (commentid) => {
    if (editComment.trim() === "") {
      alert("공백입니다!");
      return;
    }
    if (!window.confirm("수정 하겠습니까?")) {
      return;
    } else {
      setIsEditMode(!isEditMode);
      const content = { content: editComment };

      if (isEditMode) {
        dispatch(__putComment({ content, commentid }));
      }
    }
  };

  const delHandler = (id) => {
    console.log(id);
    if (!window.confirm("삭제 하시겠습니까?")) {
      return;
    } else {
      dispatch(__delComment(id));
    }
  };

  return (
    <div>
      <StTextArea
        name="comment"
        disabled={!isEditMode}
        backColor={isEditMode ? "#262525" : "transparent"}
        value={editComment}
        onChange={(e) => onChangeCommentHandler(e)}
      ></StTextArea>
      {comment?.myComment && (
        <Stbuttons>
          <Button
            width="90px"
            yar
            fontSize="20px"
            onClick={() => onClickEditCommentHandler(comment.commentId)}
          >
            {isEditMode ? "완료" : "수정"}
          </Button>
          <Button
            width="90px"
            fontSize="20px"
            type="button"
            onClick={() => {
              delHandler(comment.commentId);
            }}
          >
            삭제
          </Button>
        </Stbuttons>
      )}
    </div>
  );
};

export default Comment;

const StTextArea = styled.textarea`
  width: 97%;
  resize: none;
  border: none;
  color: white;
  background-color: ${(props) => props.backColor};
  padding: 20px 20px 30px;
  font-size: 25px;
  margin-bottom: 30px;
`;

const Stbuttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;
