import React from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const register = () => {
        navigate("/register");
    };
    return (
        <div className="login">
            <h1>Log in</h1>
            <form>
                <div className="form">
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" placeholder='Email' />
                </div>
                <div className="form">
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" placeholder='********' />
                </div>

                <p className="terms">terms & conditions apply.</p>

                <button className="submit">LOG IN</button>
            </form>

            <p className='navigate'>New to Cart-B? <span onClick={register}>Register</span></p>
        </div>
    )
}

export default Login;