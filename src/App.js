import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./components/Product/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

import Home from "./Pages/HomePage";
import Error from "./Pages/ErrorPage";
import SingleProduct from "./Pages/SingleProductPage";
import About from "./Pages/AboutPage";
import Cart from "./Pages/CartPage";
import WishContent from "./Pages/WishContent";
import ProductsPage from "./Pages/ProductsPage";
import Filter_modal from "./Pages/Filter_modalPage";
import Sort_modal from "./Pages/Sort_modal";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Filter_modal />
      <Sort_modal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishContent />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
