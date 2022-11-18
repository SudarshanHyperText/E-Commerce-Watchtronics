import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h2>
          <Link to="/">Home</Link>
          {product && <Link to="/products"> / Products</Link>}/ {title}
        </h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .section-center {
    background-color: hsl(211, 27%, 70%);
    width: 100%;
    min-height: 20vh;
    display: flex;
    align-items: center;
    color: hsl(22, 28%, 21%);
    // margin-top: 4rem;
  }
  a {
    color: hsl(22, 28%, 37%);
    padding: 0.5rem;
    transition: all 0.3s linear;
  }
  a:hover {
    color: hsl(22, 28%, 21%);
  }
  h2{
    margin-left: 5rem;
  }
  }
`;

export default PageHero;
