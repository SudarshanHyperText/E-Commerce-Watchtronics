import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const EmptyCart = () => {
  return (
    <Wrapper>
      <div className="empty">
        <h1> Your Cart is empty</h1>
        <Link to="/products" className="btn">
          {" "}
          Fill It
        </Link>
      </div>
    </Wrapper>
  );
};

export default EmptyCart;

const Wrapper = styled.div`
  .empty {
    margin-top: 5rem;
  }
  h1 {
    margin-bottom: 1rem;
  }
`;
