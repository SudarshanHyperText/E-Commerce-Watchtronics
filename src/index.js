import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductsProvider } from "./Context/Products_context";
import { FilterProvider } from "./Context/Filter_context";
import { CartProvider } from "./Context/Cart_Context";
import { WishlistProvider } from "./Context/Wishlist_context";
import { AuthProvider } from "./Context/AuthContext";
import { SideabrProvider } from "./Context/Sidebar_context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <SideabrProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <WishlistProvider>
                <App />
              </WishlistProvider>
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </SideabrProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
