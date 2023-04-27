import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/productList";
import LayoutComponent from "./components/layout";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductCart from "./components/productCart";
import { CartContextProps, ProductInterface } from "./interface";

export const CartDataContext = createContext<CartContextProps>({
  cartData: [],
  updateCartData: () => {},
});
function App() {
  const [cartData, setCartData] = useState<Array<ProductInterface>>(
    JSON.parse(localStorage.getItem("cartProducts") || "[]")
  );
  const updateCartData = (newCartData: Array<ProductInterface>) => {
    setCartData(newCartData);
    localStorage.setItem("cartProducts", JSON.stringify(newCartData));
  };
  return (
    <div className="App">
      <CartDataContext.Provider value={{ cartData, updateCartData }}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<ProductCart />} />
        </Routes>
      </CartDataContext.Provider>
    </div>
  );
}

export default App;
