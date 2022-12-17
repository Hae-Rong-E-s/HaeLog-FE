import React from "react";
import AddComment from "../components/detail/comment/AddComments";
import CommentList from "../components/detail/comment/CommentList";
import UserInfoContainer from "../components/detail/comment/UserInfoContainer";

const Detail = () => {
  return (
    <div>
      <UserInfoContainer
        border="none"
        height="1px"
        width="170px"
        profileFontSize="25px"
      />
      <AddComment />
      <CommentList />
    </div>
  );
};

export default Detail;
