import React, { useState } from "react";
import { Link } from "react-router-dom";
import AmountButtons from "../AmountButtons/AmountButtons";
import { useCartContext } from "../../Context/Cart_Context";

const AddToCart = ({ singleProduct }) => {
  const { addTOCart } = useCartContext();
  const { _id, stock } = singleProduct;

  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <>
      <div>
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />
        <button className="btn">
          <Link
            to="/cart"
            className="link"
            onClick={() => addTOCart(_id, amount, singleProduct)}
          >
            Add To Cart
          </Link>
        </button>
      </div>
    </>
  );
};

export default AddToCart;
