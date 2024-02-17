import React from 'react';
import "./ProductPage.css";

function ProductPage({ img, title, price, description, category, stock }) {
  return (
    <div className='productPage'>
      <div className="fullProduct">
        <img src={img} alt="" />

        <div className="detail">
          <h4 className="name">{title}</h4>
          <h3 className="price">$ {price}</h3>
          <h5 className="description"><i>{description}</i></h5>
          <h4 className="category">{category}</h4>
          <h3 className="stock">Stock : {stock}</h3>
        </div>

      </div>
    </div>
  )
}

export default ProductPage;