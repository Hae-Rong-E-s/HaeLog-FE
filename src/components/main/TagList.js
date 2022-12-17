import React from "react";
import styled from "styled-components";
import Button from "../elem/Button";

const Container = styled.div`
  margin: 30px 0;
`;

const TagList = () => {
  return (
    <Container>
      <Button fontSize="12px" margin="0 20px 0 0">
        React
      </Button>
      <Button fontSize="12px" margin="0 20px 0 0">
        JavaScript
      </Button>
      <Button fontSize="12px" margin="0 20px 0 0">
        TodayILearn
      </Button>
    </Container>
  );
};

export default TagList;
