const cart_reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { _id, amount, singleProduct } = action.payload;

    const tempItem = state.cart.find((item) => item._id === _id);

    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem._id === _id) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        _id: _id,
        amount,
        title: singleProduct.title,
        price: singleProduct.price,
        url: singleProduct.url,
        category: singleProduct.category,
        max: singleProduct.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === "REMOVE_ITEM") {
    const tempCart = state.cart.filter((item) => item._id !== action.payload);
    return { ...state, cart: tempCart };
  }
  if (action.type === "TOGGLE_AMOUNT") {
    const { _id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item._id === _id) {
        if (value === "inc") {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        if (value === "dec") {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      } else {
        return item;
      }
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "COUNT_TOTALS") {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { price, amount } = cartItem;
        total.total_items += amount;
        total.total_amount += price * amount;
        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );
    return { ...state, total_items, total_amount };
  }

  throw new Error(`${action.type}`);
};

export default cart_reducer;
