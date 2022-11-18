import React from "react";
import CartTotals from "../components/Cart/CartTotals";
import { useCartContext } from "../Context/Cart_Context";
import AmountButtons from "../components/AmountButtons/AmountButtons";
import EmptyCart from "../components/Cart/EmptyCart";
import styled from "styled-components";
import PageHero from "../components/PageHero/PageHero";
import CartColumns from "../components/Cart/CartColumns";

const CartContent = () => {
  const { cart, removeItem, toggleAmount } = useCartContext();

  const increase = (_id) => {
    toggleAmount(_id, "inc");
  };
  const decrease = (_id) => {
    toggleAmount(_id, "dec");
  };
  // console.log(cart.length);

  return (
    <Wrapper>
      <div className="cart-page">
        <PageHero title="cart" />
        <div className="center">
          {/* <h1>Cart</h1> */}
          {cart.length === 0 ? <EmptyCart /> : ""}
          <div>
            {cart.map((item) => {
              const { title, _id, url, amount } = item;

              return (
                <article key={_id} className="cart center">
                  <img src={url} alt="image" className="img" />
                  <p>
                    <b>Brand:</b> {title}
                  </p>
                  <p>
                    <b>Quantity:</b> {amount}
                  </p>
                  <AmountButtons
                    increase={() => increase(_id)}
                    decrease={() => decrease(_id)}
                    amount={amount}
                    className="amount-btn"
                  />
                  <button
                    type="button"
                    className="btn"
                    onClick={() => removeItem(_id)}
                  >
                    Remove
                  </button>
                </article>
              );
            })}
          </div>

          {/* <CartTotals /> */}
          {cart.length === 0 || <CartTotals />}
        </div>
      </div>
    </Wrapper>
  );
};

export default CartContent;

const Wrapper = styled.div`
.cart-page{
  margin-top: 7rem;
  min-height: calc(100vh - 12rem);
}
  img {
    width: 100px;
    height: auto;
  }
  article {
    display: grid;
    grid-row-gap: 15px;
    grid-column-gap: 20px;
    grid-template-columns: 250px 250px 250px 250px 150px;
    justify-content: center;
    margin-top: 2rem;
  }
  .btn{
  background: linear-gradient(white, green);
  }
  @media (max-width: 800px) {
    article {
      display: block;
      width: 250px;
      height: 550px;
      margin: auto;
      border 1px solid grey;
      margin-top: 2rem;
    }
    img {
      width: 50vw;
    }
    .amount-btn {
      justify-content: center;
    }
  }
`;
