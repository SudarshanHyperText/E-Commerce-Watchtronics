const Wishlist_reducer = (state, action) => {
  const { _id, singleProduct } = action.payload;
  if (action.type === "ADD_TO_WISHLIST") {
    console.log("added to wishlist");
    let newItem = {
      _id: _id,
      title: singleProduct.title,
      price: singleProduct.price,
      url: singleProduct.url,
    };
    return { ...state, wishList: [...state.wishList, newItem] };
  }

  if (action.type === "REMOVE_FROM_WISHLIST") {
    const tempWish = state.wishList.filter(
      (item) => item._id !== action.payload
    );
    return { ...state, wishList: tempWish };
  }

  throw new Error(`${action.type}`);
};

export default Wishlist_reducer;
