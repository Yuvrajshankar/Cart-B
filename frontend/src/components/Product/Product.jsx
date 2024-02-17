import React from 'react';
import "./Product.css";
import axios from 'axios';

function Product({ img, title, price, productId, onRemove }) {
  const removeFromCart = async () => {
    try {
      await axios.post(`/products/cart/remove/${productId}`, {}, { withCredentials: true });
      onRemove(productId);
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="detail">
        <h4 className="name">{title}</h4>
        <h3 className="price">$ {price}</h3>
        <button className="remove" onClick={removeFromCart}>Remove from cart</button>
      </div>
    </div>
  )
}

export default Product
