import React, { useState } from 'react';
import './adLogin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const register = () => {
    navigate('/admin_register');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3030/admin/login', formData, { withCredentials: true });

      // Check if 'admin' property exists in the response
      const adminData = response.data.admin;
      if (!adminData) {
        console.error('Error during login: Admin data not found in response.');
        return;
      }

      // // your backend sends the admin data in the response
      // const { admin } = adminData;

      // Navigate to the appropriate page (e.g., dashboard)
      navigate('/dashboard');
    } catch (error) {
      if (error.response) {
        console.error(error.response.data.message);
      } else {
        console.error('Error during login:', error.message);
      }
    }
  };

  return (
    <div className='ad__login'>
      <h1>Hello!, Seller</h1>
      <form onSubmit={login}>
        <div className='ad__form'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' placeholder='Email' onChange={handleChange} />
        </div>
        <div className='ad__form'>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' placeholder='********' onChange={handleChange} />
        </div>

        <p className='terms'>terms & conditions apply.</p>

        <button type='submit' className='submit'>
          Log in
        </button>
      </form>
      <p className='navigate'>
        New to Cart-B sellers? <span onClick={register}>Register</span>
      </p>
    </div>
  );
}

export default AdLogin;
