import React from "react";
import styled from "styled-components";
import { useWishlistContext } from "../../Context/Wishlist_context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const WishItem = () => {
  const { wishList, removeItem } = useWishlistContext();
  const navigator = useNavigate();

  return (
    <Wrapper>
      <div className="grid-wishList">
        {wishList.map((item) => {
          const { _id, title, url, price, category } = item;
          return (
            <article className="article" key={_id}>
              <img src={url} alt="Image" />
              <h3>Brand: {title}</h3>
              <p>Price: {price}</p>
              <h4>{category}</h4>
              {/* <button onClick={() => addToCart(_id, amount)}>
                Move to Cart
              </button> */}
              <button onClick={() => removeItem(_id)} className="btn">
                {" "}
                Remove
              </button>
              <button onClick={() => navigator("/products")} className="btn">
                {" "}
                Back to products
              </button>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default WishItem;

const Wrapper = styled.div`
  img {
    width: 200px;
    max-width: 100%;
    height: 50%;
    padding: 20px;
  }
  .grid-wishList {
    display: grid;
    grid-row-gap: 15px;
    grid-column-gap: 20px;
    grid-template-columns: 300px 300px 300px 300px;
    justify-content: center;
    margin-top: 2rem;
  }
  .article {
    background-color: white;
    margin: auto;
    width: 250px;
    height: 500px;
    border: 2px solid grey;
    overflow: hideen;
    margin-top: 5rem;
  }
  .btn {
    display: block;
    margin: auto;
    margin-top: 0.8rem;
  }
  @media (max-width: 800px) {
    .grid-wishList {
      display: block;
    }
  }
`;
