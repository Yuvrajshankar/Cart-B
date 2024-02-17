import React, { useEffect, useState } from 'react';
import "./FullProduct.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ProductPage from '../../components/ProductPage/ProductPage';

function FullProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    img: '',
    title: '',
    description: '',
    price: '',
    category: '',
    stock: '',
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/products/${id}`);
        setProduct(response.data.product || {});
      } catch (err) {
        console.error('Error during fetching product:', err.message);
      }
    };
    fetchProduct();
  }, []);

  const addToCart = async () => {
    try {
      const response = await axios.post(`/products/cart/add/${id}`, {}, { withCredentials: true });

      if (response.status === 200) {
        console.log('Product added to cart successfully:', response.data.message);
        navigate('/cart')
      } else {
        console.error('Failed to add product to cart:', response.data.message);
      }
    } catch (err) {
      console.error('Error adding product to cart:', err.message);
    }
  };

  const buyNow = async () => {
    try {
      const response = await axios.post(`/products/buy/${id}`, {}, { withCredentials: true });

      if (response.status === 200) {
        console.log('Product purchased successfully:', response.data.message);
        alert('You successfully purchased the product and it will be delivered to your list.');
      } else {
        console.error('Failed to purchase product:', response.data.message);
      }
    } catch (err) {
      console.error('Error purchasing product:', err.message);
    }
  };


  return (
    <div className='fullProduct'>

      <div className="page">

        <div className="product__details">
          <ProductPage
            img={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            stock={product.stock}
          />
        </div>

        <div className="buttons">
          <button onClick={addToCart}>Add to Cart</button>
          <button onClick={buyNow}>Buy</button>
        </div>

      </div>

    </div>
  )
}

export default FullProduct
