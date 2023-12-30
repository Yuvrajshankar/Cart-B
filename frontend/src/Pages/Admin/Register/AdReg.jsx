import React from 'react';
import "./adReg.css";
import { useNavigate } from 'react-router-dom';

function AdReg() {
    const navigate = useNavigate();

    const login = () => {
        navigate("/admin_login");
    };

    return (
        <div className='ad__register'>
            <h1>Become Seller</h1>
            <form className="ad__formdata">
                <div className="ad__form">
                    <label htmlFor='name'>First name</label>
                    <input type="text" name="name" placeholder='First name' />
                </div>
                <div className="ad__form">
                    <label htmlFor='name'>Last name</label>
                    <input type="text" name="name" placeholder='Last name' />
                </div>
                <div className="ad__form">
                    <label htmlFor='number'>Mobile number</label>
                    <input type="mobile" name="mobile" placeholder='Mobile Number' />
                </div>
                <div className="ad__form">
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" placeholder='Email' />
                </div>
                <div className="ad__form">
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" placeholder='********' />
                </div>

                <p className="terms">terms & conditions apply.</p>

                <button className="submit">Create Account</button>
            </form>
            <p className='navigate'>Already have a seller account? <span onClick={login}>Log in</span></p>
        </div>
    )
}

export default AdReg;