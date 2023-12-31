import React from 'react'
import "./FullProduct.css";
import ProductPage from '../../components/ProductPage/ProductPage'

function FullProduct() {
    return (
        <div className='fullProduct'>
            <div className="page">
                <div className="product__details">
                    <ProductPage
                        img="https://m.media-amazon.com/images/I/813f7EsLzTL._AC_SY200_.jpg"
                        title="The Children's Place Baby Boys' Long Sleeve Sports Graphic T-Shirt"
                        price="200"
                        description="GRAPHIC T-SHIRT — A classic, comfortable fit with graphics she'll love.
                    FABRIC — Made of 100% cotton jersey
                    DESIGN — Features long sleeves, rib-knit crew neck and cat in stocking graphic design at front
                    STYLE — Pair with his favorite jeans or pants for an easy, everyday look!
                    THE CHILDREN'S PLACE — We offer a huge selection of kid's clothing! Shop us for jeans, shorts, leggings, chinos, polo shirts, dresses, pajamas, and accessories."
                        category="Furniture"
                        stock="1500"
                    />
                </div>

                <div className="buttons">
                    <button>Add to Cart</button>
                    <button>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default FullProduct;