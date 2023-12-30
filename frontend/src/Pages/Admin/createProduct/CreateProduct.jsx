import React from 'react';
import "./createProduct.css";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

function CreateProduct() {
  const categories = ["Electronics", "Clothes", "Books", "Accessories", "Beauty & Care", "Furniture", "Sports", "etc."];
  const navigate = useNavigate();

  const close = () => {
    navigate("/dashboard");
  };

  return (
    <div className="create-product-form">
      <CloseIcon className="close-icon" onClick={close} />
      <h2>Create Product</h2>
      <form>
        <label>Image:</label>
        <input type="file" name="image" accept="image/*" />

        <label>Title:</label>
        <input type="text" name="title" required />

        <label>Description:</label>
        <textarea name="description" required></textarea>

        <label>Price:</label>
        <input type="number" name="price" required />

        <label>Category:</label>
        <select name="category" required>
          <option value="" disabled selected>Select a category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>

        <label>Stock:</label>
        <input type="number" name="stock" required />

        <button type="submit">Create Product</button>
      </form>
    </div>
  )
}

export default CreateProduct;
