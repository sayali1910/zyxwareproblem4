import axios from "axios";
export const getProductList = () => {
  return axios.get("https://fakestoreapi.com/products");
};
export const getProductData = (productId: number) => {
  return axios.get(`https://fakestoreapi.com/products/${productId}`);
};
