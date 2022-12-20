import styled from "styled-components";
import Button from "../../elem/Button";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  __delComment,
  __getComment,
  __patchComment,
} from "../../../redux/modules/commentSlice";

const EditComment = ({ comment, params }) => {
  // dispatch 선언
  const dispatch = useDispatch();
  // 코멘트 안의 업데이트될 새로운 댓글
  const newComment = comment.commentContent;
  //console.log(params) => nickname, 그 게시물의 id 값

  // textarea에 입력할 수 있도록 on, off를 관리하는 상태
  const [isEditMode, setIsEditMode] = useState(true);

  //
  const [editComments, setEditComments] = useState(newComment);

  console.log(params);
  console.log(comment);

  const onChangeCommentHandler = (e) => {
    e.preventDefault();
    // const commentid =
  };

  const onClickEditComment = (id, i) => {
    console.log(id);
    setIsEditMode(!isEditMode);
    console.log(isEditMode);
    dispatch(__patchComment({ newComment, id }));
  };

  const delHandler = (id) => {
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
        disabled={isEditMode}
        backColor={isEditMode ? "transparent" : "#262525"}
        value={comment.reply}
        onChange={(e) => onChangeCommentHandler(e)}
      ></StTextArea>
      <Stbuttons>
        <Button
          width="90px"
          fontSize="20px"
          onClick={() => onClickEditComment(comment.id)}
        >
          수정
        </Button>
        <Button
          width="90px"
          fontSize="20px"
          type="button"
          onClick={() => {
            delHandler(comment.id);
          }}
        >
          삭제
        </Button>
      </Stbuttons>
    </div>
  );
};

export default EditComment;

const StTextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
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
