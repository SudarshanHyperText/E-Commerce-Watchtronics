import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useProductContext } from "../../Context/Products_context";
import Loading from "../Loading/Loading";
import { products } from "../../backend/db/products";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSidebarContext } from "../../Context/Sidebar_context";
import PageHero from "../PageHero/PageHero";
import Stars from "../Stars/Stars";

const Products = () => {
  const { filtered_products } = useProductContext();
  const { text, updateFilters } = useProductContext();
  const navigator = useNavigate();
  const { loading, productList } = useProductContext();
  const { openModal, openSortModal } = useSidebarContext();
  if (loading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      {/* <PageHero title="products" /> */}
      <div className="sort-filter">
        <button className="sort-btn" onClick={openSortModal}>
          Sort
        </button>
        <button className="filter-btn" onClick={openModal}>
          Filters
        </button>
      </div>
      <div className="all-products">
        <form onSubmit={(e) => e.preventDefault()} className="searchbox">
          <input
            type="text"
            name="text"
            placeholder="search..."
            className="input"
            value={text}
            onChange={updateFilters}
          />
        </form>
        <div className="grid-products">
          {filtered_products.map((item) => {
            const {
              price,
              _id,
              title,
              url,
              category,
              actualPrice,
              info,
              stars,
            } = item;
            return (
              <article key={_id} onClick={() => navigator(`/products/${_id}`)}>
                <div className="image">
                  <img src={url} alt={title} className="img-watch" />
                </div>

                <div className="data">
                  <p style={{ color: "grey" }}>
                    <b>{title}</b>
                  </p>
                  <Stars stars={stars} reviews={100} />
                  <p className="price">
                    {" "}
                    <b>${price}</b>
                    <p className="actualPrice">{actualPrice}</p>
                  </p>
                  <p>{info.substring(0, 40)}... </p>

                  {/* <button type="button" className="btn">
                    More Info
                  </button> */}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.div`
  .all-products {
    margin-top: 0.5rem;
  }
  .data {
    width: 200px;
    text-align: start;
  }
  .image {
    text-align: center;
  }

  .img-watch {
    width: 150px;
    height: 180px;
    margin: 5px;
  }
  .grid-products {
    margin-top: 2rem;
  }
  p {
    line-height: 0.8;
  }
  .sort-filter {
    // margin-top: 80px;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .sort-btn {
    border: none;
  }
  .filter-btn {
    border: none;
  }
  .btn {
    display: flex;
    margin: auto;
  }
  article {
    background-color: white;
    width: 250px;
    height: 350px;
    border: 2px solid lightgrey;
    display: grid;
    grid-template-rows: 55% 45%;
    justify-content: center;
    border-radius: 10px;
    margin: 20px auto;
    cursor: pointer;
  }
  .btn {
    align-items: center;
  }
  .grid-products {
    row-gap: 10px;
  }
  .price {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .actualPrice {
    font-size: 10px;
    text-decoration: line-through;
    margin: 0px 5px;
  }
  @media (min-width: 800px) {
    .grid-products {
      display: grid;
      grid-row-gap: 15px;
      grid-column-gap: 20px;
      grid-template-columns: 250px 250px 250px;
      justify-content: center;
      margin-top: 2rem;
    }
    article: hover {
      box-shadow: 6px 6px 6px 6px lightgrey;
    }
    .input {
      padding: 10px;
      margin-top: 2px;
      width: 30%;
    }
    .searchbox {
      text-align: center;
    }
    .filter-btn {
      display: none;
    }
    .sort-btn {
      display: none;
    }
  }
  @media (min-width: 1200px) {
    .grid-products {
      display: grid;
      grid-row-gap: 15px;
      grid-column-gap: 20px;
      grid-template-columns: 250px 250px 250px 250px;
      justify-content: center;
      margin-top: 2rem;
    }
  }
  @media (max-width: 1000px) {
    .grid-products {
      display: grid;
      grid-row-gap: 15px;
      grid-column-gap: 20px;
      grid-template-columns: 250px 250px;
      justify-content: center;
      margin-top: 2rem;
    }
  }
  @media (max-width: 600px) {
    .grid-products {
      display: grid;
      grid-row-gap: 15px;
      grid-column-gap: 20px;
      grid-template-columns: 250px;
      justify-content: center;
      margin-top: 2rem;
    }
  }
`;
