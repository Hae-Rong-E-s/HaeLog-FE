import React from "react";
import styled from "styled-components";
import Button from "../elem/Button";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __putEditPost, __postPost } from "../../redux/modules/editPostSlice";

const Footer = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form } = useSelector(({ editPost }) => ({
    form: editPost.editPost,
  }));
  // console.log("form", form);
  // const putResult = useSelector(({ login }) => login.putResult);
  // const postResult = useSelector(({ login }) => login.postResult);
  // const nickname = useSelector(({ login }) => login.nickname);

  const editForm = {
    title: form.title,
    tags: form.tags,
    content: form.content,
  };

  console.log("editForm", editForm);
  // 버튼으로 추가 및 수정하기
  const onClickHandler = async () => {
    if (form.title === "" || form.content === "") {
      alert("값을 입력해주세요");
    } else {
      // 수정하기
      if (postId) {
        console.log("postId", "editForm", postId, editForm);
        dispatch(__putEditPost({ postId, editForm })).then((res) => {
          // console.log(res.payload);
          navigate(`/@${res.payload.data.nickname}/${res.payload.data.postid}`);
        });
        // 추가하기
      } else {
        dispatch(__postPost(editForm)).then((res) => {
          // console.log(res.payload);
          // console.log(res.payload.data.postid);
          // console.log(res.payload.data.nickname);
          navigate(`/@${res.payload.data.nickname}/${res.payload.data.postid}`);
        });
      }
    }
  };
  return (
    <Container>
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        ◀︎ 나가기
      </div>
      <Button type="button" onClick={onClickHandler}>
        {postId ? "수정하기" : "출간하기"}
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-light-gray);
  padding: 25px 20px;
  div {
    background-color: transparent;
  }
`;

export default Footer;
