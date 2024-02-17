import React, { useEffect, useState } from 'react';
import "./HomePage.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Slider from '../../components/Slider/Slider';

function HomePage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const fetchAllProduct = async (e) => {
    try {
      const response = await axios.get('/products');

      setProducts(response.data.products || []);
    } catch (error) {
      if (error.response) {
        console.error(error.response.data.message);
      } else {
        console.error('Error during registration:', error.message);
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
                    <img key={product._id} src={product.image} alt={product.title} />
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

export default HomePage;