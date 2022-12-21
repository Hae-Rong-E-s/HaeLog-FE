import EditComment from "./EditComment";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __getComment } from "../../../redux/modules/commentSlice";
import UserInfoContainer from "./UserInfoContainer";
// 댓글 수정 부분
//1. 내가 작성한 댓글에만 버튼이 노출되도록 -> 백으로 부터 boolen 데이터를 받기로했다 -> true면 버튼이 노출되도록 false 면 버튼 노출 X
//2. 댓글 수정 버튼 클릭시 -> 해당 댓글의 textarea 활성화 (textarea 활성화 비활성화 상태 관리 하나 필요 ) -> textarea에 입력하는 값 onchange event.target.value 로 받아와서
// -> 받아온 값을 새로운 상태에 넣어서 patch 보냄 (새로 수정한 comment에 대한 상태 관리 하나 필요 )
// 그럼 이 과정에서 어떠한 로직이 필요하냐? -> 수정하려는 그 코멘트와( onChange로  id 값 가져와서  ) useSeletor로 comments들을 싹 가져와서 그중에 수정하려는 코멘트의 id 값을 찾아서
// {변경후} >

const CommentList = ({ params, state }) => {
  //commentSlice Store에 저장되있는 값들
  const { isLoading, error, comments } = state;

  console.log(comments);
  // const comments = "";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getComment(params));
  }, [dispatch, params]);

  return (
    <div>
      {comments &&
        comments.map((comment) => {
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
