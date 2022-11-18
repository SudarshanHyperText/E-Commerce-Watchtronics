import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <h5>
        {" "}
        @ {new Date().getFullYear()}
        <span> WatchTronics</span>
        <h5> All Rights Reserved</h5>
      </h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222;
  text-align: center;
  span {
    color: hsl(210, 22%, 49%);
  }
  h5 {
    color: white;
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
