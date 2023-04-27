import React, { useContext, useEffect, useState } from "react";
import styles from "./index.module.css";
import { CartDataContext } from "../../../App";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let { cartData, updateCartData } = useContext(CartDataContext);
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <a className="navbar-brand" href="#">
        Zyxware Problem 4
      </a>
      <button className={styles.cartButton} onClick={() => navigate("/cart")}>
        🛒
        <span className="badge badge-danger">
          {cartData.reduce((count, cartItem) => count + cartItem.quantity, 0)}
        </span>
      </button>
    </nav>
  );
};
export default Header;
