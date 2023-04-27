import React, { useContext, useEffect, useState } from "react";
import { getProductList } from "../../api/productAPI";
import styles from "./index.module.css";
import { CartDataContext } from "../../App";
import LayoutComponent from "../layout";
import { ProductInterface } from "../../interface";
const ProductList = () => {
  const [productList, setProductList] = useState([]);
  let { cartData, updateCartData } = useContext(CartDataContext);
  useEffect(() => {
    getProductList()
      .then((response) => {
        console.log(response.data);
        setProductList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleAddToCart = (product: ProductInterface) => {
    let cartProducts = JSON.parse(localStorage.getItem("cartProducts") || "[]");
    console.log(cartProducts, cartProducts.length);
    if (cartProducts.length === 0) {
      product.quantity = 1;
      cartProducts = [product];
    } else {
      let isProductPresent = false;
      cartProducts.map((cartProduct: ProductInterface) => {
        if (cartProduct.id === product.id) {
          cartProduct.quantity = cartProduct.quantity + 1;
          isProductPresent = true;
        }
      });
      if (isProductPresent === false) {
        product.quantity = 1;
        cartProducts = [...cartProducts, product];
      }
    }
    updateCartData(cartProducts);
  };
  return (
    <LayoutComponent>
      <div className={styles.container}>
        {productList.map((product: ProductInterface, index: number) => {
          return (
            <div className={styles.itemcard} key={index}>
              <img
                src={product?.image}
                alt="Product Image"
                className={styles.productImage}
              />
              <div>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <h6>🏷️{product.price}Rs.</h6>
                <button
                  className={styles.cartButton}
                  onClick={() => handleAddToCart(product)}
                >
                  🛒
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </LayoutComponent>
  );
};
export default ProductList;
