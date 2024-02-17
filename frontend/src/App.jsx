import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from './Pages/Auth/Login';
import Navbar from './components/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import FullProduct from './Pages/FullProduct/FullProduct';
import CartPage from './Pages/CartPage/CartPage';
import AdReg from './Pages/Admin/Register/AdReg';
import AdLogin from './Pages/Admin/Login/AdLogin';
import DashBoard from './Pages/Admin/DashBoard/DashBoard';
import Profile from './Pages/Admin/Profile/Profile';
import CreateProduct from './Pages/Admin/createProduct/createProduct';
import UpdateProduct from './Pages/Admin/updateProduct/updateProduct';
import Error from './components/Error/Error';
import Register from './Pages/Register/Register';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={<>
            <Navbar />
            <HomePage />
            {/* <Footer /> */}
          </>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/product/:id' element={<>
            <Navbar />
            <FullProduct />
            {/* <Footer /> */}
          </>} />
          <Route path='/cart' element={<>
            <Navbar />
            <CartPage />
            {/* <Footer /> */}
          </>} />

          {/* admin */}
          <Route path='/admin_register' element={<AdReg />} />
          <Route path='/admin_login' element={<AdLogin />} />
          <Route path='/dashboard' element={<>
            <Navbar />
            <DashBoard />
            {/* <Footer /> */}
          </>} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/createProduct' element={<CreateProduct />} />
          <Route path='/updateProduct/:id' element={<UpdateProduct />} />

          <Route path='/*' element={<Error />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
