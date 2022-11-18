import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/Wishlist_reducer";

const getLocalStorage = () => {
  let wish = localStorage.getItem("wish");
  if (wish) {
    return JSON.parse(localStorage.getItem("wish"));
  } else {
    return [];
  }
};

const intialstate = {
  wishList: getLocalStorage(),
};

const WishlistContext = React.createContext();

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialstate);

  const wishListHandle = (_id, singleProduct) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: { _id, singleProduct } });
  };

  const removeItem = (_id) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: _id });
  };

  useEffect(() => {
    localStorage.setItem("wish", JSON.stringify(state.wishList));
  }, [state.wishList]);

  return (
    <WishlistContext.Provider value={{ ...state, wishListHandle, removeItem }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlistContext = () => {
  return useContext(WishlistContext);
};
