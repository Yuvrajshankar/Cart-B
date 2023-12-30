import React from 'react';
import "./updateProduct.css";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

function UpdateProduct() {
  const categories = ["Electronics", "Clothes", "Books", "Accessories", "Beauty & Care", "Furniture", "Sports", "etc."];
  const navigate = useNavigate();

  const close = () => {
    navigate("/dashboard");
  };
  return (
    <div className="update-product-form">
      <CloseIcon className="close-icon" onClick={close} />
      <h2>Details / Update Product</h2>
      <form>
        <label>Image:</label>
        <input type="file" name="image" accept="image/*" />

        <label>Title:</label>
        <input type="text" name="title" value="Toy" required />

        <label>Description:</label>
        <textarea name="description" value="toy is toy" required></textarea>

        <label>Price:</label>
        <input type="number" name="price" value="50" required />

        <label>Category:</label>
        <select name="category" required>
          <option value="Electronics" disabled selected>Select a category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>

        <label>Stock:</label>
        <input type="number" name="stock" value="500" required />

        <button type="submit">Update Product</button>
      </form>
    </div>
  )
}

export default UpdateProduct;