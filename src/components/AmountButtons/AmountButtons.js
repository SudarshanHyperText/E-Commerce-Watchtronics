import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import styled from "styled-components";

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <Wrapper>
      <div className="amount-btn">
        <button type="button" onClick={increase}>
          <BsChevronUp />
        </button>
        <h2> {amount} </h2>
        <button type="button" onClick={decrease}>
          <BsChevronDown />
        </button>
      </div>
    </Wrapper>
  );
};

export default AmountButtons;

const Wrapper = styled.div`
  .amount-btn {
    display: flex;

    align-items: center;
  }
  .amount-btn button {
    height: 35px;
    margin: 10px;
  }

  }
`;
