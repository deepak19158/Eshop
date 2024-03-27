import React from "react";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Wrapper>
      <h1>Error</h1>
      <p>404 Not Found</p>
    </Wrapper>
  );
};

export default ErrorPage;

const Wrapper = styled.section`
  height: 600px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 60px;
  }
  p {
    font-size: 30px;
  }
`;
