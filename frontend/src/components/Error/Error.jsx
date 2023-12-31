import React from 'react';
import "./Error.css";
import { useNavigate } from 'react-router-dom';

function Error() {
    const navigate = useNavigate();

    const home = () => {
        navigate("/");
    };

    return (
        <div className='error'>
            <h1>*404*</h1>
            <h6>go back to <span onClick={home}>Home Page</span>.</h6>
        </div>
    )
}

export default Error