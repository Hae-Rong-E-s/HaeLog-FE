// 훅
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// 리덕스
import {
  changeField,
  initializeForm,
  __getEditPost,
} from "../../redux/modules/editPostSlice";
import { useDispatch, useSelector } from "react-redux";
// 디자인
import styled from "styled-components";
import MarkdownRender from "../MarkdownRender";

//-- JSX --//
const AddPostForm = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { form } = useSelector(({ editPost }) => ({
    form: editPost.editPost,
  }));

  // 수정 내용 받아오기
  useEffect(() => {
    if (postId) {
      dispatch(__getEditPost(postId));
    } else {
      dispatch(initializeForm("editPost"));
    }
  }, [dispatch, postId]);

  // 인풋 state 가져오기
  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(
      changeField({
        form: "editPost",
        key: name,
        value,
      })
    );
  };

  // 테그 인풋 state 가져오기
  const onChangeTagHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    dispatch(
      changeField({
        form: "editPost",
        key: name,
        value,
      })
    );
  };

  //-- 엔터칠 때 태그 리스트로 들어가게 하기 --//
  const onKeyUp = (event) => {
    if (event.target.value.length !== 0 && event.key === "Enter") {
      submitTagItem();
    }
  };

  const submitTagItem = () => {
    let updateTagList = [...form.tags];
    updateTagList.push(form.tag);
    dispatch(
      changeField({
        form: "editPost",
        key: "tags",
        value: updateTagList,
      })
    );
    dispatch(
      changeField({
        form: "editPost",
        key: "tag",
        value: "",
      })
    );
  };

  const deleteTagItem = (event) => {
    const deleteTagItem = event.target.innerText;
    const filteredTagList = form.tags.filter(
      (tagItem) => tagItem !== deleteTagItem
    );
    dispatch(
      changeField({
        form: "editPost",
        key: "tags",
        value: filteredTagList,
      })
    );
  };

  return (
    <div>
      <ButtonContainer></ButtonContainer>
      <TitleContainer>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          name="title"
          value={form.title}
          onChange={onChangeHandler}
        />
      </TitleContainer>
      <hr />
      <TagContainer>
        {form.tags?.map((tagItem, index) => {
          return (
            <button key={index} onClick={deleteTagItem}>
              {tagItem}
            </button>
          );
        })}
        <input
          type="text"
          placeholder="#태그를 입력하세요"
          name="tag"
          value={form?.tag}
          onChange={onChangeTagHandler}
          onKeyUp={onKeyUp}
        />
      </TagContainer>
      <ContentContainer>
        <textarea
          type="text"
          placeholder="마크다운으로 하고 싶은 이야기를 적어보세요"
          name="content"
          value={form?.content}
          onChange={onChangeHandler}
          resize="none"
        />
      </ContentContainer>
      <hr />
      <ContentContainer>
        <MarkdownRender
          markdown={
            form.content === ""
              ? "마크다운이 변환되어 보여집니다"
              : form.content
          }
          color={form.color === "" ? "gray" : "white"}
          height="auto"
          overflow="visible"
        />
      </ContentContainer>
    </div>
  );
};

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
    background-color: transparent;
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
  button {
    margin-right: 10px;
    padding: 5px 12px;
    border: none;
    border-radius: 20px;
  }
  span {
    color: gray;
    font-size: 18px;
    font-weight: 800;
  }
  input {
    background-color: transparent;
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
    background-color: transparent;
    color: gray;
    width: 100%;
    border: none;
    font-size: 18px;
    resize: none;
    min-height: 24rem;
    scroll-behavior: auto;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: gray;
    }
  }
`;

export default AddPostForm;
