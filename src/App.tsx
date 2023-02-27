import React from "react";

import {HashRouter, Routes, Route } from "react-router-dom";
import "./scss/style.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import EmptyCart from "./pages/EmptyCart";
//import Cart from "./pages/Cart";
const Cart = React.lazy(() => import("./pages/Cart"));
function App() {
  return (
    <div className="wrapper">
      <Header />
      <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <React.Suspense fallback={<div>Загрузка корзины...</div>}>
              <Cart />
            </React.Suspense>
          }
        />
        <Route path="*" element={<EmptyCart />} />
      </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
