import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddToCart from "../components/Cart/AddToCart";
import styled from "styled-components";
import { BsFillCartXFill } from "react-icons/bs";
import WishButton from "../components/Wish/WishButton";

const SingleProduct = () => {
  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState([]);
  // const { _id } = singleProduct;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/api/products/${id}`);
        console.log(data.product);
        setSingleProduct(data.product);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <Wrapper>
      <div className="grid-view">
        <img src={singleProduct.url} alt="image" />
        <div className="product-info">
          <h3> {singleProduct.info}</h3>
          <h4> Category: {singleProduct.category} </h4>
          <h4> Price: {singleProduct.price} </h4>
          <p>
            {" "}
            <b>description:</b> {singleProduct.description}
          </p>
          <div>
            <hr />
            {singleProduct.stock > 0 ? (
              <div>
                <AddToCart singleProduct={singleProduct} />
                <WishButton singleProduct={singleProduct} />
              </div>
            ) : (
              <h2>
                Out of stock <BsFillCartXFill />
              </h2>
            )}
          </div>
          <button className="btn">
            <Link to="/products" className="link">
              {" "}
              Back to Products
            </Link>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleProduct;

const Wrapper = styled.div`
  .product-info {
    text-align: start;
    padding: 1rem;
  }
  img {
    width: 40vw;
  }
  .grid-view {
    text-align: center;
    margin-top: 8rem;
  }
  .btn {
    width: 150px;
    margin-top: 10px;
  }

  @media only screen and (min-width: 900px) {
    .grid-view {
      display: grid;
      grid-template-columns: 500px 300px;
      width: 60vw;
      height: 80vh;
      margin: 5rem auto;
    }
    img {
      width: 300px;
      height: 400px;
      margin: auto;
      border-radius: 10px;
    }
    .link {
      width: 120px;
      height: 30px;
      margin-top: 105px;
    }
    .product-info {
      height: 500px;
    }
  }
`;
