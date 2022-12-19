// 훅
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import uuid from "react-uuid";
import { serverUrl } from "../../core/api";
// 리덕스
import { __getEditPost } from "../../redux/modules/editPostSlice";
import { useDispatch, useSelector } from "react-redux";
// 디자인
import styled from "styled-components";
import MarkdownRender from "../MarkdownRender";

//-- 디자인 --//
const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 20px;
  padding: 0px 15px;
`;

const TitleContainer = styled.div`
  padding: 15px 15px 15px 0;
  input {
    color: white;
    width: 100%;
    border: none;
    font-size: 30px;
    font-family: "bold";
    padding-bottom: 10px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: gray;
    }
  }
`;

const TagContainer = styled.div`
  display: flex;
  padding: 18px 15px 15px 0;
  span {
    color: gray;
    font-size: 18px;
    font-weight: 800;
  }
  input {
    color: var(--color-point2);
    flex: 1;
    border: none;
    font-size: 18px;
    font-weight: 800;
    &::placeholder {
      color: gray;
    }
  }
`;

const ContentContainer = styled.div`
  padding: 0px 25px 25px 0;
  border: 2px solid var(--color-point2);
  border-radius: 10px;
  margin-top: 15px;
  textarea {
    color: gray;
    width: 100%;
    border: none;
    font-size: 18px;
    font-weight: 800;
    resize: none;
    min-height: 30vh;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: gray;
    }
  }
`;

//-- JSX --//
const AddPostForm = () => {
  const { postid } = useParams();
  const dispatch = useDispatch();
  const { editPost, error } = useSelector((state) => state.editPost);
  const [input, setInput] = useState({
    title: "",
    content: "",
    category: "",
  });
  const navigate = useNavigate();
  // date 가져오기
  const date = new window.Date();
  const selectDate = date.toLocaleDateString("ko-kr");

  // 수정 내용 받아오기
  useEffect(() => {
    if (postid) {
      dispatch(__getEditPost(postid), [dispatch]);
      setInput({
        title: editPost.title,
        content: editPost.content,
        category: editPost.category,
      });
    }
  }, [dispatch, postid, editPost.title, editPost.content, editPost.category]);

  // 버튼으로 추가 및 수정하기
  const onClickHandler = async () => {
    const postInput = {
      ...input,
      date: selectDate,
      id: uuid(),
    };
    if (input.title === "" || input.content === "") {
      alert("값을 입력해주세요");
    } else {
      // 수정하기
      if (postid) {
        try {
          await axios.patch(`${serverUrl}/posts/${postid}`, input);
          setInput({
            title: "",
            content: "",
            category: "",
          });
          navigate(`/post/${postid}`);
        } catch (error) {
          console.log(error);
        }
        // 추가하기
      } else {
        try {
          await axios.post(`${serverUrl}/posts`, postInput);
          setInput({
            title: "",
            content: "",
            category: "",
          });
          navigate(`/post/${postInput.id}`);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  // 인풋 state 가져오기
  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  return (
    <div>
      <ButtonContainer></ButtonContainer>
      <TitleContainer>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          name="title"
          value={input.title}
          onChange={onChangeHandler}
        />
      </TitleContainer>
      <hr />
      <TagContainer>
        <span>#</span>
        <input
          type="text"
          placeholder="태그를 입력하세요"
          name="category"
          value={input.category}
          onChange={onChangeHandler}
        />
      </TagContainer>
      <ContentContainer>
        <textarea
          type="text"
          placeholder="마크다운으로 하고 싶은 이야기를 적어보세요"
          name="content"
          value={input.content}
          onChange={onChangeHandler}
        />
      </ContentContainer>
      <hr />
      <ContentContainer>
        <MarkdownRender
          markdown={
            input.content === ""
              ? "마크다운이 변환되어 보여집니다"
              : input.content
          }
          color={input.color === "" ? "gray" : "white"}
        />
      </ContentContainer>
    </div>
  );
};

export default AddPostForm;
