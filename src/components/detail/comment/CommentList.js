import styled from "styled-components";
import UserInfoContainer from "./UserInfoContainer";
import Button from "../../elem/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getComment } from "../../../redux/modules/commentSlice";

const CommentList = ({ params, state }) => {
  const dispatch = useDispatch();

  const { isLoading, error, comments } = state;
  useEffect(() => {
    dispatch(__getComment(params));
  }, [dispatch, params]);

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
      {comments.map((comment) => {
        return (
          <div>
            <UserInfoContainer
              username={comment.username}
              createAt={comment.createAt}
              key={comment.id}
              width="90px"
              height="90px"
              profileFontSize="18px"
              textArea={<StTextArea />}
              editButtons={editButtons.true} // 나중에.true => comments.유저확인
            />
          </div>
        );
      })}
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
