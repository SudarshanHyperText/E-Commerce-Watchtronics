import React, { useEffect } from "react";
import styled from "styled-components";
import Filters from "../components/Filter/Filters";
import Products from "../components/Product/Products";
import PageHero from "../components/PageHero/PageHero";

const ProductsPage = () => {
  return (
    <Wrapper>
      <div className="products-page">
        <PageHero title="products" />

        <div className="grid-container">
          {/* {window.innerWidth > 800 && <Filters />} */}

          <Filters className="filter" />
          <Products />
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductsPage;

const Wrapper = styled.div`
  .products-page {
    margin-top: 7rem;
  }
  .grid-container {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 300px auto;
  }
  @media (max-width: 800px) {
    .grid-container {
      display: block;
      text-align: center;
    }
    .filter {
      display: none;
    }
  }
`;
