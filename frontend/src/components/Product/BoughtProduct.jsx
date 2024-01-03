import React from 'react';
import "./Product.css";

function BoughtProduct({ img, title, price, productId }) {
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="detail">
                <h4 className="name">{title}</h4>
                <h3 className="price">$ {price}</h3>
            </div>
        </div>
    )
}

export default BoughtProduct;