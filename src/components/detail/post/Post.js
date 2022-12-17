import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../../../redux/modules";
// 리덕스
import { useDispatch, useSelector } from "react-redux";
import { __getDetailmain } from "../../../redux/modules/detailmianSlice";
// 스타일
import styled from "styled-components";
// 컴포넌트
import MarkdownRender from "../../MarkdownRender";

const Post = ({ param }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { detailmainPost, error } = useSelector(
    (state) => state.detailmainPost
  );

  // 내용 받아오기
  useEffect(() => {
    dispatch(__getDetailmain(param), [dispatch]);
  }, [dispatch, param]);

  // 수정 클릭 시
  const onClickEditHandler = (id) => {
    navigate(`/form/${id}`);
  };

  // 삭제 클릭 시
  const onClickDeleteHandler = async (id) => {
    if (!window.confirm("삭제하시겠습니까?")) {
      // '아니오' 클릭 시 다시 원위치
    } else {
      // '네' 클릭 시
      try {
        await axios.delete(`${serverUrl}/posts/${id}`);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <Title>{detailmainPost.title}</Title>
      <SubTitleContainer>
        <Date>{detailmainPost.date}</Date>
        <ButtonContainer>
          <p
            onClick={() => {
              onClickEditHandler(param);
            }}
          >
            수정
          </p>
          <p
            onClick={() => {
              onClickDeleteHandler(param);
            }}
          >
            삭제
          </p>
        </ButtonContainer>
      </SubTitleContainer>
      <ContentContainer>
        <MarkdownRender
          markdown={detailmainPost.content}
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
  }
`;

export default React.memo(Post);
