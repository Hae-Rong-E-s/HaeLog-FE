import EditComment from "./EditComment";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __getComment } from "../../../redux/modules/commentSlice";
import UserInfoContainer from "./UserInfoContainer";

const CommentList = ({ params, state }) => {
  //commentSlice Store에 저장되있는 값들
  const { isLoading, error, comments } = state;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getComment(params));
  }, [dispatch, params]);
  console.log(comments);
  return (
    <div>
      {comments &&
        comments.map((comment) => {
          return (
            <div key={comment.commentId}>
              <UserInfoContainer
                username={comment.commentMemberNickname}
                createAt={comment.createAt.slice(0, 10)}
                width="90px"
                height="90px"
                profileFontSize="18px"
              />
              <EditComment params={params} comment={comment}></EditComment>
            </div>
          );
        })}
    </div>
  );
};

export default CommentList;
