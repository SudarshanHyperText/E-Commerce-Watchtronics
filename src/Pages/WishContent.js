import React from "react";
import { useWishlistContext } from "../Context/Wishlist_context";
import styled from "styled-components";
import WishItem from "../components/Wish/WishItem";
import EmptyWish from "../components/Wish/EmptyWish";
import PageHero from "../components/PageHero/PageHero";

const WishContent = () => {
  const { wishList, removeItem } = useWishlistContext();
  // const { addToCart } = useCartContext();

  return (
    <Wrapper>
      <div className="wish-page">
        <PageHero title="WishList" />
        {wishList.length == 0 && <EmptyWish />}
        <WishItem />;
      </div>
    </Wrapper>
  );
};

export default WishContent;

const Wrapper = styled.div`
  .wish-page {
    margin-top: 7rem;
    min-height: calc(100vh - 12rem);
  }
  .btn {
    background: linear-gradient(white, green);
  }
`;
