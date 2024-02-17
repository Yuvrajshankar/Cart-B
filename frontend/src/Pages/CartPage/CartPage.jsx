import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./CartPage.css";
import BoughtProduct from '../../components/Product/BoughtProduct';
import Product from '../../components/Product/Product';

function CartPage() {
  const [cartData, setCartData] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [BoughtListProductDetails, setBoughtListProductDetails] = useState(null);
  const [boughtList, setBoughtList] = useState([]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get('/user/user-data', { withCredentials: true });

        if (response.status === 200) {
          setCartData(response.data.user.cart);
          setBoughtList(response.data.user.Bought);
          console.log(response)
        } else {
          console.error('Failed to fetch user cart/bought data');
        }
      } catch (error) {
        console.error('Error fetching user cart/bought data:', error);
      }
    };
    fetchCartData();
  }, []);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        // Iterate over cartData and fetch details for each product
        const cartDetailsPromises = cartData.map(async (cartItem) => {
          const response = await axios.get(`/products/${cartItem.productId}`, { withCredentials: true });

          if (response.status === 200) {
            return response.data.product;
          } else {
            console.error(`Failed to fetch product details for productId: ${cartItem.productId}`);
            return null;
          }
        });

        // Iterate over boughtList and fetch details for each product
        const boughtListDetailsPromises = boughtList.map(async (boughtItem) => {
          const response = await axios.get(`/products/${boughtItem.productId}`, { withCredentials: true });

          if (response.status === 200) {
            return response.data.product;
          } else {
            console.error(`Failed to fetch product details for productId: ${boughtItem.productId}`);
            return null;
          }
        });

        // Wait for all details promises to resolve for both cart and boughtList
        const cartProductDetailsArray = await Promise.all(cartDetailsPromises);
        const boughtListProductDetailsArray = await Promise.all(boughtListDetailsPromises);

        // Set the product details in the state for both cart and boughtList
        setProductDetails(cartProductDetailsArray);
        setBoughtListProductDetails(boughtListProductDetailsArray);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    // Fetch product details when cartData or boughtList changes
    fetchProductDetails();
  }, [cartData, boughtList]);

  const handleRemoveFromCart = (removedProductId) => {
    // Update the cartData state to reflect the removal
    const updatedCartData = cartData.filter(product => product.productId !== removedProductId);
    setCartData(updatedCartData);
  };

  const handleBuy = async (productId) => {
    try {
      const response = await axios.post(`/products/buy/${productId}`, {}, { withCredentials: true });

      if (response.status === 200) {
        console.log(productId === 'move-all' ? 'All products moved to bought list successfully.' : 'Product bought successfully.');
        // After buying or moving, you may want to update the state or fetch the updated data
        // setCartData([]);
        window.location.reload();
        // Fetch the updated bought list or any other necessary updates
        // ...
      } else {
        console.error(productId === 'move-all' ? 'Failed to move products to bought list.' : 'Failed to buy product.');
      }
    } catch (error) {
      console.error(`Error ${productId === 'move-all' ? 'moving products to bought list' : 'buying product'}:`, error);
    }
  };

  const totalProducts = cartData.length;
  const totalPrice = productDetails
    ? productDetails.reduce((total, product) => total + (product?.price || 0), 0)
    : 0;


  return (
    <div className='cart__page'>
      <div className="page__details">
        <h2>Your Cart</h2>
        <div className="product__buy">
          <div className="left_side">
            {totalProducts === 0 ? (
              <p className='cart'>No products in the cart</p>
            ) : (
              cartData.map((product, index) => (
                <Product
                  key={product.productId}
                  productId={product.productId}
                  img={productDetails[index]?.image}
                  title={productDetails[index]?.title}
                  price={productDetails[index]?.price}
                  onRemove={handleRemoveFromCart}
                />
              ))
            )}
          </div>
          <div className="right__side">
            <div className="buy__container">
              <div className="buy__detail">
                <h3 className='heading'>Total Products</h3>
                <h3>{totalProducts}</h3>
              </div>
              <div className="buy__detail">
                <h3 className='heading'>Total Price</h3>
                <h3>${totalPrice}</h3>
              </div>
              <button className='buy__now' type="submit" onClick={() => handleBuy('move-all')}>Buy</button>
            </div>
          </div>
        </div>
        <hr />

        {/* Bought Product */}

        <div className="boughten">
          {boughtList.length === 0 ? (
            <p className='cart'>No products you bought</p>
          ) : (
            <>
              <h2>Boughten</h2>
              {boughtList.map((product, index) => (
                <BoughtProduct
                  key={product.productId}
                  productId={product.productId}
                  img={BoughtListProductDetails[index]?.image}
                  title={BoughtListProductDetails[index]?.title}
                  price={BoughtListProductDetails[index]?.price}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartPage
