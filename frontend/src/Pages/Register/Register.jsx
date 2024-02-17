import React, { useState } from 'react';
import "./Register.css";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/user/register', formData);
            navigate('/login');
        } catch (err) {
            if (err.response && err.response.status === 409) {
                toast.error('User exists.');
            } else {
                console.error('Error During registration:', err.message);
            }
        }
    };

    return (
        <div className="register">
            <ToastContainer />
            <h1>Join Us</h1>
            <form className='formData' onSubmit={register}>
                <div className="form">
                    <label htmlFor='name'>Your name</label>
                    <input type="text" name="name" placeholder='First and last name' onChange={handleChange} />
                </div>
                <div className="form">
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" placeholder='Email' onChange={handleChange} />
                </div>
                <div className="form">
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" placeholder='********' onChange={handleChange} />
                </div>

                <p className="terms">terms & conditions apply.</p>

                <button className="submit">REGISTER</button>
            </form>

            <p className='navigate'>Already have an account?
                <Link to="/login" style={{ textDecoration: "none" }}><span> Sign in</span></Link>
            </p>
        </div >
    )
}

export default Register;