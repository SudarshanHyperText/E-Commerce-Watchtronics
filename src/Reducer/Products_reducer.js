const Products_reducer = (state, action) => {
  if (action.type === "LOAD_PRODUCTS") {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === "UPDATE_FILTERS") {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === "FILTER_PRODUCTS") {
    const { all_products } = state;
    const { text, category, price, title, checked, setChecked } = state.filters;

    let tempProducts = [...all_products];

    if (category !== "all") {
      tempProducts = tempProducts.filter((item) => item.category === category);
    }

    if (title !== "all") {
      tempProducts = tempProducts.filter((item) => item.title === title);
    }

    if (text) {
      tempProducts = tempProducts.filter((item) => {
        return item.title.toLowerCase().startsWith(text);
      });
    }
    tempProducts = tempProducts.filter((item) => item.price <= price);
    return { ...state, filtered_products: tempProducts };
  }

  if (action.type === "UPDATE_SORT") {
    return { ...state, sort: action.payload };
  }
  if (action.type === "SORT_PRODUCTS") {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];
    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }

    return { ...state, filtered_products: tempProducts };
  }

  if (action.type === "CLEAR_FILTERS") {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        title: "all",
        category: "all",

        // price: state.filters.max_price,
      },
    };
  }

  throw new Error(`There is an error regarding ${action.type}  `);
};

export default Products_reducer;
