import React from 'react'
import "./Cart.css";
import Product from '../../components/Product/Product';

function Cart() {
  return (
    <div className='cart__page'>
      <div className="page__details">
        <h2>Your Cart</h2>
        <div className="product__buy">
          <div className="left_side">
            <Product
              img="https://m.media-amazon.com/images/I/813f7EsLzTL._AC_SY200_.jpg"
              title="The Children's Place Baby Boys' Long Sleeve Sports Graphic T-Shirt"
              price="400" />
            <Product
              img="https://m.media-amazon.com/images/I/813f7EsLzTL._AC_SY200_.jpg"
              title="The Children's Place Baby Boys' Long Sleeve Sports Graphic T-Shirt"
              price="400" />
            <Product
              img="https://m.media-amazon.com/images/I/813f7EsLzTL._AC_SY200_.jpg"
              title="The Children's Place Baby Boys' Long Sleeve Sports Graphic T-Shirt"
              price="400" />
            <Product
              img="https://m.media-amazon.com/images/I/813f7EsLzTL._AC_SY200_.jpg"
              title="The Children's Place Baby Boys' Long Sleeve Sports Graphic T-Shirt"
              price="400" />
            <Product
              img="https://m.media-amazon.com/images/I/813f7EsLzTL._AC_SY200_.jpg"
              title="The Children's Place Baby Boys' Long Sleeve Sports Graphic T-Shirt"
              price="400" />
          </div>
          <div className="right__side">
            <div className="buy__container">
              <div className="buy__detail">
                <h3 className='heading'>Total Products</h3>
                <h3>10</h3>
              </div>
              <div className="buy__detail">
                <h3 className='heading'>Total Price</h3>
                <h3>$ 800</h3>
              </div>
              <button className='buy__now' type="submit">Buy</button>
            </div>
          </div>
        </div>
        <hr />

        {/* Bought Product */}

        <div className="boughten">
          <h2>Boughten</h2>
          <Product
            img="https://m.media-amazon.com/images/I/813f7EsLzTL._AC_SY200_.jpg"
            title="The Children's Place Baby Boys' Long Sleeve Sports Graphic T-Shirt"
            price="400" />
          <Product
            img="https://m.media-amazon.com/images/I/813f7EsLzTL._AC_SY200_.jpg"
            title="The Children's Place Baby Boys' Long Sleeve Sports Graphic T-Shirt"
            price="400" />
          <Product
            img="https://m.media-amazon.com/images/I/813f7EsLzTL._AC_SY200_.jpg"
            title="The Children's Place Baby Boys' Long Sleeve Sports Graphic T-Shirt"
            price="400" />
          <Product
            img="https://m.media-amazon.com/images/I/813f7EsLzTL._AC_SY200_.jpg"
            title="The Children's Place Baby Boys' Long Sleeve Sports Graphic T-Shirt"
            price="400" />
          <Product
            img="https://m.media-amazon.com/images/I/813f7EsLzTL._AC_SY200_.jpg"
            title="The Children's Place Baby Boys' Long Sleeve Sports Graphic T-Shirt"
            price="400" />
        </div>
      </div>
    </div>
  )
}

export default Cart
