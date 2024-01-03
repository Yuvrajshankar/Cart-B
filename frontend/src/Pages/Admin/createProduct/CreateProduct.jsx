import React, { useState } from 'react';
import "./createProduct.css";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateProduct() {
  const categories = ["Electronics", "Clothes", "Books", "Accessories", "Beauty & Care", "Furniture", "Sports", "etc."];
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    image: null,
    title: '',
    description: '',
    price: '',
    category: '',
    stock: '',
  });

  const close = () => {
    navigate("/dashboard");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setFormData({ ...formData, image: selectedImage });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('category', formData.category);
    data.append('stock', formData.stock);
    data.append('image', formData.image); // Append the image to FormData

    try {
      const response = await axios.post('http://localhost:3030/product/create', data, { withCredentials: true });

      navigate('/dashboard');
    } catch (error) {
      if (error.response) {
        console.error(error.response.data.message);
      } else {
        console.error('Error during creating Product:', error.message);
      }
    }
  };

  return (
    <div className="create-product-form">
      <CloseIcon className="close-icon" onClick={close} />
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Image:</label>
        <input type="file" id='imageInput' name="image" accept="image/*" onChange={handleImageChange} />

        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleInputChange} required></textarea>

        <label>Price:</label>
        <input type="number" name="price" value={formData.price} onChange={handleInputChange} required />

        <label>Category:</label>
        <select name="category" value={formData.category} onChange={handleInputChange} required>
          <option value="" disabled selected>Select a category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>

        <label>Stock:</label>
        <input type="number" name="stock" value={formData.stock} onChange={handleInputChange} required />

        <button type="submit">Create Product</button>
      </form>
    </div>
  )
}

export default CreateProduct;
