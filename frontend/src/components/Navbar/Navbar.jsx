import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import axios from "axios";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const response = await axios.get("/admin/checkAdmin", { withCredentials: true });
        setAdmin(response.data);
        navigate("/dashboard")
      } catch (error) {
        setUser(null);
      }
    };

    const checkUser = async () => {
      try {
        const response = await axios.get("/user/checkUser", { withCredentials: true });
        setUser(response.data);
        navigate("/")
      } catch (error) {
        setUser(null);
      }
    };

    checkAdmin();
    checkUser();
  }, []);

  const adminLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/admin/logout", {}, { withCredentials: true });
      setAdmin(null);
      navigate('/')
    } catch (error) {
      console.error('Error Admin during Logout:', error);
    }
  };

  const userLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/logout", {}, { withCredentials: true });
      setUser(null);
      navigate('/')
    } catch (error) {
      console.error('Error User during Logout:', error);
    }
  };


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

        <div className="right" onClick={home} >
          <img className='header__logo' src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-trolley-images-pixabay-download-pictures-14.png" alt='logo' />
          <h1 className='logo'>Cart-B</h1>
        </div>

        <div className="search">
          <input className='search__Input' placeholder='Search for products' type="text" />
          <SearchIcon className="search__Icon" />
        </div>

        <div className="nav__options">
          {admin ? (
            <h4 onClick={adminLogout}>Logout</h4>
          ) : user ? (
            <>
              <h4 onClick={userLogout}>Logout</h4>
              <ShoppingCartIcon className='cart' onClick={cart} />
            </>
          ) : (
            <>
              <h4 onClick={sell} style={{ color: '#ff7f00', cursor: 'pointer' }}>Seller!</h4>
              <h4 onClick={login}>Log in</h4>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
