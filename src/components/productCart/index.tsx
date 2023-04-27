import React, { useContext, useEffect, useState } from "react";
import LayoutComponent from "../layout";
import { CartDataContext } from "../../App";
import styles from "./index.module.css";
import { ProductInterface } from "../../interface";
const ProductCart = () => {
  let { cartData, updateCartData } = useContext(CartDataContext);
  const handleRemoveFromCart = (productId: number) => {
    let tempCartData = [...cartData];
    tempCartData = tempCartData.filter((product) => product.id !== productId);
    updateCartData(tempCartData);
  };
  const handleQuantityChange = (productId: number, quantity: number) => {
    let newCartData: Array<ProductInterface> = [...cartData];
    console.log(newCartData);
    newCartData.map((product: ProductInterface) => {
      if (product.id === productId) {
        product.quantity = quantity;
      }
    });

    updateCartData(newCartData);
  };
  const handleTotalCost = () => {
    let totalCost = 0;
    cartData.map((product: ProductInterface) => {
      let productCost = product.price * product.quantity;
      totalCost = totalCost + productCost;
    });
    return totalCost;
  };
  return (
    <LayoutComponent>
      <ul className="list-group">
        {cartData.map((product, index: number) => {
          return (
            <li className="list-group-item" key={index}>
              <div key={index}>
                <img
                  src={product?.image}
                  alt="Product Image"
                  className={styles.productImage}
                />
                <div>
                  <h3 className={styles.productTitle}>{product.title}</h3>
                  <h6>🏷️{product.price}Rs.</h6>
                </div>
              </div>
              <button
                className={styles.cartButton}
                onClick={() => handleRemoveFromCart(product.id)}
              >
                ❌ Remove From Cart
              </button>
              <input
                type="number"
                value={product.quantity}
                onChange={(event) => {
                  console.log(event.target.value);
                  handleQuantityChange(product.id, Number(event.target.value));
                }}
              ></input>
            </li>
          );
        })}
        <li className="list-group-item">
          <div>
            <h3>Total Cost: {handleTotalCost()}</h3>
            {cartData.map((product, index: number) => {
              return (
                <p key={index}>
                  {product.title} X{product.quantity} =
                  {product.price * product.quantity}Rs.
                </p>
              );
            })}
          </div>
        </li>
      </ul>
    </LayoutComponent>
  );
};
export default ProductCart;
