import React from "react";
import { Routes, Route } from "react-router-dom";
import "./style.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import EmptyCart from "./pages/EmptyCart";
import Cart from "./pages/Cart";
function App() {
  return (
    <div class="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<EmptyCart />} />
      </Routes>
    </div>
  );
}

export default App;
