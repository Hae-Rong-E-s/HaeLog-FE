import React from "react";
import AddComment from "../components/detail/comment/AddComments";
import CommentList from "../components/detail/comment/CommentList";
import UserInfoContainer from "../components/detail/comment/UserInfoContainer";
import Post from "../components/detail/post/Post";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = () => {
  const param = useParams();
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div>
      <Post params={param} />
      <AddComment params={param} state={state} />
      <CommentList params={param} state={state.comments} />
    </div>
  );
};

export default Detail;
