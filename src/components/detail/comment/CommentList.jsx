import styled from "styled-components";
import UserInfoContainer from "./UserInfoContainer";
import Button from "../../elem/Button";

const CommentList = () => {
  const editButtons = {
    true: (
      <Stbuttons>
        <Button>수정</Button>
        <Button>삭제</Button>
      </Stbuttons>
    ),
    false: null,
  };

  return (
    <div>
      <UserInfoContainer
        width="70px"
        profileFontSize="12px"
        textArea={
          <StTextArea
            placeholder="수정 버튼 클릭에 따른 textarea배경화면 활성화 ,비활성화, userid
            matching 에따른 버튼 활성화 비활성화"
          ></StTextArea>
        }
        editButtons={editButtons.true} // 나중에.true => comments.유저확인
      />
      <UserInfoContainer
        width="70px"
        profileFontSize="12px"
        textArea={<StTextArea />}
      />
    </div>
  );
};

export default CommentList;

const StCommentList = styled.div``;

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
  margin-bottom: 20px;
`;

const Stbuttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 30px;
`;
