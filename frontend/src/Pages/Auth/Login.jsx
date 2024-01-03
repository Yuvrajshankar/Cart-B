import React, { useState } from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
            const response = await axios.post('http://localhost:3030/user/login', formData, { withCredentials: true });

            navigate('/');
        } catch (error) {
            if (error.response) {
                console.error(error.response.data.message);
            } else {
                console.error('Error during login:', error.message);
            }
        }
    };

    const register = () => {
        navigate("/register");
    };
    return (
        <div className="login">
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

            <p className='navigate'>New to Cart-B? <span onClick={register}>Register</span></p>
        </div>
    )
}

export default Login;