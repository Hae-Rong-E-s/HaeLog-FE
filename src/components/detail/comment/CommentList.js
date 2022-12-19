import styled from "styled-components";
import UserInfoContainer from "./UserInfoContainer";
import Button from "../../elem/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getComment } from "../../../redux/modules/commentSlice";
import { useParams } from "react-router-dom";

const CommentList = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const commentId = param.id;

  // const { isLoading, error, comments } = useSelector((state) => state.comments);
  // console.log(isLoading);
  // console.log(error);
  // console.log(comments);
  const comments = useSelector((state) => state.comments);
  console.log(comments);

  useEffect(() => {
    dispatch(__getComment(commentId));
  }, [dispatch, commentId]);

  const editButtons = {
    true: (
      <Stbuttons>
        <Button width="90px" fontSize="20px">
          수정
        </Button>
        <Button width="90px" fontSize="20px">
          삭제
        </Button>
      </Stbuttons>
    ),
    false: null,
  };

  return (
    <div>
      <UserInfoContainer
        width="90px"
        height="90px"
        profileFontSize="18px"
        textArea={<StTextArea />}
        editButtons={editButtons.true} // 나중에.true => comments.유저확인
      />
    </div>
  );
};

export default CommentList;

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
  margin-bottom: 30px;
`;

const Stbuttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 30px;
`;

{
  /* <UserInfoContainer
width="90px"
height="90px"
profileFontSize="18px"
textArea={<StTextArea />}
/>
<UserInfoContainer
width="90px"
height="90px"
profileFontSize="18px"
textArea={<StTextArea />}
/> */
}
