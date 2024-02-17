import React, { useState } from 'react';
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/user/login', formData, { withCredentials: true });

            navigate('/');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                toast.error('Check Credentials.');
            } else {
                console.error('Error during login:', error.message);
            }
        }
    };

    return (
        <div className="login">
            <ToastContainer />
            <h1>Log in</h1>
            <form onSubmit={login}>
                <div className="form">
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" placeholder='Email' onChange={handleChange} />
                </div>
                <div className="form">
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" placeholder='********' onChange={handleChange} />
                </div>

                <p className="terms">terms & conditions apply.</p>

                <button className="submit">LOG IN</button>
            </form>

            <p className='navigate'>New to Cart-B?
                <Link to="/register" style={{ textDecoration: "none" }}><span> Register</span></Link>
            </p>
        </div>
    )
}

export default Login;