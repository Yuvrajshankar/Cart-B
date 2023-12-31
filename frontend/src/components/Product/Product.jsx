import React from 'react';
import "./Product.css";

function Product({ img, title, price }) {
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="detail">
                <h4 className="name">{title}</h4>
                <h3 className="price">$ {price}</h3>
                <button className="remove">Remove from cart</button>
            </div>
        </div>
    )
}

export default Product
