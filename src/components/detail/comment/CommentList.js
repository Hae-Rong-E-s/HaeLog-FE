import EditComment from "./EditComment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getComment } from "../../../redux/modules/commentSlice";
import UserInfoContainer from "./UserInfoContainer";

const CommentList = ({ params, state }) => {
  const { isLoading, error, comments } = state;

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(__getComment(params));
    }, 10);
  }, [dispatch, params]);

  return (
    <div>
      {comments &&
        comments?.map((comment) => {
          const { createAt } = comment;
          const parsedCreateAt = createAt.slice(0, 10);
          return (
            <div key={comment.commentId}>
              <UserInfoContainer
                username={comment.commentMemberNickname}
                createAt={parsedCreateAt}
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
