import React from "react";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <div className="error-page">
        <h1 className="error-code"> 404</h1>
        <h2> Page not found </h2>
      </div>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.div`
  .error-page {
    min-height: calc(100vh - 15rem);
    font-size: xx-large;
    margin-top: 10rem;
    text-align: center;
  }
`;
