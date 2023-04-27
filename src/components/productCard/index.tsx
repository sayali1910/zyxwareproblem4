import React from "react";
const ProductCard = ({ product }: { product: any }) => {
  const handleAddToCart = () => {
    // Add product to shopping cart
  };
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};
export default ProductCard;
