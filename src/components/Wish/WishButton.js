import React from "react";
import { Link } from "react-router-dom";
import { useWishlistContext } from "../../Context/Wishlist_context";
import styled from "styled-components";

const WishButton = ({ singleProduct }) => {
  const { wishListHandle } = useWishlistContext();
  const { _id } = singleProduct;

  return (
    <Wrapper>
      <button className="btn">
        <Link
          to="/wishlist"
          className="link"
          onClick={() => wishListHandle(_id, singleProduct)}
        >
          {" "}
          Move to Wishlist
        </Link>
      </button>
    </Wrapper>
  );
};

export default WishButton;
const Wrapper = styled.div``;
