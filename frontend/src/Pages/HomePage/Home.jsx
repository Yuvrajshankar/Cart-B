import React from 'react';
import "./Home.css";
import Slider from '../../components/Slider/Slider';
import Product from '../../components/Product/Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <Slider />
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/July23/Stripes/Shop_by_category_PC._QL30_.jpg" className='banner' alt="" />

                <div className="home__products">
                    <div className="product__container">
                        <h3>Electronics</h3>
                        <div className="products">
                            < img src="https://m.media-amazon.com/images/I/813f7EsLzTL._AC_SY200_.jpg" />
                            < img src="https://m.media-amazon.com/images/I/61v9Il7emyL._AC_UL320_.jpg" />
                            < img src="https://m.media-amazon.com/images/I/71gIi3R1DeL._AC_UY218_.jpg" />
                            < img src="https://m.media-amazon.com/images/I/61WgVyWf3GL._AC_UY218_.jpg" />
                            < img src="https://m.media-amazon.com/images/I/71WeaIzFWEL._AC_UY218_.jpg" />
                            < img src="https://m.media-amazon.com/images/I/61fDez1tt4L._AC_UY218_.jpg" />
                            < img src="https://m.media-amazon.com/images/I/615F-i7wkWL._AC_UY218_.jpg" />
                            < img src="https://m.media-amazon.com/images/I/71ASAtN3OZL._AC_UL320_.jpg" />
                            < img src="https://m.media-amazon.com/images/I/519tAJTfFXL._AC_UY218_.jpg" />
                        </div>
                    </div>

                    <div className="product__container">
                        <h3>Clothes</h3>
                        <div className="products">
                            <img src="https://m.media-amazon.com/images/I/61i2UZ9p-tL._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/91vacU3vEuL._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/71hadilbukL._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/812WiEKwV8L._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/81lCEfTfK+L._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/619SdgbV4uL._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/71GEa6BPNIL._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/61viW3S3CjL._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/81WEB8Mc3bL._AC_UL320_.jpg" />
                        </div>
                    </div>

                    <div className="product__container">
                        <h3>Books</h3>
                        <div className="products">
                            <img src="https://m.media-amazon.com/images/I/813f7EsLzTL._AC_SY200_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/61v9Il7emyL._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/71gIi3R1DeL._AC_UY218_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/61WgVyWf3GL._AC_UY218_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/71WeaIzFWEL._AC_UY218_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/61fDez1tt4L._AC_UY218_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/615F-i7wkWL._AC_UY218_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/71ASAtN3OZL._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/519tAJTfFXL._AC_UY218_.jpg" />
                        </div>
                    </div>


                    <div className="product__container">
                        <h3>Accessories</h3>
                        <div className="products">
                            <img src="https://m.media-amazon.com/images/I/61i2UZ9p-tL._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/91vacU3vEuL._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/71hadilbukL._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/812WiEKwV8L._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/81lCEfTfK+L._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/619SdgbV4uL._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/71GEa6BPNIL._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/61viW3S3CjL._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/81WEB8Mc3bL._AC_UL320_.jpg" />
                        </div>
                    </div>


                    <div className="product__container">
                        <h3>Beauty & Care</h3>
                        <div className="products">
                            <img src="https://m.media-amazon.com/images/I/813f7EsLzTL._AC_SY200_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/61v9Il7emyL._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/71gIi3R1DeL._AC_UY218_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/61WgVyWf3GL._AC_UY218_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/71WeaIzFWEL._AC_UY218_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/61fDez1tt4L._AC_UY218_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/615F-i7wkWL._AC_UY218_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/71ASAtN3OZL._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/519tAJTfFXL._AC_UY218_.jpg" />
                        </div>
                    </div>


                    <div className="product__container">
                        <h3>Furniture</h3>
                        <div className="products">
                            <img src="https://m.media-amazon.com/images/I/61i2UZ9p-tL._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/91vacU3vEuL._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/71hadilbukL._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/812WiEKwV8L._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/81lCEfTfK+L._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/619SdgbV4uL._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/71GEa6BPNIL._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/61viW3S3CjL._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/81WEB8Mc3bL._AC_UL320_.jpg" />
                        </div>
                    </div>


                    <div className="product__container">
                        <h3>Sports</h3>
                        <div className="products">
                            <img src="https://m.media-amazon.com/images/I/813f7EsLzTL._AC_SY200_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/61v9Il7emyL._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/71gIi3R1DeL._AC_UY218_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/61WgVyWf3GL._AC_UY218_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/71WeaIzFWEL._AC_UY218_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/61fDez1tt4L._AC_UY218_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/615F-i7wkWL._AC_UY218_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/71ASAtN3OZL._AC_UL320_.jpg" />
                            <img src="https://m.media-amazon.com/images/I/519tAJTfFXL._AC_UY218_.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;