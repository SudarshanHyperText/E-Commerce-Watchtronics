import React from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../../Context/Products_context";
import About from "../../Pages/AboutPage";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { useSidebarContext } from "../../Context/Sidebar_context";

const Navbar = () => {
  const { openSidebar } = useSidebarContext();
  return (
    <Wrapper>
      <div className="navbar-container">
        <li>
          <Link to="/" className="home-link">
            WatchTronics
          </Link>
        </li>
        <ul className="navbar-main">
          <li>
            <Link to="/products" className="link">
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>

          <li>
            <Link to="/cart" className="link">
              Cart
            </Link>
          </li>

          <li>
            <Link to="/wishlist" className="link">
              WishList
            </Link>
          </li>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  .navbar-container {
    top: 0;
    left: 0;
    width: 100%;
    background-color: #2f4f4f;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    position: fixed;
  }
  .link, .home-link {
    display: inline;
    text-align: center;
    text-decoration: none;
    color: white;
    font-size: 20px;
    padding: 0 25px;
  }
  ul,
  li {
    display: inline;
    color: white;
  }
  .nav-toggle {
    margin 0px 20px;
    font-size: large;
    display: none;
  }
  .link:hover, .home-link:hover {
    font-size: 25px;
    transition: 0.2s ease-out;
  }

  @media (max-width: 800px) {
    .link {
      display: none;
    }
    .nav-toggle {
      display: block;
    }
  }
`;
