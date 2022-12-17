import styled from "styled-components";
import Button from "../../elem/Button";

const AddComments = () => {
  return (
    <StCommentFormBox>
      <div>5개의 댓글</div>
      <StCommentForm>
        <StTextArea></StTextArea>
      </StCommentForm>
      <StButtonBox>
        <Button>댓글 작성</Button>
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
