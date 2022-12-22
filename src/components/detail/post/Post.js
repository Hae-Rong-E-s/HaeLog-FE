import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseURLApi } from "../../../core/api/axios";
// 리덕스
import { useDispatch, useSelector } from "react-redux";
import { __getDetailmain } from "../../../redux/modules/detailmainSlice";
// 스타일
import styled from "styled-components";
// 컴포넌트
import MarkdownRender from "../../MarkdownRender";

const Post = ({ param }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { nickname, postId } = useParams();
  const { form } = useSelector(({ detailmainPost }) => ({
    form: detailmainPost.detailmainPost,
  }));
  let date = form.createdAt.slice(0, 10);

  // 수정이라면 내용 받아오기
  useEffect(() => {
    dispatch(__getDetailmain({ nickname, postId }), [dispatch]);
  }, [dispatch, nickname, postId]);

  // 수정 클릭 시
  const onClickEditHandler = (postId) => {
    navigate(`/create/${postId}`);
  };

  // 삭제 클릭 시
  const onClickDeleteHandler = async (postId) => {
    if (!window.confirm("삭제하시겠습니까?")) {
      // '아니오' 클릭 시 다시 원위치
    } else {
      // '네' 클릭 시
      try {
        await baseURLApi.delete(`/post/${postId}`);
        navigate(`/@${nickname}`);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <Title>{form.title}</Title>
      <SubTitleContainer>
        <Date>{date}</Date>
        <ButtonContainer>
          {form.myPost && (
            <>
              <p
                onClick={() => {
                  onClickEditHandler(postId);
                }}
              >
                수정
              </p>
              <p
                onClick={() => {
                  onClickDeleteHandler(postId);
                }}
              >
                삭제
              </p>
            </>
          )}
        </ButtonContainer>
      </SubTitleContainer>
      <TagContainer>
        {form.tags.map((tag) => (
          <div>{tag}</div>
        ))}
      </TagContainer>

      <ContentContainer>
        <MarkdownRender
          markdown={form.postContent}
          fontsize="18px"
          height="auto"
          overflow="visible"
        ></MarkdownRender>
      </ContentContainer>
    </div>
  );
};

const Title = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 15px;
  font-size: 35px;
  font-family: "bold";
  color: var(--color-point1);
  border-bottom: solid 2px var(--color-point1);
`;

const SubTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 2px 10px;
`;

const Date = styled.div`
  font-size: 15px;
  font-style: italic;
`;

const ContentContainer = styled.div`
  border-radius: 10px;
  margin: 15px 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  p {
    padding-right: 10px;
    cursor: pointer;
  }
`;

const TagContainer = styled.div`
  margin: 12px;
  display: flex;
  div {
    margin-right: 10px;
    border-radius: 20px;
    padding: 0.5rem 1.25rem;
    background-color: var(--color-deep-red);
  }
`;

export default React.memo(Post);
