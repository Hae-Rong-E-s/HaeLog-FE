import React from "react";
import AddComment from "../components/detail/comment/AddComments";
import CommentList from "../components/detail/comment/CommentList";
import UserInfoContainer from "../components/detail/comment/UserInfoContainer";
import Post from "../components/detail/post/Post";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  return (
    <div>
      <Post param={id} />
      <UserInfoContainer
        border="none"
        height="170px"
        width="170px"
        profileFontSize="25px"
      />
      <AddComment />
      <CommentList />
    </div>
  );
};

export default Detail;
