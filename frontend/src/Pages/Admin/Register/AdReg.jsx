import React, { useState } from 'react';
import "./AdReg.css";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdReg() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const register = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.firstName || !formData.lastName || !formData.mobileNumber || !formData.email) {
      console.error('Please fill in all required fields.');
      return;
    }

    try {
      const response = await axios.post('/admin/register', formData);
      navigate('/admin_login');
    } catch (err) {
      if (err.response && err.response.status === 409) {
        toast.error('Email is already in use.');
      } else if (err.response && err.response.status === 408) {
        toast.error('Mobile is already in use.');
      } else {
        console.error('Error During registration:', err.message);
      }
    }
  };

  return (
    <div className='ad__register'>
      <ToastContainer />
      <h1>Become Seller</h1>
      <form className="ad__formdata">
        <div className="ad__form">
          <label htmlFor='firstName'>First name</label>
          <input type="text" name="firstName" placeholder='First name' onChange={handleChange} />
        </div>
        <div className="ad__form">
          <label htmlFor='lastName'>Last name</label>
          <input type="text" name="lastName" placeholder='Last name' onChange={handleChange} />
        </div>
        <div className="ad__form">
          <label htmlFor='mobileNumber'>Mobile number</label>
          <input type="text" name="mobileNumber" placeholder='Mobile Number' onChange={handleChange} />
        </div>
        <div className="ad__form">
          <label htmlFor='email'>Email</label>
          <input type="email" name="email" placeholder='Email' onChange={handleChange} />
        </div>
        <div className="ad__form">
          <label htmlFor='password'>Password</label>
          <input type="password" name="password" placeholder='********' onChange={handleChange} />
        </div>

        <p className="terms">terms & conditions apply.</p>

        <button className="submit" onClick={register}>Create Account</button>
      </form>
      <p className='navigate'>Already have a seller account?
        <Link to="/admin_login" style={{ textDecoration: "none" }}><span> Log in</span></Link>
      </p>
    </div>
  )
}

export default AdReg;