import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../Reducer/Cart-reducer";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const intialstate = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 100,
};

const cartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialstate);

  const addTOCart = (_id, amount, singleProduct) => {
    dispatch({ type: "ADD_TO_CART", payload: { _id, amount, singleProduct } });
  };

  const removeItem = (_id) => {
    dispatch({ type: "REMOVE_ITEM", payload: _id });
  };

  const toggleAmount = (_id, value) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { _id, value } });
  };

  useEffect(() => {
    dispatch({ type: "COUNT_TOTALS" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <cartContext.Provider
      value={{ ...state, addTOCart, removeItem, toggleAmount }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(cartContext);
};
