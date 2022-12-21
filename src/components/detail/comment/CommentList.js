import EditComment from "./EditComment";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __getComment } from "../../../redux/modules/commentSlice";
import UserInfoContainer from "./UserInfoContainer";

const CommentList = ({ params, state }) => {
  const { isLoading, error, comments } = state;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getComment(params));
  }, [dispatch, params]);

  return (
    <div>
      {comments &&
        comments.map((comment) => {
          // const { createAt } = comment;
          // const parsedCreateAt = createAt.slice(1, 10);
          return (
            <div key={comment.commentId}>
              <UserInfoContainer
                username={comment.commentMemberNickname}
                createAt={comment.createAt}
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
