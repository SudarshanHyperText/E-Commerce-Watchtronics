import React, { useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import reducer from "../Reducer/Products_reducer";
import { products } from "../backend/db/products";

const initialState = {
  filtered_products: [],
  all_products: [],
  sort: "price-lowest",
  // checked: false,
  filters: {
    category: "all",
    title: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    text: "",
  },
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);
  const [checked, setChecked] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      const products = response.data.products;

      // setproductList(products);
      dispatch({ type: "LOAD_PRODUCTS", payload: products });

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORT_PRODUCTS" });
  }, [products, state.sort, state.filters]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    // if (name === "title") {
    //   value = e.target.textContent;
    // }
    // if (name === "category") {
    //   value = e.target.textContent;
    // }
    if (name === "price") {
      value = Number(value);
    }

    dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
  };

  const updateSort = (e) => {
    // const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    dispatch({ type: "UPDATE_SORT", payload: value });
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
    setChecked(false);
  };
  useEffect(() => {
    setChecked();
  }, [checked]);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        loading,
        checked,
        updateFilters,
        updateSort,
        dispatch,
        clearFilters,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductsContext);
};
