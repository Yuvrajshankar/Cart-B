import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/admin/user-data', { withCredentials: true });
                setFormData({
                    firstName: response.data.user.firstName || '',
                    lastName: response.data.user.lastName || '',
                    mobileNumber: response.data.user.mobileNumber || '',
                    email: response.data.user.email || '',
                    password: '',
                });
            } catch (error) {
                console.error('Error fetching user data:', error.message);
            }
        };

        fetchUserData();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.patch('/admin/update', formData, { withCredentials: true });
            navigate('/dashboard');
        } catch (error) {
            console.error('Error during update:', error.message);
        }
    };

    return (
        <div className='ad__register'>
            <h1>Profile / Update</h1>
            <form className="ad__formdata" onSubmit={handleUpdate}>
                <div className="ad__form">
                    <label htmlFor='firstName'>First name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder='First name' />
                </div>
                <div className="ad__form">
                    <label htmlFor='lastName'>Last name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder='Last name' />
                </div>
                <div className="ad__form">
                    <label htmlFor='mobileNumber'>Mobile number</label>
                    <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder='Mobile Number' />
                </div>
                <div className="ad__form">
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email' />
                </div>
                <div className="ad__form">
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='********' />
                </div>
                <button className="submit" type="submit">Update / Profile</button>
            </form>
        </div>
    )
}

export default Profile;