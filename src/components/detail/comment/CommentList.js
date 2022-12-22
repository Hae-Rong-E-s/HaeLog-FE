import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __getComment } from "../../../redux/modules/commentSlice";
import Comment from "./Comment";
import UserInfoContainer from "./UserInfoContainer";

const CommentList = ({ params, state }) => {
  const { comments } = state;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getComment(params));
  }, [dispatch, params]);

  return (
    <div>
      {comments &&
        comments?.map((comment) => {
          const { createAt } = comment;
          const parsedCreateAt = createAt;
          return (
            <div key={comment.commentId}>
              <UserInfoContainer
                username={comment.commentMemberNickname}
                createAt={parsedCreateAt.slice(0, 10)}
                width="90px"
                height="90px"
                profileFontSize="18px"
              />
              <Comment params={params} comment={comment}></Comment>
            </div>
          );
        })}
    </div>
  );
};

export default CommentList;
