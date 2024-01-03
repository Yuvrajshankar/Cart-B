import React, { useState } from 'react';
import "./adReg.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdReg() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        password: '',
    })

    const login = () => {
        navigate("/admin_login");
    };

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
            const response = await axios.post('http://localhost:3030/admin/register', formData);

            // console.log(response.data);
            navigate('/admin_login');
        } catch (err) {
            if (err.response) {
                console.error(err.response.data.message);
            } else {
                console.error('Error During registration:', err.message);
            }
        }
    };

    return (
        <div className='ad__register'>
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
            <p className='navigate'>Already have a seller account? <span onClick={login}>Log in</span></p>
        </div>
    )
}

export default AdReg;