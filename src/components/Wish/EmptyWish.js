import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const EmptyWish = () => {
  return (
    <Wrapper>
      <div className="center wish-container">
        <h2> Your WishList is Empty</h2>
        <Link to="/products" className="btn">
          Back to Products
        </Link>
      </div>
    </Wrapper>
  );
};

export default EmptyWish;

const Wrapper = styled.div`
  .wish-container {
    margin-top: 5rem;
  }
`;
