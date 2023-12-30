import React from 'react';
import "./adLogin.css";
import { useNavigate } from 'react-router-dom';

function AdLogin() {
  const navigate = useNavigate();

  const register = () => {
    navigate("/admin_register");
  };

  return (
    <div className='ad__login'>
      <h1>Hello!, Seller</h1>
      <form>
        <div className="ad__form">
          <label htmlFor='email'>Email</label>
          <input type="email" name="email" placeholder='Email' />
        </div>
        <div className="ad__form">
          <label htmlFor='password'>Password</label>
          <input type="password" name="password" placeholder='********' />
        </div>

        <p className="terms">terms & conditions apply.</p>

        <button className="submit">Log in</button>
      </form>
      <p className='navigate'>New to Cart-B sellers? <span onClick={register}>Register</span></p>
    </div>
  );
}

export default AdLogin;