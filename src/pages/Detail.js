import React from "react";
import CommentList from "../components/detail/comment/CommentList";
import Post from "../components/detail/post/Post";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AddCommentForm from "../components/detail/comment/AddCommentForm";

const Detail = () => {
  const param = useParams();
  const state = useSelector((state) => state);

  return (
    <div>
      <Post params={param} />
      <AddCommentForm params={param} state={state} />
      <CommentList params={param} state={state.comments} />
    </div>
  );
};

export default Detail;
