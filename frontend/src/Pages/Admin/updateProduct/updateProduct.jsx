import React, { useEffect, useState } from 'react';
import "./updateProduct.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

function UpdateProduct() {
    const categories = ["Electronics", "Clothes", "Books", "Accessories", "Beauty & Care", "Furniture", "Sports", "etc."];
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: '',
        category: '',
        stock: '',
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/product/${id}`, { withCredentials: true });
                // setProduct(response.data.product || {});
                console.log(response.data);
                setProduct({
                    title: response.data.product.title || '',
                    description: response.data.product.description || '',
                    price: response.data.product.price || '',
                    category: response.data.product.category || '',
                    stock: response.data.product.stock || '',
                })
            } catch (err) {
                console.error('Error fetching product:', err.message);
            }
        };
        fetchProduct();
    }, []);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.patch(`/product/update/${id}`, product, { withCredentials: true });
            navigate("/dashboard");
        } catch (err) {
            console.error('Error updating product:', err.message);
        }
    };

    const close = () => {
        navigate("/dashboard");
    };
    return (
        <div className="update-product-form">
            <CloseIcon className="close-icon" onClick={close} />
            <h2>Details / Update Product</h2>
            <form onSubmit={handleUpdate}>
                <label>Title:</label>
                <input type="text" name="title" value={product.title} onChange={handleChange} />

                <label>Description:</label>
                <textarea name="description" value={product.description} onChange={handleChange}></textarea>

                <label>Price:</label>
                <input type="number" name="price" value={product.price} onChange={handleChange} />

                <label>Category:</label>
                <select name="category" value={product.category} onChange={handleChange}>
                    <option value="" disabled>Select a category</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>

                <label>Stock:</label>
                <input type="number" name="stock" value={product.stock} onChange={handleChange} />

                <button type="submit">Update Product</button>
            </form>
        </div>
    )
}

export default UpdateProduct;