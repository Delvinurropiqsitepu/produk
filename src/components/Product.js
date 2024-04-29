import React, { useState } from 'react';

const Product = ({ name, price, stock }) => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 0 && newQuantity <= stock) {
      setQuantity(newQuantity);
    }
  };

  const total = price * quantity;

  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>Stock: {stock}</p>
      <input
        type="number"
        min="0"
        max={stock}
        value={quantity}
        onChange={handleQuantityChange}
      />
      <p>Total: ${total}</p>
    </div>
  );
};

export default Product;
