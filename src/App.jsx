import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Header";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
