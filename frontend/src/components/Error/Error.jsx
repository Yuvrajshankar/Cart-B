import React from 'react';
import "./Error.css";
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className='error'>
      <h1>*404*</h1>
      <h6>go back to
        <Link to="/" style={{ textDecoration: "none" }}><span> Home Page</span>.</Link>
      </h6>
    </div>
  )
}

export default Error;