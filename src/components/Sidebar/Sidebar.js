import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useSidebarContext } from "../../Context/Sidebar_context";
import { FcDisapprove } from "react-icons/fc";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useSidebarContext();
  return (
    <Wrapper>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <li>
            <Link to="/" className="mart-link" onClick={closeSidebar}>
              WatchTronics
            </Link>
          </li>

          <FcDisapprove size={40} onClick={closeSidebar} />
        </div>

        <li>
          <Link to="/products" className="links" onClick={closeSidebar}>
            Products
          </Link>
        </li>

        <li>
          <Link to="/about" className="links" onClick={closeSidebar}>
            About
          </Link>
        </li>

        <li>
          <Link to="/cart" className="links" onClick={closeSidebar}>
            Cart
          </Link>
        </li>

        <li>
          <Link to="/wishlist" className="links" onClick={closeSidebar}>
            WishList
          </Link>
        </li>

        <li>
          <Link to="/login" className="links" onClick={closeSidebar}>
            Login
          </Link>
        </li>
      </aside>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    transition: all 0.3s linear;
    transform: translate(-100%);
    z-index: -1;
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2f4f4f;
    height: 70px;
  }
  .mart-link {
    color: white;
    font-size: 20px;
  }
  .links {
    font-size: 17px;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  li,
  a {
    text-decoration: none;
    list-style-type: none;
  }
  a {
    padding: 15px;
  }
  a: hover {
    color: white;
    background-color: grey;
    font-size: 22px;
  }
  mart:hover {
    background-color: green;
    color: white;
  }
`;
