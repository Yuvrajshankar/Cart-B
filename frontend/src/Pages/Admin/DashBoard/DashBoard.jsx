import React, { useEffect, useState } from 'react';
import "./DashBoard.css";
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function DashBoard() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('/product', { withCredentials: true });
            setProducts(response.data.products || []);
        } catch (err) {
            if (err.response) {
                console.error(err.response.data.message);
            } else {
                console.error('Error during registration:', err.message);
            }
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDeleteProduct = async (productId) => {
        try {
            const response = await axios.delete(`/product/delete/${productId}`, { withCredentials: true });

            if (response.status === 200) {
                console.log('Product deleted successfully:', response.data.message);
                fetchProducts();
            } else {
                console.error('Failed to delete product:', response.data.message);
            }
        } catch (err) {
            console.error('Error deleting product:', err.message);
        }
    };

    // Function to group products by category
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

    const create = () => {
        navigate("/createProduct");
    };

    const profile = () => {
        navigate("/profile");
    };

    return (
        <div className="dash__board">
            <div className="biodata">
                <div className="bio">
                    <h2>Hello,</h2>
                    <div className="option">
                        <div className="create" onClick={create}>
                            <AddIcon />
                            <h3>Create</h3>
                        </div>
                        <div className="profile" onClick={profile}>
                            <AccountCircleIcon />
                            <h3>Profile</h3>
                        </div>
                    </div>
                </div>

                <div className="container__row">
                    <div className="container">
                        <p>Total income (random)</p>
                        <h3>$600</h3>
                    </div>
                    <div className="container">
                        <p>Total Sells(random)</p>
                        <h3>700</h3>
                    </div>
                    <div className="container">
                        <p>Total Products</p>
                        <h3>{products.length}</h3>
                    </div>
                </div>
                <h1>Your products</h1>
            </div>

            <div className="product__rows">
                {Object.keys(groupedProducts).map((category) => (
                    <div key={category} className="category">
                        <h3>{category}</h3>
                        <div className="product__list">
                            {groupedProducts[category].map((product) => (
                                <div key={product._id} className="products">
                                    <div className="productss">
                                        <DeleteOutlineIcon className='delete' onClick={() => handleDeleteProduct(product._id)} />
                                        <Link to={`/updateProduct/${product._id}`} style={{ textDecoration: "none" }}>
                                            <div className="product__details">
                                                <img src={product.image} alt="" />
                                                <div className="details">
                                                    <h3>{product.title}</h3>
                                                    <h3>${product.price}</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div >
    )
}

export default DashBoard;