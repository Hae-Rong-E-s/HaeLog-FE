import styled from "styled-components";
import Button from "../../elem/Button";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  __delComment,
  __getComment,
  __putComment,
} from "../../../redux/modules/commentSlice";
import { useSelector } from "react-redux";

const EditComment = ({ comment }) => {
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector((state) => state.comments);

  // textarea에 입력할 수 있도록 on, off를 관리하는 상태
  const [isEditMode, setIsEditMode] = useState(false);

  /** 코멘트 안의 업데이트될 새로운 댓글 */
  const newComment = comment.commentContent;
  const [editComment, setEditComment] = useState(newComment);

  const onChangeCommentHandler = (e) => {
    e.preventDefault();
    setEditComment(e.target.value);
  };
  /** 수정 버튼클릭 로직*/
  const onClickEditComment = (commentid) => {
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

  if (isLoading) {
    return (
      <div>
        <h1>🤩...댓글 불러오는중...🤩</h1>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <h1>😭...Eroor...😭</h1>
      </div>
    );
  }

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
            onClick={() => onClickEditComment(comment.commentId)}
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

export default EditComment;

const StTextArea = styled.textarea`
  width: 97%;

  resize: none;
  border-radius: 4px;
  border: none;
  color: white;
  background-color: ${(props) => props.backColor};
  padding: 20px 20px 30px;
  font-size: 25px;
  margin-bottom: 30px;
`;

const Stbuttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 30px;
`;
