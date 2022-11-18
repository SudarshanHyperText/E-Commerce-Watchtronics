import React from "react";
import Filters from "../components/Filter/Filters";
import Products from "../components/Product/Products";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigator = useNavigate();
  return (
    <Wrapper>
      <div className="home-page">
        <div className="center">
          <h1> WatchTronics</h1>
          <button className="btn" onClick={() => navigator("/products")}>
            {" "}
            Shop now
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  .home-page {
    position: fixed;
    top: 5rem;
    padding: 25px;
    background-image: url("https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    background-size: 100% 90%;
    // background: url("https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    // width: 100%;
    // height: 100%;
    // background-size: cover;
  }
  .center {
    position: absolute;
    top: 30%;
    left: 10%;
  }
  @media (max-width: 800px) {
    .center {
      top: 60%;
    }
    .home-page {
      // background-image: url("http://4.bp.blogspot.com/_IrPaKoaG71w/TQfyTY-BMrI/AAAAAAAABmI/ReFwsOcSjKg/s1600/milgauss-1600x1024.jpg");
    }
  }
`;
