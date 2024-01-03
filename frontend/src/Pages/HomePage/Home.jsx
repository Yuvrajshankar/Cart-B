import React, { useEffect, useState } from 'react';
import "./Home.css";
import Slider from '../../components/Slider/Slider';
import Product from '../../components/Product/Product';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    const fetchAllProduct = async (e) => {
        try {
            const response = await axios.get('http://localhost:3030/products');

            setProducts(response.data.products || []);
        } catch (error) {
            if (error.response) {
                console.error(error.response.data.message);
            } else {
                console.error('Error duting registration:', error.message);
            }
        }
    };

    const groupProductsByCategory = (products) => {
        const groupedProducts = {};
        products.forEach((product) => {
            const category = product.category;
            if (!groupedProducts[category]) {
                groupedProducts[category] = [];
            }
            groupedProducts[category].push(product);
        });
        return groupedProducts;
    };

    const groupedProducts = groupProductsByCategory(products);

    useEffect(() => {
        fetchAllProduct();
    }, []);


    return (
        <div className="home">
            <div className="home__container">
                <Slider />
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/July23/Stripes/Shop_by_category_PC._QL30_.jpg" className='banner' alt="" />

                <div className="home__products">
                    {Object.keys(groupedProducts).map((category) => (
                        <div key={category} className="product__container">
                            <h3>{category}</h3>
                            <div className="products">
                                {groupedProducts[category].map((product) => (
                                    <Link to={`/product/${product._id}`} key={product._id}>
                                        <img key={product._id} src={`http://localhost:3030/images/${product.image}`} alt={product.title} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;




// <div className="home__products">
//                     <div className="product__container">
//                         <h3>Electronics</h3>
//                         <div className="products">
//                             < img src="https://m.media-amazon.com/images/I/813f7EsLzTL._AC_SY200_.jpg" />
//                             < img src="https://m.media-amazon.com/images/I/61v9Il7emyL._AC_UL320_.jpg" />
//                             < img src="https://m.media-amazon.com/images/I/71gIi3R1DeL._AC_UY218_.jpg" />
//                             < img src="https://m.media-amazon.com/images/I/61WgVyWf3GL._AC_UY218_.jpg" />
//                             < img src="https://m.media-amazon.com/images/I/71WeaIzFWEL._AC_UY218_.jpg" />
//                             < img src="https://m.media-amazon.com/images/I/61fDez1tt4L._AC_UY218_.jpg" />
//                             < img src="https://m.media-amazon.com/images/I/615F-i7wkWL._AC_UY218_.jpg" />
//                             < img src="https://m.media-amazon.com/images/I/71ASAtN3OZL._AC_UL320_.jpg" />
//                             < img src="https://m.media-amazon.com/images/I/519tAJTfFXL._AC_UY218_.jpg" />
//                         </div>
//                     </div>

//                     <div className="product__container">
//                         <h3>Clothes</h3>
//                         <div className="products">
//                             <img src="https://m.media-amazon.com/images/I/61i2UZ9p-tL._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/91vacU3vEuL._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/71hadilbukL._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/812WiEKwV8L._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/81lCEfTfK+L._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/619SdgbV4uL._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/71GEa6BPNIL._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/61viW3S3CjL._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/81WEB8Mc3bL._AC_UL320_.jpg" />
//                         </div>
//                     </div>

//                     <div className="product__container">
//                         <h3>Books</h3>
//                         <div className="products">
//                             <img src="https://m.media-amazon.com/images/I/813f7EsLzTL._AC_SY200_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/61v9Il7emyL._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/71gIi3R1DeL._AC_UY218_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/61WgVyWf3GL._AC_UY218_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/71WeaIzFWEL._AC_UY218_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/61fDez1tt4L._AC_UY218_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/615F-i7wkWL._AC_UY218_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/71ASAtN3OZL._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/519tAJTfFXL._AC_UY218_.jpg" />
//                         </div>
//                     </div>


//                     <div className="product__container">
//                         <h3>Accessories</h3>
//                         <div className="products">
//                             <img src="https://m.media-amazon.com/images/I/61i2UZ9p-tL._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/91vacU3vEuL._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/71hadilbukL._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/812WiEKwV8L._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/81lCEfTfK+L._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/619SdgbV4uL._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/71GEa6BPNIL._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/61viW3S3CjL._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/81WEB8Mc3bL._AC_UL320_.jpg" />
//                         </div>
//                     </div>


//                     <div className="product__container">
//                         <h3>Beauty & Care</h3>
//                         <div className="products">
//                             <img src="https://m.media-amazon.com/images/I/813f7EsLzTL._AC_SY200_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/61v9Il7emyL._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/71gIi3R1DeL._AC_UY218_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/61WgVyWf3GL._AC_UY218_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/71WeaIzFWEL._AC_UY218_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/61fDez1tt4L._AC_UY218_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/615F-i7wkWL._AC_UY218_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/71ASAtN3OZL._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/519tAJTfFXL._AC_UY218_.jpg" />
//                         </div>
//                     </div>


//                     <div className="product__container">
//                         <h3>Furniture</h3>
//                         <div className="products">
//                             <img src="https://m.media-amazon.com/images/I/61i2UZ9p-tL._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/91vacU3vEuL._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/71hadilbukL._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/812WiEKwV8L._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/81lCEfTfK+L._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/619SdgbV4uL._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/71GEa6BPNIL._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/61viW3S3CjL._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/81WEB8Mc3bL._AC_UL320_.jpg" />
//                         </div>
//                     </div>


//                     <div className="product__container">
//                         <h3>Sports</h3>
//                         <div className="products">
//                             <img src="https://m.media-amazon.com/images/I/813f7EsLzTL._AC_SY200_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/61v9Il7emyL._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/71gIi3R1DeL._AC_UY218_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/61WgVyWf3GL._AC_UY218_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/71WeaIzFWEL._AC_UY218_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/61fDez1tt4L._AC_UY218_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/615F-i7wkWL._AC_UY218_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/71ASAtN3OZL._AC_UL320_.jpg" />
//                             <img src="https://m.media-amazon.com/images/I/519tAJTfFXL._AC_UY218_.jpg" />
//                         </div>
//                     </div>
//                 </div>