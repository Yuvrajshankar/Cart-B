import React from 'react';
import "./Profile.css";

function Profile() {
  return (
    <div className='ad__register'>
      <h1>Profile / Update</h1>
      <form className="ad__formdata">
        <div className="ad__form">
          <label htmlFor='name'>First name</label>
          <input type="text" name="name" value="Yuvraj" placeholder='First name' />
        </div>
        <div className="ad__form">
          <label htmlFor='name'>Last name</label>
          <input type="text" name="name" value="Pandar" placeholder='Last name' />
        </div>
        <div className="ad__form">
          <label htmlFor='number'>Mobile number</label>
          <input type="mobile" name="mobile" value="85473129586" placeholder='Mobile Number' />
        </div>
        <div className="ad__form">
          <label htmlFor='email'>Email</label>
          <input type="email" name="email" value="alpha@gmail.com" placeholder='Email' />
        </div>
        <div className="ad__form">
          <label htmlFor='password'>Password</label>
          <input type="password" name="password" value="123456789" placeholder='********' />
        </div>

        <button className="submit">Update Profile</button>
      </form>
    </div>
  )
}

export default Profile
