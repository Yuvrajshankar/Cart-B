import React from 'react';
import "./Register.css";
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();

    const login = () => {
        navigate("/login");
    };
    return (
        <div className="register">
            <h1>Join Us</h1>
            <form className='formData'>
                <div className="form">
                    <label htmlFor='name'>Your name</label>
                    <input type="text" name="name" placeholder='First and last name' />
                </div>
                <div className="form">
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" placeholder='Email' />
                </div>
                <div className="form">
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" placeholder='********' />
                </div>

                <p className="terms">terms & conditions apply.</p>

                <button className="submit">REGISTER</button>
            </form>

            <p className='navigate'>Already have an account? <span onClick={login}>Sign in</span></p>
        </div>
    )
}

export default Register;