import React from 'react';
import "./DashBoard.css";
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from 'react-router-dom';

function DashBoard() {
  const navigate = useNavigate();

  const create = () => {
    navigate("/createProduct");
  };

  const profile = () => {
    navigate("/profile");
  }
  return (
    <div className="dash__board">
      <div className="biodata">
        <div className="bio">
          <h2>Hello, yuvraj pandar</h2>
          <div className="option">
            <div className="create" onClick={create}>
              <AddIcon />
              <h3>Create</h3>
            </div>
            <div className="profile" onClick={profile}>
              <AccountCircleIcon />
              <h3>Profile</h3>
            </div>
          </div>
        </div>


        <div className="container__row">

          <div className="container">
            <p>Total income</p>
            <h3>$600</h3>
          </div>
          <div className="container">
            <p>Total Sells(unit)</p>
            <h3>700</h3>
          </div>
          <div className="container">
            <p>Total Products</p>
            <h3>15</h3>
          </div>

        </div>
        <h1>Your products</h1>
      </div>


      <div className="product__rows">

        <div className="category">
          <h3>Electronics</h3>
          <div className="product__list">

            <div className="products">
              <div className="product">
                <DeleteOutlineIcon className='delete' />
                <div className="product__details">
                  <img src="https://m.media-amazon.com/images/I/51qzMqTzAyL._AC_SY200_.jpg" alt="" />
                  <div className="details">
                    <h3>Mixture</h3>
                    <h3>$15</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="products">
              <div className="product">
                <DeleteOutlineIcon className='delete' />
                <div className="product__details">
                  <img src="https://m.media-amazon.com/images/I/51qzMqTzAyL._AC_SY200_.jpg" alt="" />
                  <div className="details">
                    <h3>Mixture</h3>
                    <h3>$15</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="products">
              <div className="product">
                <DeleteOutlineIcon className='delete' />
                <div className="product__details">
                  <img src="https://m.media-amazon.com/images/I/51qzMqTzAyL._AC_SY200_.jpg" alt="" />
                  <div className="details">
                    <h3>Mixture</h3>
                    <h3>$15</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


        <div className="category">
          <h3>Clothes</h3>
          <div className="product__list">
            <div className="products">
              <div className="product">
                <DeleteOutlineIcon className='delete' />
                <div className="product__details">
                  <img src="https://m.media-amazon.com/images/I/61PUjQcCY9L._AC_SY200_.jpg" alt="" />
                  <div className="details">
                    <h3>Mixture</h3>
                    <h3>$15</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="products">
              <div className="product">
                <DeleteOutlineIcon className='delete' />
                <div className="product__details">
                  <img src="https://m.media-amazon.com/images/I/61PUjQcCY9L._AC_SY200_.jpg" alt="" />
                  <div className="details">
                    <h3>Mixture</h3>
                    <h3>$15</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="products">
              <div className="product">
                <DeleteOutlineIcon className='delete' />
                <div className="product__details">
                  <img src="https://m.media-amazon.com/images/I/61PUjQcCY9L._AC_SY200_.jpg" alt="" />
                  <div className="details">
                    <h3>Mixture</h3>
                    <h3>$15</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>



      </div>

    </div>
  )
}

export default DashBoard
