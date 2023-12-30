import React from 'react';
import "./NavBar.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();

    const sell = () => {
        navigate("/admin_login");
    };

    const home = () => {
        navigate("/");
    };

    const cart = () => {
        navigate("/cart");
    };

    
    const login = () => {
        navigate("/login");
    };

    return (
        <header>
            <nav>
                <div className="right" onClick={home}>
                    <img className='header__logo' src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-trolley-images-pixabay-download-pictures-14.png" alt='logo' />
                    <h1 className="logo">Cart-B</h1>
                </div>

                <div className="search">
                    <input className='search__Input' placeholder='Search for products' type="text" />
                    <SearchIcon className="search__Icon" />
                </div>

                <div className="nav__options">
                    <h4 className='name'>YUVRAJ</h4>
                    <h4 onClick={sell}>Become a Seller</h4>
                    <h4 onClick={login}>Log in</h4>
                    <ShoppingCartIcon className='cart' onClick={cart} />
                </div>
            </nav>
        </header>
    )
}

export default NavBar
