import React from "react";

import { HashRouter, Routes, Route } from "react-router-dom";
import "./scss/style.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import EmptyCart from "./pages/EmptyCart";

const Cart = React.lazy(() => import("./pages/Cart"));
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route  path="/" element={<Home />} />
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
    </div>
  );
}

export default App;
