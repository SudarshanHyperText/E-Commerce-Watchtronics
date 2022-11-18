import React from "react";
import { useProductContext } from "../../Context/Products_context";
import styled from "styled-components";
import Sort from "../Sort/Sort";

const Filters = () => {
  const {
    checked,
    filters: { category, price, text, min_price, max_price },
    all_products,
    updateFilters,
    sort,
    updateSort,

    dispatch,
    clearFilters,
  } = useProductContext();

  const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type]);
    return ["all", ...new Set(unique)];
  };

  const categories = getUniqueValues(all_products, "category");
  const titles = getUniqueValues(all_products, "title");

  return (
    <Wrapper>
      <div className="filter">
        <div className="category">
          <h5> category </h5>

          <div>
            {categories.map((item, index) => {
              return (
                <article>
                  <label>
                    <input
                      key={index}
                      name="category"
                      id="category"
                      value={item}
                      type="radio"
                      checked={checked}
                      onClick={updateFilters}
                    />
                    {item}
                  </label>
                </article>
              );
            })}
          </div>
        </div>

        <div className="price-range">
          <h5>Price range from 0 to {price}</h5>
          {/* <p>{formatPrice(price)}</p> */}
          <input
            type="range"
            name="price"
            onChange={updateFilters}
            min={min_price}
            max={max_price}
            value={price}
          />
        </div>

        <div>
          <h5> By Brand name</h5>
          {titles.map((item, index) => {
            return (
              <label className="brands">
                <input
                  key={index}
                  name="title"
                  value={item}
                  type="radio"
                  checked={checked}
                  onClick={updateFilters}
                />
                {item}
              </label>
            );
          })}
        </div>
        {window.innerWidth > 800 && <Sort className="sort" />}
        <button type="button" className="clear btn" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </Wrapper>
  );
};

export default Filters;

const Wrapper = styled.div`
  h5,
  input {
    margin: 15px;
  }
  .filter {
    top: 20px;
  }
  button {
    background: linear-gradient(white, red);
    width: 100px;
  }
  .brands {
    display: block;
  }
  .btn: hover {
    background-color: red;
  }
  .brands {
    display: block;
  }

  .clear {
    margin-top: 2rem;
  }
  @media (max-width: 800px) {
    .filter {
      text-align: start;
    }
    .category {
      text-align: start;
    }
    .brands {
      text-align: start;
    }
  }
`;
