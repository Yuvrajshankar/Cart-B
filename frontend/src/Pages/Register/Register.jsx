import React, { useState } from 'react';
import "./Register.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
            const response = await axios.post('http://localhost:3030/user/register', formData);

            navigate('/login');
        } catch (err) {
            if (err.response) {
                console.error(err.response.data.message);
            } else {
                console.error('Error During registration:', err.message);
            }
        }
    };

    const login = () => {
        navigate("/login");
    };
    return (
        <div className="register">
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

            <p className='navigate'>Already have an account? <span onClick={login}>Sign in</span></p>
        </div>
    )
}

export default Register;