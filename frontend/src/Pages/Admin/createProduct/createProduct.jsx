import React, { useState } from 'react';
import "./createProduct.css";
import axios from "axios";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

function CreateProduct() {
    const categories = ["Electronics", "Clothes", "Books", "Accessories", "Beauty & Care", "Furniture", "Sports", "etc."];
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        image: '',
        title: '',
        description: '',
        price: '',
        category: '',
        stock: '',
    });

    const handleChange = async (e) => {
        if (e.target.name === 'image') {
            const file = e.target.files[0];
            if (file) {
                try {
                    const data = new FormData();
                    data.append('file', file);
                    data.append("upload_preset", "yuvraj");
                    data.append("cloud_name", "dkh984g6c");

                    const response = await fetch("https://api.cloudinary.com/v1_1/dkh984g6c/image/upload", {
                        method: "POST",
                        body: data,
                    });
                    const result = await response.json();
                    setFormData(prevFormData => ({
                        ...prevFormData,
                        image: result.url,
                    }));
                } catch (error) {
                    console.error('Image upload failed:', error);
                }
            }
        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [e.target.name]: e.target.value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/product/create', formData, { withCredentials: true });

            navigate('/dashboard');
        } catch (error) {
            console.error('Product Creation failed:', error);
        }
    };

    const close = () => {
        navigate("/dashboard");
    };


    return (
        <div className="create-product-form">
            <h2>Create Product   <CloseIcon className="close-icon" onClick={close} /></h2>
            <form onSubmit={handleSubmit}>
                <label>Image:</label>
                <input type="file" id='imageInput' name="image" accept="image/*" onChange={handleChange} required />

                <label>Title:</label>
                <input type="text" name="title" onChange={handleChange} required />

                <label>Description:</label>
                <textarea name="description" onChange={handleChange} required></textarea>

                <label>Price:</label>
                <input type="number" name="price" onChange={handleChange} required />

                <label>Category:</label>
                <select name="category" onChange={handleChange} required>
                    <option value="" disabled selected>Select a category</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>

                <label>Stock:</label>
                <input type="number" name="stock" onChange={handleChange} required />

                <button type="submit">Create Product</button>
            </form>
        </div>
    )
}

export default CreateProduct;