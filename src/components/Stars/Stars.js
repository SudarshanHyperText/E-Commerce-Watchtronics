import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, reviews }) => {
  return (
    <Wrapper>
      <div className="stars-container">
        <div className="stars">
          {/* star */}
          <span>
            {stars >= 1 ? (
              <BsStarFill />
            ) : stars >= 0.5 ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )}
          </span>
          <span>
            {stars >= 2 ? (
              <BsStarFill />
            ) : stars >= 1.5 ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )}
          </span>
          <span>
            {stars >= 3 ? (
              <BsStarFill />
            ) : stars >= 2.5 ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )}
          </span>
          <span>
            {stars >= 4 ? (
              <BsStarFill />
            ) : stars >= 3.5 ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )}
          </span>
          <span>
            {stars >= 5 ? (
              <BsStarFill />
            ) : stars >= 4.5 ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )}
          </span>
          {/* End of star */}
        </div>
        {/* <p className="reviews"> ({reviews} cutsomer reviews) </p> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  span {
    color: #ffb900;
    font-size: 1rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  .stars-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export default Stars;
