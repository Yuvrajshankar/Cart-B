import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/HomePage/Home';
import Login from './Pages/Auth/Login';
import Register from './Pages/Register/Register';
import ProductPage from './Pages/ProductPage/ProductPage';
import Cart from './Pages/CartPage/Cart';
import PaymentPage from './Pages/PaymentPage/PaymentPage';
import NavBar from './components/NavBar/NavBar';
import AdReg from './Pages/Admin/Register/AdReg';
import UpdateProduct from './Pages/Admin/updateProduct/UpdateProduct';
import CreateProduct from './Pages/Admin/createProduct/CreateProduct';
import Profile from './Pages/Admin/Profile/Profile';
import DashBoard from './Pages/Admin/DashBoard/DashBoard';
import AdLogin from './Pages/Admin/Login/AdLogin';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={<>
            <NavBar />
            <Home />
          </>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/payment' element={<PaymentPage />} />

          {/* admin */}

          <Route path='/admin_register' element={< AdReg />} />
          <Route path='/admin_login' element={<AdLogin />} />
          <Route path='/dashboard' element={<>
            <NavBar />
            <DashBoard />
          </>} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/createProduct' element={<CreateProduct />} />
          <Route path='/updateProduct' element={<UpdateProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
